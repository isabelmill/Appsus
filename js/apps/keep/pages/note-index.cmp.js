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
            <note-add @added="renderNotes"></note-add>
            <note-list :notes="notesForDisplay"  @remove="removeNote"></note-list>
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
        removeNote(noteId) {
            console.log('noteId:', noteId);
            noteService.remove(noteId)
                .then(() => this.renderNotes())
        },
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