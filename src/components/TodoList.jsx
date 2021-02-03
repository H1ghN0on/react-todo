import React from 'react'
import { deleteNote, completeNote, editNote } from '../redux/actions/note';
import { useDispatch } from 'react-redux';
function TodoList( { value, id }) {
    const [flag, setFlag] = React.useState(false);
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    const handleClickDeleteButton = () => {
        if (window.confirm("Вы действительно хотите удалить запись?")) {
            dispatch(deleteNote(id));
        }
    } 
    const handleChangeNote = (e) => {
        setInput(e.target.value);
    }
    const handleClickCompleteButton = () => {
        dispatch(completeNote(value, id));
    }
    const handleClickEditButton = (e) => {
        setFlag(!flag);
        setInput(e.target.value);
        if (flag == true) {
            dispatch(editNote(id, input))
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
