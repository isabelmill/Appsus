import {
    noteService
} from "../services/note.service.js";

export default {
    props: ["todo", "note"],
    template: `
        <section>
               <li class="todos-container">
                <input class="check-box-input" type="checkbox"  v-model="todo.isDone"  @click="toggleTodo">
                <h2 :style="todo.isDone ? { 'text-decoration': 'line-through' } : null">{{todo.txt}}</h2>
                </li>
        </section>
    `,
    components: {},
    created() {},
    data() {
        return {}
    },
    methods: {
        toggleTodo() {
            this.todo.isDone = !this.todo.isDone;
            noteService.updateNote(this.note);
        },
    },
    computed: {},
    unmounted() {},
}