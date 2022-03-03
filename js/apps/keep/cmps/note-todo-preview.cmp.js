export default {
    props: ["todo"],
    template: `
        <li>
            <input class="check-box-input" type="checkbox"  v-model="todo.doneAt">
            <p>{{todo.txt}}</p>
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