export default {
    template: `
    <section class="mails-filter">
        <input @input="setFilter" @focus="isFocus = !isFocus" type="text" v-model="txt" :class="onFocus" class="mail-filter" placeholder="Search mail">
    </section>
    `,
    data() {
        return {
            txt: '',
            isFocus: false,
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.txt)
        }
    },
    computed: {
        onFocus() {
            return this.isFocus ? 'fcus-on' : 'fucus-off'
        },
    }
}