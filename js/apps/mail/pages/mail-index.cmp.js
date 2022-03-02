import { mailService } from '../services/mail-service.js';
import mailHeader from '../cmps/mail-header.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    // props: [""],
    template: `
        <section>
            <mail-header />
            <mail-list :mails="mails"/>
        </section>
    `,
    components: {
        mailHeader,
        mailList,
        mailService,
    },
    data() {
        return {
            mails: null,
        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
                console.log('mails', mails)
            })
    },
    methods: {},
    computed: {},
    unmounted() { },
}