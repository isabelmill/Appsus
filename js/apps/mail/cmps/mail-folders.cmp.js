export default {
    template: `
    <section class="mails-folders">
        <ul @change="setFilter">
            <li value="isStared">Inbox</li>
            <li value="isImportant">Starred</li>
            <li value="isStared">Important</li>
            <li value="sent">Sent</li>
            <li value="trash">Trash</li>
            <!-- <li @click="setFilter()" value="draft">Draft</li> -->
        </ul>
    </section>
    `,
    data() {
        return {
            filterBy: {
                isStared: '',
                isImportant: '',
                sent: '',
                // draft: '',
                trash: '',
            }
        };
    },
    methods: {
        setFilter() {
            console.log('folder!')
            console.log(this.filterBy)
            this.$emit('filtered', { ...this.filterBy })
        }
    },
}
