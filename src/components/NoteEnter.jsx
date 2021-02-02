import React from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions/note';
function NoteEnter() {
    const dispatch = useDispatch();
    const [noteInput, setNoteInput] = React.useState('');
    const handleNoteInput = (e) => {
        setNoteInput(e.target.value);
    }
    const handleButtonClick = (e) => {
        e.preventDefault();
        setNoteInput(e.target.value);
        if (noteInput.trim() != '') {
            dispatch(addNote(noteInput));
        }
        setNoteInput('');
    }
    return (
        <header className="header">
            <form className="todo-control">
            <label>
                <input 
                    className="header-input" 
                    type="text" 
                    placeholder="Какие планы?" 
                    value={noteInput}
                    onChange={handleNoteInput}>
                </input>
            </label>
            <button onClick={handleButtonClick} className="header-button" id="add"></button>
            </form>
        </header>
    )
}

export default NoteEnter;
