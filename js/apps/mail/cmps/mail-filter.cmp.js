export default {
    template: `
    <section class="mails-filter">
        <input @input="setFilter" type="text" v-model="txt" class="mail-filter" placeholder="Search mail">
    </section>
    `,
    data() {
        return {
            txt: '',
        };
    },
    methods: {
        setFilter() {
            console.log('filter!')
            this.$emit('filtered', this.txt)
        }
    },
}

