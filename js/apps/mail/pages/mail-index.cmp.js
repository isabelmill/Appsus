import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolders from '../cmps/mail-folders.cmp.js';
import mailAdd from './mail-add.cmp.js'
import mailDetails from './mail-details.cmp.js';

export default {
    // props: [""],
    template: `
        <section class="mail-header">
            <nav>
                <ul class="logo-bar">
                    <li><img src="img/mail-img/icons/menu.svg"></li>
                    <li><img class="logo-img" src="img/mail-img/logo/gmail.png"></li>
                    <li class="logo-txt">Gmail</li>
                </ul> 
                <mail-filter @filtered="setFilterTxt"></mail-filter> 
                <ul class="icons-bar">
                    <li><img src="img/mail-img/icons/help.svg"></li>
                    <li><img src="img/mail-img/icons/settings.svg"></li>
                    <li><img src="img/mail-img/icons/apps.svg"></li>
                </ul>
            </nav>
        </section>
        <section class="compose-trash-bar">
            <div class="btn-compose"> 
                <div @click="showMailAddModal" class="add"><img src="img/mail-img/icons/add.png"></div> 
                <p @click="showMailAddModal">Compose</p></div>

            <div v-if="markedMails && markedMails.length !== 0" class="trash"><img @click="removeMails" src="img/mail-img/icons/delete.svg"></div>
            <div v-if="selectedMail" class="trash"><img @click="backToMailsList" src="img/mail-img/icons/arrow_back.svg"></div>
           
        </section>
        <section v-if="mails" class="mail-main-layout">
            <mail-folders @filtered="setFolder" @back="backToMailsList" :unreadMails="unreadCount"/>
            <mail-list v-if="!selectedMail" :mails="mailsToShow"/>
            <mail-details v-if="selectedMail" :mail="selectedMail"/>
            <mail-add v-if="isAddMail" @add="saveSentMail"/>
        </section>
    `,
    components: {
        mailList,
        mailDetails,
        mailFilter,
        mailFolders,
        mailAdd,
    },
    data() {
        return {
            isAddMail: false,
            mails: null,
            filterBy: {
                txt: '',
                folder: ''
            },
            selectedMail: null,
            markedMails: null,
            unreadMails: null,
        }
    },
    created() {
        this.getMails()
        this.filterBy.folder = 'inbox'
        eventBus.on('readMail', this.readMail)
        eventBus.on('markedMail', this.marked)

    },
    methods: {
        getMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                    this.mailsUnreadCount()
                })
        },
        showMailAddModal() {
            this.isAddMail = !this.isAddMail
        },
        setFilterTxt(txt) {
            this.filterBy.txt = txt
        },
        setFolder(folder) {
            this.filterBy.folder = folder
        },
        removeMails() {
            this.mails.forEach((mail) => {
                if (mail.isSelected) {
                    if (mail.status === 'trash') {
                        mail.status = 'deleted'
                        mail.isSelected = false
                        mail.isStarred = false
                        mail.isImportant = false
                        mailService.save(mail)
                        return
                    }
                    mail.status = 'trash'
                    mail.isSelected = false
                    mailService.save(mail)
                }
            })
            this.markedMails = null
        },
        saveSentMail(newMail) {
            mailService.save(newMail)
                .then(() => {
                    mailService.query()
                        .then(mails => {
                            this.mails = mails
                        })
                })
        },
        readMail(mail) {
            this.selectedMail = mail
            this.markedMails = null
            this.mails.forEach(mail => mail.isSelected = false)
        },
        backToMailsList() {
            this.selectedMail = null
        },
        marked() {
            this.markedMails = this.mails.filter(mail => mail.isSelected === true)
        },
        mailsUnreadCount() {
            if (!this.mails) return
            this.unreadMails = this.mails.filter(mail => !mail.isRead)
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy.folder && !this.filterBy.txt) return this.mails
            const regexTxt = new RegExp(this.filterBy.txt, 'i')

            if (this.filterBy.folder === 'inbox') return this.mails.filter(mail =>
                (mail.status === 'inbox') && regexTxt.test(mail.subject + mail.user))

            if (this.filterBy.folder === 'trash') return this.mails.filter(mail =>
                (mail.status === 'trash') && regexTxt.test(mail.subject + mail.user))
            if (this.filterBy.folder === 'sent') return this.mails.filter(mail =>
                (mail.status === 'sent') && regexTxt.test(mail.subject + mail.user))
           
            if (this.filterBy.folder === 'starred') return this.mails.filter(mail =>
                (mail.isStarred) && regexTxt.test(mail.subject + mail.user))

            if (this.filterBy.folder === 'important') return this.mails.filter(mail =>
                (mail.isImportant) && regexTxt.test(mail.subject + mail.user))
        },
        unreadCount() {
            this.mailsUnreadCount()
            return this.unreadMails
        }
    },
}