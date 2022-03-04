export default {
    props: ["unreadMails"],
    template: `
    <section class="mails-folders">
        <ul>
            <li @click="setFilter('')" class="inbox-folder"> 
                <div><img src="img/mail-img/icons/inbox.svg"></div>
                Inbox <span class="inbox-count">||{{unreadMails.length}}</span></li>
            <li @click="setFilter('starred')">
                <div><img src="img/mail-img/icons/star_black.svg"></div>
                Starred</li>
            <li @click="setFilter('important')">
                <div><img src="img/mail-img/icons/important_black.svg"></div>
                Important</li>
            <li @click="setFilter('sent')">
                <div><img src="img/mail-img/icons/sent.svg"></div>
                Sent</li>
            <li @click="setFilter('trash')">
                <div><img src="img/mail-img/icons/delete.svg"></div>
                Trash</li>
        </ul>
    </section>
    `,
    data() {
        return {
            filterBy: {
                status: '',
            }
        };
    },
    methods: {
        setFilter(folder) {
            console.log('folder!', folder)
            this.filterBy.status = folder
            this.$emit('filtered', { ...this.filterBy })
            this.$emit('back', 'null')
        }
    },
}
