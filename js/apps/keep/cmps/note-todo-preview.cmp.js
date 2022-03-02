export default {
    props: ["todo"],
    template: `
        <li>
            <input type="checkbox" :id="todo.txt" v-model="todo.doneAt">
            <p>{{todo.txt}}</p></label>
        </li>
    `,
    components: {},
    created() {},
    data() {
        return {}
    },
    methods: {
        // isTodo() {
        //     this.todo.doneAt = !this.todo.doneAt;
        // },
    },
    computed: {},
    unmounted() {},
}