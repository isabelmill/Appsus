import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolders from '../cmps/mail-folders.cmp.js';
import mailAdd from './mail-add.cmp.js'

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
                <mail-filter @filtered="setFilter"></mail-filter>
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
            <div class="trash"><img @click="removeMails" src="img/mail-img/icons/delete.svg"></div>
        </section>
        <section class="mail-main-layout">
            <mail-folders @filtered="setFilter"/>
            <mail-list :mails="mailsToShow2"/>
            <mail-add v-if="isAddMail" @add="saveSentMail"/>
        </section>
    `,
    components: {
        mailList,
        mailService,
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
                status: ''
            },
        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
                console.log('mails', mails)
            })
    },
    methods: {
        showMailAddModal() {
            this.isAddMail = !this.isAddMail
            // console.log('isAddMail', this.isAddMail)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

        removeMails() {
            this.mails.forEach((mail) => {
                if (mail.isSelected) {
                    mail.status = 'trash'
                    mailService.save(mail)
                }
            })
        },
        saveSentMail(newMail) {
            // console.log(newMail)
            mailService.save(newMail)
                .then(() => {
                    console.log('New Msg Saved!')
                    mailService.query()
                        .then(mails => {
                            this.mails = mails
                        })
                })
        }
    },
    computed: {
        // mailsToShow() {
        //     if (!this.filterBy.txt) return this.mails;
        //     const regexTxt = new RegExp(this.filterBy.txt, 'i')
        //     return this.mails.filter(mail => regexTxt.test(mail.user))
        // },
        mailsToShow2() {
            // if(this.filterBy.status === '') return this.mails.filter(mail => mail.status === '');
            if (!this.filterBy.status)
                return this.mails.filter(mail =>
                    mail.status === 'inbox' ||
                    mail.status === 'starred' ||
                    mail.status === 'important');
            return this.mails.filter(mail => mail.status === this.filterBy.status)
        },

    },
}