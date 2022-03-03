import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolders from '../cmps/mail-folders.cmp.js';

export default {
    // props: [""],
    template: `
        <section class="mail-header">
            <nav>
                <ul class="logo-bar">
                    <li> <img src="img/mail-img/icons/menu.svg"></li>
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
        <section class="mail-main-layout">
            <mail-folders @filtered="setFilter"/>
            <mail-list :mails="mailsToShow2"/>
        </section>
    `,
    components: {
        mailList,
        mailService,
        mailFilter,
        mailFolders,
    },
    data() {
        return {
            mails: null,
            filterBy: {
                txt: '',
                status: 'inbox'
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
        setFilter(filterBy) {
            // console.log(filterBy)
            this.filterBy = filterBy
        },
        // setFilterFolder(){
        //     this.filter.s
        // }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy.txt) return this.mails;
            const regexTxt = new RegExp(this.filterBy.txt, 'i')
            return this.mails.filter(mail => regexTxt.test(mail.user))

        },
        mailsToShow2() {
            if(this.filterBy.status === 'inbox') return this.mails;
            return this.mails.filter(mail => mail.status === this.filterBy.status)
        }
    },
}