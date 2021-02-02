import React from 'react'
import { deleteNote, completeNote } from '../redux/actions/note';
import { useDispatch } from 'react-redux';
function TodoList( { value, id, onClickDeleteButton, onClickCompleteButton }) {
    const dispatch = useDispatch();
    const handleClickDeleteButton = () => {
        if (window.confirm("Вы действительно хотите удалить запись?")) {
            dispatch(deleteNote(id));
        }
    } 
    const handleClickCompleteButton = () => {
        dispatch(completeNote(value, id));
    }
    return (
          <li className="todo-item">
            <span className="text-todo">{value}</span>
            <div className="todo-buttons">
              <button className="todo-edit"></button>
              <button onClick={handleClickDeleteButton} className="todo-remove"></button>
              <button onClick={handleClickCompleteButton} className="todo-complete"></button>
            </div>
          </li>
    )
}

export default TodoList
