export default {
    props: ["unreadMails"],
    template: `
    <section class="mails-folders">
        <ul>
            <li @click="setFilter('inbox')" class="inbox-folder" :class="changeColor('inbox')"> 
                <div><img :src="inboxRed"></div>
                Inbox <small>{{unreadMails.length}}</small></li>
            <li @click="setFilter('starred')" :class="changeColor('starred')">
                <div><img :src="starredRed"></div>
                Starred</li>
            <li @click="setFilter('important')" :class="changeColor('important')">
                <div><img :src="importantRed"></div>
                Important</li>
            <li @click="setFilter('sent')" :class="changeColor('sent')">
                <div><img :src="sentRed"></div>
                Sent</li>
            <li @click="setFilter('trash')" :class="changeColor('trash')">
                <div><img :src="trashRed"></div>
                Trash</li>
        </ul>
    </section>
    `,
    data() {
        return {
            folder: '',
            isFolder: {
                inbox: false,
                starred: false,
                important: false,
                sent: false,
                trash: false,
            },
            preFolder: ''
        };
    },
    created() {
        this.setFilter('inbox')
    },
    methods: {
        setFilter(val) {
            this.folder = val
            this.$emit('filtered', this.folder)
            this.$emit('back', 'null')

            this.isFolder[this.preFolder] = !this.isFolder[this.preFolder]
            this.preFolder = val
            this.isFolder[val] = !this.isFolder[val]
        },
        changeColor(val) {
            return this.isFolder[val] === true ? 'selected-folder' : ''
        },
    },
    computed: {
        inboxRed() {
            if (this.isFolder.inbox) return "img/mail-img/icons/inbox_red.svg"
            else return "img/mail-img/icons/inbox.svg"
        },
        starredRed() {
            if (this.isFolder.starred) return "img/mail-img/icons/star_red.svg"
            else return "img/mail-img/icons/star_black.svg"
        },
        importantRed() {
            if (this.isFolder.important) return "img/mail-img/icons/important_full_red.svg"
            else return "img/mail-img/icons/important_black.svg"
        },
        sentRed() {
            if (this.isFolder.sent) return "img/mail-img/icons/sent_red.svg"
            else return "img/mail-img/icons/sent.svg"
        },
        trashRed() {
            if (this.isFolder.trash) return "img/mail-img/icons/delete_red.svg"
            else return "img/mail-img/icons/delete.svg"
        }
    }
}
