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
        </section>
    `,
    methods: {
        mailStarred() {
            this.mail.isStarred = !this.mail.isStarred
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
            if (this.mail.status === 'sent') return `img/mail-img/icons/Avatar_Anna.svg`
            let num = utilService.getRandomIntInclusive(1, 10)
            return `img/mail-img/avatars/Avatar-Maker-${num}.svg`
        },
    },
};