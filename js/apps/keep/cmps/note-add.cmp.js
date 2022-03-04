import {
    noteService
} from '../services/note.service.js';

export default {
    template: `
    <section class="note-add"  >
        <form  class="add-form" >
            <div  :style="show ? { 'height': '100px' } : null" :style="type === 'note-todos' && show ? { 'min-height': '140px', 'max-height': '600px', 'overflow-y': 'auto' } : null" class="input-container"  >
                
            <div class="user-note-inputs">
               <input  placeholder="Title" v-if="show" type="text"  v-model="title">

               <!--tabindex="0" @blur="add(),show = !show" -->

               <input @click="show = true" type="text" class="note-add-input" :placeholder="placeHolder" v-model="input" >

               <div   class="form-group" v-for="(input,k) in inputs" :key="k"  v-if="type === 'note-todos' && show">
                   <span>
                   <i @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">➖</i>
                   <i  @click="addInput(k)" v-show="k == inputs.length-1">➕</i>
                  </span>
               <input type="text" class="form-control" v-model="input.name" :placeholder="placeHolder">
              </div>

               </div>

            <div class="all-add-btns">
               <div class="edit-input-btns">
                    <div @click="changeNoteType('note-txt')" class="text-note">
                        <img src="./img/keep-img/icons/black-pencil.svg" alt="">
                    </div>
                    <div @click="changeNoteType('note-img')" class="insert-img">
                        <img src="./img/keep-img/icons/insert-img.svg" alt="">
                    </div>
                    <div  @click="changeNoteType('note-todos')" class="insert-todos">
                        <img src="./img/keep-img/icons/list.svg" alt="">
                    </div>
                </div>

                <div v-if="show" class="note-add-delete-btns">
                <button @click="add()">Add</button>
                <button @click="close()">Close</button>
                </div>

                </div>
            </div>
        </form>
    </section>
    `,
    components: {},
    created() {

    },
    data() {
        return {
            show: false,
            id: '',
            title: '',
            input: '',
            type: 'note-txt',
            style: 'white',
            placeHolder: 'Take a note...',
            inputs: [{
                name: ''
            }],

        }
    },
    methods: {
        add() {
            const note = {
                id: this.id,
                title: this.title,
                input: this.input,
                type: this.type,
                style: this.style,
                inputs: this.inputs
            }
            if (!this.input && !this.title) return
            noteService.createNote(note)
                .then(() => {
                    this.$emit("added")
                });
            this.input = ''
            this.title = ''
            if (this.inputs[0].name) this.inputs[0].name = ''
            if (this.inputs[0].name) this.inputs[1].name = ''
        },
        changeNoteType(type) {
            switch (type) {
                case 'note-txt':
                    this.type = 'note-txt'
                    this.placeHolder = 'Take a note...'
                    break;
                case 'note-img':
                    this.type = 'note-img'
                    this.placeHolder = 'URL address'
                    break;
                case 'note-todos':
                    this.type = 'note-todos'
                    this.placeHolder = 'List item'
                    break;
            }
        },
        close() {
            this.show = false
            this.type = 'note-txt'
        },
        addInput(index) {
            this.inputs.push({
                name: ''
            });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }
    },
    computed: {},
    unmounted() {},
}