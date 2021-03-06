import { mailService } from "../services/mail-service.js"
import { eventBus } from "../../../services/eventBus-service.js"

export default {
    props: ["mail"],
    template: `
        <section class="mail-preview">
            <div class="mail-preview-btns">
                <div class="icon-btn"><img @click="mailMarked" :src="updateCheckBox"></div>
                <div class="icon-btn"><img @click="mailStarred" :src="updateStar"></div>
                <div class="icon-btn"><img @click="mailImportant" :src="updateImportance"></div>
                <div>
                    <p class="nam" @click="mailRead" :class="updateBold">{{mail.user}}</p>
                </div>
            </div>
            <div>
                <p class="sub" @click="mailRead" :class="updateBold">{{mail.subject}}</p>
            </div>
            <div>
                <p class="dat" @click="mailRead" :class="updateBold">{{mail.sentAt.date}}</p>
            </div>
        </section>
    `,
    methods: {
        mailRead() {
            this.mail.isRead = true
            mailService.save(this.mail)
            eventBus.emit('readMail', this.mail)
        },
        mailMarked() {
            this.mail.isSelected = !this.mail.isSelected
            mailService.save(this.mail)
            eventBus.emit('markedMail', 'marked')
        },
        mailStarred() {
            this.mail.isStarred = !this.mail.isStarred
            mailService.save(this.mail)
        },
        mailImportant() {
            this.mail.isImportant = !this.mail.isImportant
            mailService.save(this.mail)
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
        updateBold() {
            return { bold: !this.mail.isRead }
        }
    },
}