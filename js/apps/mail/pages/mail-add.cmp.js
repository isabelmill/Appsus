import {
    mailService
} from '../services/mail-service.js'
import {
    utilService
} from '../services/util-service.js'
import {
    eventBus
} from '../../../services/eventBus-service.js';

export default {
    template: `
    <section class="mail-add">
        <div class="header">
            <h1>New Message</h1>
            <div @click="closeModal"><img src="img/mail-img/icons/close.svg"></div>
        </div>
       <form class="mail-txt" @submit.prevent>
            <input @focus="isFocus = !isFocus" v-model="newMail.user" type="text" :placeholder="onFocus" required>
            <input v-model="newMail.subject" type="text" placeholder="Subject" required>
            <textarea  v-model="newMail.body" cols="30" rows="10"></textarea>
            <button @click="add">send</button>
        </form>
    </section>
    `,
    data() {
        return {
            newMail: {
                id: '',
                from: 'Appsus Mabsus', ///My name
                user: '', ///To
                subject: '',
                body: '',
                isRead: true,
                isStarred: false,
                isImportant: false,
                status: 'sent',
                sentAt: {
                    time: '9:00 AM',
                    date: '06-02-2022',
                },
            },
            isFocus: false,
        };
    },
    methods: {
        closeModal() {
            eventBus.emit('closeMailAddModal', 'close')
        },
        add() {
            if (!this.newMail.subject ||
                !this.newMail.user) return
            this.$emit('add', { ...this.newMail })
        },
    },
    computed: {
        onFocus() {
            if (!this.isFocus) return 'Recipients'
            else return 'To'
        },
    }
}