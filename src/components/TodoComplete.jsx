import React from 'react'
import { deleteCompleteNote, toNotCompleteNote } from '../redux/actions/note';
import { useDispatch } from 'react-redux';
function TodoComplete({ value, id }) {
    const dispatch = useDispatch();
    const handleClickDeleteButton = () => {
        if (window.confirm("Вы действительно хотите удалить запись?")) {
            dispatch(deleteCompleteNote(id));
        }
    } 
    const handleClickCompleteButton = () => {
        dispatch(toNotCompleteNote(value, id))
    }
    return (
        <li className="todo-item">
            <span className="text-todo">{value}</span>
            <div className="todo-buttons">
                <button onClick={handleClickDeleteButton} className="todo-remove"></button>
                <button onClick={handleClickCompleteButton}className="todo-complete"></button>
            </div>
         </li>
    )
}

export default TodoComplete
