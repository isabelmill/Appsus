import notePreview from "./note-preview.cmp.js"

export default {
    props: ["notes"],
    template: `
            <div class="pinned-notes-logo">Pinned</div>
            <section class="note-list">
                <div v-for="note in notes" >
                    <note-preview v-if="note.isPinned" :note="note" >
                        </div>
                    </section>
                    <div class="pinned-notes-logo">Others</div>
        <section class="note-list">
            <div v-for="note in notes" >
                <note-preview v-if="!note.isPinned" :note="note" >
            </div>
        </section>
    `,
    components: {
        'note-preview': notePreview
    },
    created() {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    unmounted() {},
}