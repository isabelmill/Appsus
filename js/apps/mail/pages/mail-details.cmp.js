import { mailService } from '../services/mail-service';

export default {
    template: `
        <section v-if="mail" class="mail-details">
            <h4>mail details</h4>
            <pre>{{mail}}</pre>
            <button @click="loadMail">Reload</button>
            <router-link :to="'/mail/'+mail.prevMailId">Prev Car</router-link> | 
            <router-link :to="'/mail/'+mail.nextMailId">Next Car</router-link> | 
            <router-link to="/mail">Back</router-link>
        </section>
        <section v-else class="loading">
        </section>
    `,
    data() {
        return {
            mail: null
        };
    },
    created() {
        console.log('Mail Details CREATED!!!');
    },
    computed: {
        mailId() {
            return this.$route.params.MailId
        }
    },
    methods: {
        loadMail() {
            mailService.get(this.mailId)
            .then(mail => this.mail = mail);
        }
    },
    watch : {
        mailId : {
            handler(){
                this.loadMail()
            },
            immediate : true,
        }
    }
};