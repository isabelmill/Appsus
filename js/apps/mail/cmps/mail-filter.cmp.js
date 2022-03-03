export default {
    template: `
    <section class="mails-filter">
        <input @input="setFilter" type="text" v-model="filterBy.txt" class="mail-filter" placeholder="Search mail">
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
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

