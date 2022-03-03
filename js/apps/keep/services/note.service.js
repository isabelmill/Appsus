import {
    utilService
} from "../../../services/util.service.js";
import {
    storageService
} from '../../../services/async-storage-service.js';

export const noteService = {
    query,
    createNote,
    remove,
    updateNote,
    duplicate,
};

const NOTES_KEY = "notes";
_createNotes()

function query() {
    return storageService.query(NOTES_KEY);
}

function duplicate(note) {
    console.log('note:', note);
    return storageService.post(NOTES_KEY, note)
}

function updateNote(note) {
    return storageService.put(NOTES_KEY, note)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function createNote(note) {
    let info = {
        txt: '',
        url: '',
        lable: '',
    };

    if (note.type === 'note-txt') info = {
        txt: note.input
    }
    else if (note.type === 'note-img')
        info = {
            // title: 
            url: note.input
        }
    else if (note.type === 'note-todos') {
        info = {
            label: note.input,
            todos: [{
                    txt: 'Do this 1',
                    isDone: false,
                    isEdit: false
                },
                {
                    txt: 'Do this 2',
                    isDone: false,
                    isEdit: false
                },
                {
                    txt: 'Do this 3',
                    isDone: false,
                    isEdit: false
                },
            ]
        }
    }
    const newNote = {
        id: utilService.makeId,
        type: note.type,
        info: info,
        isPinned: false,
        style: 'white',
    }
    return storageService.post(NOTES_KEY, newNote)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [{
                id: "n101",
                type: "note-txt",
                style: 'white',
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
            },
            {
                id: "n102",
                type: "note-img",
                style: 'white',
                isPinned: false,
                info: {
                    url: "https://picsum.photos/id/237/200/300",
                    title: "Bobi and Me"
                },
            },
            {
                id: "n103",
                type: "note-todos",
                style: 'white',
                isPinned: false,
                info: {
                    label: "Get my stuff together",
                    todos: [{
                            txt: "Driving liscence",
                            doneAt: null
                        },
                        {
                            txt: "Coding power",
                            doneAt: 187111111
                        }
                    ]
                },
            },
            {
                id: "n104",
                type: "note-todos",
                style: 'white',
                isPinned: false,
                info: {
                    label: "what to do",
                    todos: [{
                            txt: "Filter",
                            doneAt: null
                        },
                        {
                            txt: "Add note",
                            doneAt: null
                        },
                        {
                            txt: "delete note",
                            doneAt: null
                        },
                        {
                            txt: "update note",
                            doneAt: null
                        },
                    ]
                },
            }
        ];
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}