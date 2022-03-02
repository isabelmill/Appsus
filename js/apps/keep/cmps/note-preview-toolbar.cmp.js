export default {
    props: ["note"],
    template: `
        <section class="notes-toolbar">
            <div class="tool-bar-btns">
                <div @click="remove(note)" class="remove-note">
                    <img src="./img/keep-img/icons/delete.svg" alt="">
                </div>
                <div class="change-color-note">
                    <img src="./img/keep-img/icons/palette.svg" alt="">
                </div>
                <div class="duplicate-note">
                    <img src="./img/keep-img/icons/duplicate.svg" alt="">
                </div>
                <div class="mail-note">
                    <img src="./img/keep-img/icons/mail.svg" alt="">
                </div>
                <div class="pin-note">
                    <img src="./img/keep-img/icons/pin.svg" alt="">
                </div>
            </div>
        </section>
    `,
    components: {},
    created() {},
    data() {
        return {}
    },
    methods: {
        remove(note) {
            console.log('note:', note);
            this.$emit('remove', note.id)
        },
    },
    computed: {},
    unmounted() {},
}