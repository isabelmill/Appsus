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
            url: note.input
        }
    else if (note.type === 'note-todos') {
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
                {
                    txt: note.inputs[1].name,
                    isDone: false,
                    isEdit: false
                },
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
                title: "Fullstack Me Baby!",
                type: "note-txt",
                style: 'white',
                isPinned: false,
                info: {
                    txt: ""
                },
            },
            {
                id: "n102",
                title: "Doggi",
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
                            isDone: false,
                        },
                        {
                            txt: "Coding power",
                            isDone: false,
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
                            isDone: false,
                        },
                        {
                            txt: "Add note",
                            isDone: false,
                        },
                        {
                            txt: "Delete note",
                            isDone: true,
                        },
                        {
                            txt: "Update note",
                            isDone: false,
                        },
                    ]
                },
            },
            {
                id: "n105",
                title: "Random Pic",
                type: "note-img",
                style: 'white',
                isPinned: true,
                info: {
                    url: "https://picsum.photos/200",
                },
            },
            {
                id: "n106",
                title: "I love JS",
                type: "note-txt",
                style: 'white',
                isPinned: true,
                info: {
                    txt: ""
                },
            },
        ];
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}