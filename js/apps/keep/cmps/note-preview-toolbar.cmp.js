import {
    eventBus
} from '../../../services/eventBus-service.js';
import {
    router
} from "../../../router.js";

export default {
    props: ["note"],
    template: `
        <section class="notes-toolbar">
            <div class="tool-bar-btns">
                <div @click="remove(note)" class="remove-note">
                    <img title="remove note" src="./img/keep-img/icons/delete.svg" alt="">
                </div>

                <div class="change-color-note">
                    <img title="color note" @blur="!colorPalette" @click="colorPaletteOpen"   src="./img/keep-img/icons/palette.svg" alt="">
                </div>
                
                <div class="duplicate-note">
                    <img title="duplicate note" @click="duplicate" src="./img/keep-img/icons/duplicate.svg" alt="">
                </div>
                <div class="mail-note">
                    <img title="send email" @click="composeMail" src="./img/keep-img/icons/mail.svg" alt="">
                </div>
                <div class="pin-note">
                    <img title="pin note" src="./img/keep-img/icons/pin.svg" alt="">
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
            alert('not working yet');
        },
    },
    computed: {},
    unmounted() {},
}