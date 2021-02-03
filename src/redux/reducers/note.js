const initialState = {
    notes: [],
    completeNotes: [],
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

        case "COMPLETE_NOTE" : {
            const newNotes = [...state.notes];
            const newCompleteNotes = [...state.completeNotes];
            newNotes.splice(action.payload.id, 1);
            newCompleteNotes.push(action.payload.value);
            return ({
                ...state,
                notes: newNotes,
                completeNotes: newCompleteNotes,
            })
        }
        case "DELETE_COMPLETE_NOTE" : {
            const newCompleteNotes = [...state.completeNotes];
            newCompleteNotes.splice(action.payload, 1);
            return ({
                ...state,
                completeNotes: newCompleteNotes,
            })
        }
        case "TO_NOT_COMPLETE_NOTE" : {
            const newNotes = [...state.notes];
            const newCompleteNotes = [...state.completeNotes];
            newCompleteNotes.splice(action.payload.id, 1);
            newNotes.push(action.payload.value);
            return ({
                ...state,
                notes: newNotes,
                completeNotes: newCompleteNotes,
            })
        }
        case "EDIT_NOTE": {
            const newNotes = [...state.notes];
            newNotes.splice(action.payload.id, 1, action.payload.newValue);
            return ({
                ...state,
                notes: newNotes,
            })
        }
        default: return state;
    }
};

export default note;