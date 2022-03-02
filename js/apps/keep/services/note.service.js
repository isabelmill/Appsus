import {
    utilService
} from "../../../services/util.service.js";
import {
    storageService
} from '../../../services/async-storage-service.js';

export const noteService = {
    query,
    createNote,
};

const NOTES_KEY = "notes";
_createNotes()

function query() {
    return storageService.query(NOTES_KEY);
}

function createNote(note) {
    console.log('note:', note);
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
                    url: "https://www.meme-arsenal.com/memes/4dc5c2c0a73fb9ec553c3f93703a02ad.jpg",
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