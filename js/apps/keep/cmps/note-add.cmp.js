import {
    noteService
} from '../services/note.service.js';

export default {
    template: `
    <section class="note-add">
        <form  class="add-form">
            <div  :style="show ? { 'height': '80px' } : null" class="input-container" >
               <input  @click="show = !show" type="text" class="note-add-input" :placeholder="placeHolder" v-model="input" @blur="add(),show = !show ">

            <div class="all-add-btns">
               <div class="edit-input-btns">
                    <!-- <div class="color-palette">
                        <img src="./img/keep-img/icons/palette.svg" alt="">
                    </div> -->
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
                <!-- <button @click="add()">Add</button> -->
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
            input: '',
            type: 'note-txt',
            style: 'white',
            placeHolder: 'Take a note'
        }
    },
    methods: {
        add() {
            const note = {
                id: this.id,
                input: this.input,
                type: this.type,
                style: this.style
            }
            if (!this.input) return
            noteService.createNote(note)
                .then(() => {
                    this.$emit("added")
                });
            this.input = ''
        },
        changeNoteType(type) {
            switch (type) {
                case 'note-txt':
                    this.type = 'note-txt'
                    this.placeHolder = 'Take a note'
                    break;
                case 'note-img':
                    this.type = 'note-img'
                    this.placeHolder = 'URL address'
                    break;
                case 'note-todos':
                    this.type = 'note-todos'
                    this.placeHolder = 'List title'
                    break;
            }
        },
        close() {
            this.show = false
            this.type = 'note-txt'
        }
    },
    computed: {},
    unmounted() {},
}