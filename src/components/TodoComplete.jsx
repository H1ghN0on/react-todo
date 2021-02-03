import React from 'react'

function TodoComplete({ value, id, onClickDeleteCompleteButton, onClickNotCompleteButton }) {

    const handleClickDeleteButton = () => {
        if (window.confirm("Вы действительно хотите удалить запись?")) {
            onClickDeleteCompleteButton(id);
        }
    } 
    const handleClickCompleteButton = () => {
       onClickNotCompleteButton(value, id);
    }
    
    return (
        <li className="todo-item">
            <span className="text-todo">{value}</span>
            <div className="todo-buttons">
                <button onClick={handleClickDeleteButton} className="todo-remove"></button>
                <button onClick={handleClickCompleteButton} className="todo-complete"></button>
            </div>
         </li>
    )
}

export default TodoComplete
