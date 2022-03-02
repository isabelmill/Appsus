export default {
    template: `
    <section class="mails-filter">
        <input @input="setFilter" type="text" v-model="filterBy.user" class="mail-filter" placeholder="Search mail">
    </section>
    `,
    data() {
        return {
            filterBy: {
                user: '',
            }
        };
    },
    methods: {
        setFilter() {
            console.log('filter!')
            this.$emit('filtered', { ...this.filterBy })
        }
    },
}

