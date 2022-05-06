import { Fragment } from 'react';
import AllNotes from './AllNotes';
import NotesForm from './NotesForm';

const Notes = () => {
  return (
    <Fragment>
      <h1>React Redux App</h1>
      <NotesForm />
      <hr />
      <AllNotes />
    </Fragment>
  )
}

export default Notes;
