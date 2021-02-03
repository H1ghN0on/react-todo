import React from 'react'

function TodoList( { value, id, onClickDeleteButton, onClickCompleteButton, onClickEditButton }) {

    const [flag, setFlag] = React.useState(false);
    const [input, setInput] = React.useState('');

    const handleClickDeleteButton = () => {
        if (window.confirm("Вы действительно хотите удалить запись?")) {
            onClickDeleteButton(id);
        }
    } 
    const handleChangeNote = (e) => {
        setInput(e.target.value);
    }
    const handleClickCompleteButton = () => {
        onClickCompleteButton(value, id);
    }
    const handleClickEditButton = (e) => {
        setFlag(!flag);
        setInput(e.target.value);
        if (flag == true && input != '') {
            onClickEditButton(id, input);
        }
    }
    
    return (
          <li className="todo-item">
            {
            (flag==false) ?
            (<span className="text-todo">{value}</span>)
            : (<input onChange={handleChangeNote} type="text" value={input}></input>)
            }
            <div className="todo-buttons">
              <button onClick={handleClickEditButton} className="todo-edit"></button>
              <button onClick={handleClickDeleteButton} className="todo-remove"></button>
              <button onClick={handleClickCompleteButton} className="todo-complete"></button>
            </div>
          </li>
    )
}

export default TodoList
