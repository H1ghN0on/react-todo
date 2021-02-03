import React from 'react';
import { NoteEnter, TodoList, TodoComplete } from './components';
import { useSelector, useDispatch} from 'react-redux';
import { deleteCompleteNote, deleteNote, toNotCompleteNote, completeNote, editNote, addNote } from './redux/actions/note';

function App() {
  const dispatch = useDispatch();
  const { notes, completeNotes } = useSelector(({ note }) => {
    return note;
  });
  const onAddButtonClick = (value) => {
    dispatch(addNote(value));
  }
  const onClickDeleteButton = (id) => {
    dispatch(deleteNote(id));
  }
  const onClickDeleteCompleteButton = (id) => {
    dispatch(deleteCompleteNote(id));
  }
  const onClickNotCompleteButton = (value, id) => {
    dispatch(toNotCompleteNote(value, id));
  }
  const onClickCompleteButton = (value, id) => {
    dispatch(completeNote(value, id));
  }
  const onClickEditButton = (id, newValue) => {
    dispatch(editNote(id, newValue));
  }

  return (
    <div className="App">
      <NoteEnter
        onAddButtonClick={onAddButtonClick} 
      />
      <div className="todo-container">
        <ul className="todo todo-list" id="todo">
        {
          (notes.length !== 0) ?
          (notes.map((value, index) => (
            <TodoList 
              id={index} 
              key={index} 
              value={value}
              onClickDeleteButton={onClickDeleteButton}
              onClickCompleteButton={onClickCompleteButton}
              onClickEditButton={onClickEditButton}
            />
          )))
          : (<div>Добавьте какое-нибудь дельце :)</div>)
        }
        </ul>
        <ul className="todo todo-completed" id="completed">
         {
          (completeNotes.length !== 0) ?
          (completeNotes.map((value, index) => (
            <TodoComplete 
              id={index} 
              key={index} 
              value={value} 
              onClickDeleteButton={onClickDeleteCompleteButton}
              onClickNotCompleteButton={onClickNotCompleteButton}
            />
          )))
          : (<div>Ни одно дело ещё не выполнено :(</div>)
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
