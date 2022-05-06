import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './actions';

const NotesForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmission = e => {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle('');
    setContent('');
  }

  return (
    <Fragment>
      <h3>Add a Note</h3>

      <form onSubmit={handleSubmission}>
        Title <br />
        <input
          type='text'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          name='content'
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type='submit'>Add Note</button>
      </form>
    </Fragment>
  )
}

export default NotesForm;
