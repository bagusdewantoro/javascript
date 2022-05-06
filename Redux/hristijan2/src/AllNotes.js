import { Fragment } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { removeNote } from './actions';

const AllNotes = () => {
  const notes = useSelector(state => state.notes, shallowEqual);
  const dispatch = useDispatch();

  const handleRemoveNoteBtnClick = (index) => {
    dispatch(removeNote(index));
  }

  const notesItems = notes.map((note, index) => (
    <li key={index}>
      <b>{note.title}</b>
      <button onClick={() => handleRemoveNoteBtnClick(index)}>x</button>
      <br />
      <span>{note.content}</span>
    </li>
  ));

  return (
    <Fragment>
      <h3>All Notes</h3>
      <ul>{ notesItems }</ul>
    </Fragment>
  )
}

export default AllNotes;
