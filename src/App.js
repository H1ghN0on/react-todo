import React from 'react';
import { NoteEnter } from './components';
import { useSelector, useDispatch } from 'react-redux';
function App( { note }) {
  console.log(note);
  return (
    <div className="App">
      <NoteEnter />
      <div className="todo-container">
        <ul className="todo todo-list" id="todo">
          <li className="todo-item">
            <span className="text-todo">Купить МиниКупер</span>
            <div className="todo-buttons">
              <button className="todo-remove"></button>
              <button className="todo-complete"></button>
            </div>
          </li>
          <li className="todo-item">
            <span className="text-todo">Выполнить усложненное задание</span>
            <div className="todo-buttons">
              <button className="todo-edit"></button>
              <button className="todo-remove"></button>
              <button className="todo-complete"></button>
            </div>
          </li>
        </ul>
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
