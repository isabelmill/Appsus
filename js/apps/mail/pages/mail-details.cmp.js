import { mailService } from '../services/mail-service.js';
import { utilService } from "../services/util-service.js";

export default {
    props: ["mail"],
    template: `
        <section v-if="mail" class="mail-details">
            <h1>{{mail.subject}}</h1>
            <div class="bar">
                <div class="avatar-img"><img :src="updateAvatar"></div>
                <div class="second">
                    <h3>{{mail.user}} <small><{{mail.from}}></small></h3>
                    <small>to Appsus@gmail.com</small>
                </div>
                <div class="second-date">
                    <small>{{mail.sentAt.date}}, {{mail.sentAt.time}}</small>
                    <div class="star"><img @click="mailStarred" :src="updateStar"></div>
                </div>
            </div>
            <div class="body">
                <p>{{mail.body}}</p>
            </div>
            <!-- <div>
                <h3>From: <span><{{mail.from}}></span>
                    Sent: <span>{{mail.sentAt.date}} {{mail.sentAt.time}}</span>
                    Subject: <span>{{mail.subject}}</span>
                </h3>
            </div> -->
        </section>
    `,
    components: {
    },
    data() {
        return {
        };
    },
    created() {
    },
    methods: {
        mailStarred() {
            this.mail.isStarred = !this.mail.isStarred
            if (this.mail.isStarred) this.mail.status = 'starred'
            else this.mail.status = 'inbox'
            mailService.save(this.mail)
            console.log('Starred!:')
        },
    },
    computed: {
        updateStar() {
            if (this.mail.isStarred) return `img/mail-img/icons/star.svg`
            else return `img/mail-img/icons/star_border.svg`
        },
        updateAvatar() {
            let num = utilService.getRandomIntInclusive(1, 5)
            return `img/mail-img/avatars/Avatar-Maker-${num}.svg`
        },
    },
};