import React from 'react';
import { NoteEnter, TodoList, TodoComplete } from './components';
import { deleteNote, completeNote } from './redux/actions/note';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const { notes, completeNotes } = useSelector(({ note }) => {
    return note;
  });

  return (
    <div className="App">
      <NoteEnter />
      <div className="todo-container">
        <ul className="todo todo-list" id="todo">
        {
          (notes.length !== 0) ?
          (notes.map((value, index) => (
            <TodoList 
            id={index} 
            key={index} 
            value={value} />
          )))
          : (<div>Добавьте какое-нибудь дельце :)</div>)
        }
        </ul>
        <ul className="todo todo-completed" id="completed">
         {
          (completeNotes.length !== 0) ?
          (completeNotes.map((value, index) => (
            <TodoComplete id={index} key={index} value={value} />
          )))
          : (<div>Ни одно дело ещё не выполнено :(</div>)
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
