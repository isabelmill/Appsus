import {
    eventBus
} from '../../../services/eventBus-service.js';
import {
    mailService
} from '../../mail/services/mail-service.js';
import {
    router
} from "../../../router.js";

export default {
    props: ["note"],
    template: `
        <section class="notes-toolbar">
            <div class="tool-bar-btns">

                <div @click="remove(note)" class="remove-note">
                    <img title="remove" src="./img/keep-img/icons/delete.svg" alt="">
                </div>

                <div class="change-color-note">
                    <img title="color" @blur="!colorPalette" @click="colorPaletteOpen"   src="./img/keep-img/icons/palette.svg" alt="">
                </div>
                
                <div class="duplicate-note">
                    <img title="duplicate" @click="duplicate" src="./img/keep-img/icons/duplicate.svg" alt="">
                </div>
                <div class="mail-note">
                    <img title="send email" @click="composeMail" src="./img/keep-img/icons/mail.svg" alt="">
                </div>
                <div class="pin-note">
                    <img @click="togglePin" title="pin" src="./img/keep-img/icons/pin.svg" alt="">
                </div>
            </div>
        </section>

        `,
    components: {},
    created() {},
    data() {
        return {
            colorPalette: false,
        }
    },
    methods: {
        remove(note) {
            eventBus.emit('remove', note.id)
        },
        colorPaletteOpen() {
            this.colorPalette = !this.colorPalette
            this.$emit('colorPalette', this.colorPalette)
        },
        duplicate() {
            eventBus.emit('duplicate', this.note)
        },
        composeMail() {
            const type = this.note.type
            let query = `mail`
            let content = ''

            if (type === 'note-img') {
                content = this.note.info.url
            }
            if (type === 'note-txt') {
                content = this.note.info.txt
            }
            if (type === 'note-vid') {
                content = this.note.info.vidUrl
            }
            if (type === 'note-todos') {
                this.note.info.todos.forEach(todo => {
                    content += todo.txt
                })
            }

            const noteMail = {
                id: '',
                from: 'isabel@gmail.com',
                user: 'Isabel',
                subject: this.note.title,
                body: content,
                isStarred: false,
                isImportant: false,
                status: 'inbox',
                sentAt: {
                    time: '9:00 AM',
                    date: '06-02-2022',
                },
            }

            mailService.save(noteMail)
            router.push(query)
        },
        togglePin() {
            eventBus.emit('togglePin', this.note)
        },
    },
    computed: {},
    unmounted() {},
}