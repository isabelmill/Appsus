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
};

const NOTES_KEY = "notes";
_createNotes()

function query() {
    return storageService.query(NOTES_KEY);
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
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "white"
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "https://picsum.photos/id/237/200/300",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "white"
                }
            },
            {
                id: "n103",
                type: "note-todos",
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
                style: {
                    backgroundColor: "white"
                }
            },
            {
                id: "n104",
                type: "note-todos",
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
                style: {
                    backgroundColor: "white"
                }
            }
        ];
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}