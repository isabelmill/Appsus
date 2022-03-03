import {
    eventBus
} from '../../../services/eventBus-service.js';
import {
    noteService
} from '../services/note.service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteAdd from "../cmps/note-add.cmp.js";

export default {
    template: `
        <section>
            <header>

            <div class="keep-header-layout">
            <div class="notes-nav">
            <div class="keep-img-nav-div">
            <img class="keep-img-nav" src="./img/keep-img/icons/nav.PNG" alt="">
            </div>
            <img class="keep-img-header" src="./img/keep.png" alt="">
            
            <div class="keep-logo">Keep</div>
            </div>
            <note-filter @filtered="setFilter"></note-filter>

            <div class="left-side-menu">
            <div class="notes-menu">
            <img class="notes-menu-icon"src="./img/mail-img/icons/apps.svg" alt="">
            </div>
            <div class="notes-avatar">
            <img class="notes-avatar-img"src="./img/keep-img/avatar/my-avatar.svg" alt="">
            </div>
            </div>

            </div>

            </header>

            <main class="keep-main-layout">
            <div class="keep-side-bar-layout">
             <ul>
              <li>puki</li>
              <li>puki</li>
              <li>puki</li>
             </ul>
            </div>
            <div class="notes-main-layout">
            <note-add @added="renderNotes"></note-add>
            <note-list :notes="notesForDisplay" ></note-list>
            </div>
            </main>

        </section>
    `,
    components: {
        'note-list': noteList,
        'note-filter': noteFilter,
        'note-add': noteAdd,
    },
    created() {
        this.renderNotes()
        eventBus.on('remove', this.removeNote)
        eventBus.on('setColor', this.changeColor)
        eventBus.on('duplicate', this.duplicateNote)
    },
    data() {
        return {
            filterBy: null,
            notes: null,
        }
    },
    methods: {
        renderNotes() {
            noteService.query().then((notes) => {
                this.notes = notes;
            });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => this.renderNotes())
        },
        changeColor(note) {
            noteService.updateNote(note)
                .then(() => this.renderNotes())
        },
        duplicateNote(note) {
            noteService.duplicate(note)
                .then(() => this.renderNotes())
        }
    },
    computed: {
        notesForDisplay() {
            if (!this.filterBy || this.filterBy.type === '') return this.notes;

            let notes
            const regex = new RegExp(this.filterBy.txt, 'i');
            const type = this.filterBy.type

            notes = this.notes.filter(note => {
                return note.type === type
            })

            //should it be by txt? why only all? return later 
            if (type === '') {
                // return this.notes
                return this.notes.filter(note =>
                    regex.test(note.info.txt));
            }
            return notes
        },
    },
    unmounted() {},
}