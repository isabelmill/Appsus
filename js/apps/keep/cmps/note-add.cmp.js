import {
    noteService
} from '../services/note.service.js';

export default {
    template: `
    <section class="note-add">
        <form  class="add-form">
            <div class="input-container">
               <input type="text" class="note-add-input" placeholder="Take a note..." v-model="input">
               <div class="edit-input-btns">

                    <div class="color-palette">
                        <img src="./img/keep-img/icons/palette.svg" alt="">
                    </div>
                    <div @click="changeNoteType('note-img')" class="insert-img">
                        <img src="./img/keep-img/icons/insert-img.svg" alt="">
                    </div>
                    <div  @click="changeNoteType('note-todos')" class="insert-img">
                        <img src="./img/keep-img/icons/list.svg" alt="">
                    </div>
                </div>

                <button @click="add()">Add</button>
                <button @click="close()">Close</button>

            </div>
        </form>
    </section>
    `,
    components: {},
    created() {

    },
    data() {
        return {
            id: '',
            input: '',
            type: 'note-txt',
            style: 'white',
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
                    break;
                case 'note-img':
                    this.type = 'note-img'
                    break;
                case 'note-todos':
                    this.type = 'note-todos'
                    break;
            }
        },
        close() {
            this.type = 'note-txt'
        }
    },
    computed: {},
    unmounted() {},
}