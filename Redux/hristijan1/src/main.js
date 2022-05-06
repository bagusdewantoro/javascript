import store from './store/store';
import { addNote, removeNote } from './actions/actions';

// Use store.getState() to get our app state from the store

console.log('Before: ', store.getState());
store.dispatch(addNote('One', 'Content One'));
store.dispatch(addNote('Two', 'Content Two'));
store.dispatch(addNote('Three', 'Content Three'));
console.log('After: ', store.getState());

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ Redux ------
store.subscribe(() => renderNotes());

const deleteNote = index => {
  console.log(index);
  store.dispatch(removeNote(index))
}

function renderNotes() {
  let notes = store.getState().notes;
  notesUList.innerHTML = '';
  notes.map((note, index) => {
    let noteItem = `
      <li>
        <b>${note.title}</b>
        <button data-id='${index}'>x</button>
        <br />
        <span>${note.content}</span>
      </li>
    `;
    notesUList.innerHTML += noteItem
  })
  addNoteTitle.value = '';
  addNoteContent.value = '';
  setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
  store.dispatch(addNote(title, content));
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');
  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

// ------ Render the initial Notes ------
renderNotes();
