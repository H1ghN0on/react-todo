import React from 'react'
import { deleteNote } from '../redux/actions/note';
import { useDispatch } from 'react-redux';
function TodoList( { value, id }) {
    const dispatch = useDispatch();
    const handleClickButton = () => {
        if (window.confirm("Вы действительно хотите удалить запись?")) {
            dispatch(deleteNote(id));
        }
    }
    return (
        <ul className="todo todo-list" id="todo">
          <li className="todo-item">
            <span className="text-todo">{value}</span>
            <div className="todo-buttons">
              <button className="todo-edit"></button>
              <button onClick={handleClickButton} className="todo-remove"></button>
              <button className="todo-complete"></button>
            </div>
          </li>
        </ul>
    )
}

export default TodoList
