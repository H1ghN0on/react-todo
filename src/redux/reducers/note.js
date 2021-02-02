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

        default: return state;
    }
};

export default note;