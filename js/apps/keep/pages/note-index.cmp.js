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
            <div class="keep-footer-layout">
            <note-filter @filtered="setFilter"></note-filter>
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
            <note-add @addNote="addNote"></note-add>
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
        addNote(note) {
            noteService.createNote(note)
            // .then(() => this.loadNotes())
        },
        loadNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes
                });
        },
    },
    computed: {
        notesForDisplay() {
            if (!this.filterBy) return this.notes;

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