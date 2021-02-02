const initialState = {
    notes: [],
}

const note = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTE" : {
            const newNotes = [];
            newNotes.push(...state.notes);
            newNotes.push(action.payload);
            return ({
                ...state,
                notes: newNotes,
            })
        }

        case "DELETE_NOTE" : {
            const newNotes = [...state.notes];
            newNotes.splice(action.payload, 1);
            return ({
                ...state,
                notes: newNotes,
            })
        }

        default: return state;
    }
};

export default note;