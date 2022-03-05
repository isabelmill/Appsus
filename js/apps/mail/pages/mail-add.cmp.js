// import {
//     mailService
// } from '../services/mail-service.js'
// import {
//     utilService
// } from '../services/util-service.js'
// import {
//     eventBus
// } from '../../../services/eventBus-service.js';

export default {
    template: `
    <section class="mail-add">
       <h1>New Message</h1>
       <form class="mail-txt" @submit.prevent>
            <input v-model="newMail.user" type="text" placeholder="To" required>
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
            }
        };
    },
    methods: {
        add() {
            if(!this.newMail.subject || 
                !this.newMail.user) return
            this.$emit('add', { ...this.newMail})
        }
    },
}