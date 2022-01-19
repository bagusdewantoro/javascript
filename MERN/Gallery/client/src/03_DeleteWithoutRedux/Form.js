import FileBase from 'react-file-base64';

const Form = ({ postData, setPostData, newPostData, setNewPostData, currentId, setCurrentId, handleSubmit, editPost }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    currentId ?
      editPost(currentId) :
      handleSubmit();
  }

  return (
    <div className='add-form'>
      <form autoComplete='off' noValidate onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Title</label>
          <input
            type='text'
            placeholder={currentId ? postData.find(post => post._id === currentId).title : 'Input Title...'}
            value={newPostData.title}
            onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value })}
          />
          <label>Message</label>
          <input
            type='text'
            placeholder={currentId ? postData.find(post => post._id === currentId).message : 'Input Message...'}
            value={newPostData.message}
            onChange={(e) => setNewPostData({ ...newPostData, message: e.target.value })}
          />
          <div>
            <FileBase
              type='file'
              multiple={false}
              onDone={({base64}) => setNewPostData({ ...newPostData, selectedFile: base64 })}
            />
          </div>
          <input type='submit' />
        </div>
      </form>
      <div>
        {
          currentId ? (
            <button onClick={e => setCurrentId(null)}>
              Cancel Editing
            </button>
          ) : <p></p>
        }
      </div>
    </div>
  )
}

export default Form;
