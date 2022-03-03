import noteTodoPreview from "./note-todo-preview.cmp.js"
import notePreviewToolbar from "./note-preview-toolbar.cmp.js";

export default {
    props: ["note"],
    template: `
    <section class="note-preview" :style="{backgroundColor:note.style.backgroundColor}" @mouseover="isHovered = true" @mouseleave="isHovered = false" >

     <div class="note-details" >
         <div class="note-text" v-if="note.type ===  'note-txt'" >
             <h1>{{note.info.title}}</h1>
             <h1>{{note.info.txt}}</h1>
             <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @remove="removeNote"></note-preview-toolbar>
         </div>

         <div class="note-img" v-if="note.type ===  'note-img'">
             <h1>{{note.info.title}}</h1>
             <h1>{{note.info.txt}}</h1>
             <img :src="note.info.url">
             <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @remove="removeNote"></note-preview-toolbar>
         </div>

         <div class="note-img" v-if="note.type ===  'note-todos'">
             <h1>{{note.info.title}}</h1>
             <h1>{{note.info.label}}</h1>
             <ul class="todos-container" v-for="todo in note.info.todos"> 
                 <note-todo-preview :todo="todo"></note-todo-preview>
                </ul>
                <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @remove="removeNote" ></note-preview-toolbar>
         </div>


            <!-- <p>{{book.listPrice.amount}} {{renderCurrency}}</p> -->
     </div>

    </section>
    `,
    components: {
        'note-todo-preview': noteTodoPreview,
        'note-preview-toolbar': notePreviewToolbar,
    },
    created() {},
    data() {
        return {
            isHovered: false,
        }
    },
    methods: {
        removeNote(id) {
            console.log('noteId:', id);
            this.$emit('removeNote', id);
        },
        changeOnMe() {
            this.isHovered = !this.isHovered
        }
    },
    computed: {
        hoverToolBar() {
            return {
                onme: this.isHovered
            };
        },
    },
    unmounted() {},
}