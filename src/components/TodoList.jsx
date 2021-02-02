import React from 'react'

function TodoList( {value }) {
    return (
        <ul className="todo todo-list" id="todo">
          <li className="todo-item">
            <span className="text-todo">{value}</span>
            <div className="todo-buttons">
              <button className="todo-remove"></button>
              <button className="todo-complete"></button>
            </div>
          </li>
        </ul>
    )
}

export default TodoList
