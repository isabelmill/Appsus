// import { mailService } from '../services/mail-service.js';
export default {
        props: ["mail"],
    template: `
        <section class="mail-details">
            <h4>mail details</h4>
            <pre>{{mail}}</pre>
            <!-- <button @click="loadMail">Reload</button> -->
            <!-- <router-link :to="'/mail/'+mail.prevMailId">Prev Car</router-link> | 
            <router-link :to="'/mail/'+mail.nextMailId">Next Car</router-link> |  -->
            <!-- <router-link to="/mail">Back</router-link> -->
        </section>
        <!-- <section v-else class="loading">
        </section> -->
    `,
    components: {
    },
    data() {
        return {
        };
    },
    created() {
    },
    computed: {

        // mailId() {
        //     return this.$route.params.MailId
        // }
    },
    methods: {
        // loadMail() {
        //     mailService.get(this.mailId)
        //     .then(mail => this.mail = mail);
        // }
    },
    // watch : {
    //     mailId : {
    //         handler(){
    //             this.loadMail()
    //         },
    //         immediate : true,
    //     }
    // }
};