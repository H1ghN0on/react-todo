export const addNote = (text) => ({
    type: "ADD_NOTE",
    payload: text,
})

export const deleteNote = (id) => ({
    type: "DELETE_NOTE",
    payload: id,
})