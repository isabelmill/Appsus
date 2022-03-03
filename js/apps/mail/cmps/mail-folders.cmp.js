export default {
    template: `
    <section class="mails-folders">
        <ul>
            <li @click="setFilter('')">Inbox</li>
            <li @click="setFilter('starred')">Starred</li>
            <li @click="setFilter('important')">Important</li>
            <li @click="setFilter('sent')">Sent</li>
            <li @click="setFilter('trash')">Trash</li>
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
        }
    },
}
