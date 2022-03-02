export default {
    // props: [""],
    template: `
    <section class="note-add">
        <form class="add-form">
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
    created() {},
    data() {
        return {
            input: '',
            noteType: 'note-txt',
        }
    },
    methods: {
        add() {
            console.log(this.noteType);
            this.$emit('addNote', {
                input: this.input,
                noteType: this.noteType
            })
            this.input = ''
        },
        changeNoteType(type) {
            switch (type) {
                case 'note-txt':
                    this.noteType = 'note-txt'
                    break;
                case 'note-img':
                    this.noteType = 'note-img'
                    break;
                case 'note-todos':
                    this.noteType = 'note-todos'
                    break;
            }
        },
        close() {
            this.noteType = 'note-txt'
        }
    },
    computed: {},
    unmounted() {},
}