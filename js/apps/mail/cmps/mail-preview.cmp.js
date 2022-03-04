import { mailService } from "../services/mail-service.js"
import { eventBus } from "../../../services/eventBus-service.js"

export default {
    props: ["mail"],
    template: `
        <section class="mail-preview">
            <div class="mail-preview-btns">
                <img @click="mailMarked" :src="updateCheckBox">
                <img @click="mailStarred" :src="updateStar">
                <img @click="mailImportant" :src="updateImportance">
                <div>
                    <p @click="mailRead">{{mail.user}}</p>
                </div>
            </div>
            <div>
                <p @click="mailRead">{{mail.subject}}</p>
            </div>
            <div>
                <p>{{mail.sentAt.date}}</p>
            </div>
        </section>
    `,
    components: {
    },
    created() { 
        
    },
    data() {
        return {
        }
    },
    methods: {
        mailRead() {
            this.mail.isRead = true
            mailService.save(this.mail)
            console.log('read!:' , this.mail)
            eventBus.emit('readMail', this.mail)
        },
        mailMarked() {
            this.mail.isSelected = !this.mail.isSelected
            mailService.save(this.mail)
            console.log('isMarked!:')
            eventBus.emit('markedMail', 'marked')
        },
        mailStarred() {
            this.mail.isStarred = !this.mail.isStarred
            if(this.mail.isStarred) this.mail.status = 'starred' 
            else this.mail.status = 'inbox'
            mailService.save(this.mail)
            console.log('Starred!:')
        },
        mailImportant() {
            this.mail.isImportant = !this.mail.isImportant
            if(this.mail.isImportant) this.mail.status = 'important' 
            else this.mail.status = 'inbox'
            mailService.save(this.mail)
            console.log('important! XXX:')
        },

    },
    computed: {
        updateCheckBox() {
            if (this.mail.isSelected) return `img/mail-img/icons/check_box_v.svg`
            else return `img/mail-img/icons/check_box_line.svg`
        },
        updateStar() {
            if (this.mail.isStarred) return `img/mail-img/icons/star.svg`
            else return `img/mail-img/icons/star_border.svg`
        },
        updateImportance() {
            if (this.mail.isImportant) return `img/mail-img/icons/important_full.svg`
            else return `img/mail-img/icons/important.svg`
        },
    },
}