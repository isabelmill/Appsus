import noteTodoPreview from "./note-todo-preview.cmp.js"

export default {
    props: ["note"],
    template: `
    <section class="note-preview" :style="{backgroundColor:note.style.backgroundColor}" >

     <div class="note-details" >
         <div class="note-text" v-if="note.type ===  'note-txt'" >
             <h1>{{note.info.title}}</h1>
             <h1>{{note.info.txt}}</h1>
         </div>

         <div class="note-img" v-if="note.type ===  'note-img'">
             <h1>{{note.info.title}}</h1>
             <h1>{{note.info.txt}}</h1>
             <img src="note.info.url">
         </div>

         <div class="note-img" v-if="note.type ===  'note-todos'">
             <h1>{{note.info.title}}</h1>
             <h1>{{note.info.label}}</h1>
             <ul class="todos-container" v-for="todo in note.info.todos"> 
             <note-todo-preview :todo="todo"></note-todo-preview>
              </ul>
         </div>


            <!-- <p>{{book.listPrice.amount}} {{renderCurrency}}</p> -->
     </div>

    </section>
    `,
    components: {
        'note-todo-preview': noteTodoPreview,
    },
    created() {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    unmounted() {},
}