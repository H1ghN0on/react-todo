export const addNote = (text) => ({
    type: "ADD_NOTE",
    payload: text,
})

export const deleteNote = (id) => ({
    type: "DELETE_NOTE",
    payload: id,
})

export const completeNote = (value, id) => ({
    type: "COMPLETE_NOTE",
    payload: {
        value,
        id,
    }
})

export const deleteCompleteNote = (id) => ({
    type: "DELETE_COMPLETE_NOTE",
    payload: id,
})

export const toNotCompleteNote = (value, id) => ({
    type: "TO_NOT_COMPLETE_NOTE",
    payload: {
        value, 
        id,
    }
})