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
    console.log('note:', note);
    console.log('input.name:', note.inputs[0].name);
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
            url: note.input
        }
    else if (note.type === 'note-todos') {
        // if (!note.inputs[1].name) note.inputs[1].name === 'todo'
        info = {
            todos: [{
                    txt: note.input,
                    isDone: false,
                    isEdit: false
                },
                {
                    txt: note.inputs[0].name,
                    isDone: false,
                    isEdit: false
                },
                // {
                //     txt: note.inputs[1].name,
                //     isDone: false,
                //     isEdit: false
                // },
                // {
                //     txt: note.inputs[2].name,
                //     isDone: false,
                //     isEdit: false
                // },
            ]
        }
    }
    const newNote = {
        id: utilService.makeId,
        title: note.title,
        type: note.type,
        isPinned: false,
        style: 'white',
        info: info,
    }
    return storageService.post(NOTES_KEY, newNote)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [{
                id: "n101",
                title: "",
                type: "note-txt",
                style: 'white',
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
            },
            {
                id: "n102",
                title: "Bobi and Me",
                type: "note-img",
                style: 'white',
                isPinned: false,
                info: {
                    url: "https://picsum.photos/id/237/200/300",
                },
            },
            {
                id: "n103",
                title: "Get my stuff together",
                type: "note-todos",
                style: 'white',
                isPinned: false,
                info: {
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
                title: "what to do",
                type: "note-todos",
                style: 'white',
                isPinned: false,
                info: {
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