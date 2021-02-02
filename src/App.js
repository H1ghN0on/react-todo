import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="header">
        <form className="todo-control">
          <label><input className="header-input" type="text" placeholder="Какие планы?"></input></label>
          <button className="header-button" id="add"></button>
        </form>
      </header>
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
