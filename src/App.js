import React from 'react';
import { NoteEnter, TodoList } from './components';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const { notes } = useSelector(({ note }) => {
    return note;
  });
  
  return (
    <div className="App">
      <NoteEnter />
      <div className="todo-container">
        {
          (notes.length !== 0) ?
          (notes.map((value, index) => (
            <TodoList key={index} value={value} />
          )))
          : (<div>Добавьте какое-нибудь дельце :)</div>)
        }
        <ul className="todo todo-completed" id="completed">
          <li className="todo-item">
            <span className="text-todo">Продать Мазду</span>
            <div className="todo-buttons">
              <button className="todo-remove"></button>
              <button className="todo-complete"></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
