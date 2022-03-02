import notePreview from "./note-preview.cmp.js"

export default {
    props: ["notes"],
    template: `
        <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id">
                <note-preview @removeNote="remove" :note="note" >
            </li>
        </ul>
        </section>
    `,
    components: {
        'note-preview': notePreview
    },
    created() {},
    data() {
        return {}
    },
    methods: {
        remove(id) {
            console.log('id:', id);
            this.$emit('remove', id);
        }
    },
    computed: {},
    unmounted() {},
}