import {
    noteService
} from "../services/note.service.js";

export default {
    props: ["note"],
    template: `
        <section class="note-edit-container">
        <div class="edit-container">

        <label for="">Title</label>
        <input class="edit-input-title" placeholder="Title" @change="saveChanges" type="text" v-model="note.title" >
        
        <label for="">Info</label>
        <input class="edit-input-content" @change="saveChanges" v-if="note.info.txt" type="text" v-model="note.info.txt">

        <input class="edit-input-content" @change="saveChanges" v-if="note.info.url" type="text" v-model="note.info.url">

        <div v-if="note.type === 'note-todos'" v-for="todo in note.info.todos" class="note-todos-edit">     
        <input   @change="saveChanges" type="checkbox" v-model="todo.checked">
        <input class="edit-input-title"  @change="saveChanges" type="text" v-model="todo.txt">

        </div>  

        </div>

        <button class="edit-close-btn" @click="closeModal">Close</button>
        </section>
    `,
    components: {},
    created() {
        // this.$emit("modalOpen", true);
    },
    data() {
        return {}
    },
    methods: {
        saveChanges() {
            noteService.updateNote(this.note);
        },
        closeModal() {
            this.$emit("close");
        },
    },
    computed: {},
    unmounted() {},
}