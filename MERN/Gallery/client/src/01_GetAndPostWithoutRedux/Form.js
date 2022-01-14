import FileBase from 'react-file-base64';

const Form = ({ handleSubmit, newPostData, setNewPostData }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Making POST request
  //   fetch('http://localhost:5000/posts', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(postData)
  //   })
  //     .then(console.log(`Added ${postData}`)); // This is optional
  //   // Refresh form
  //   setPostData({...postData, title: '', message: '', selectedFile: ''})
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <form className='add-form' autoComplete='off' noValidate onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input
          type='text' placeholder='Input Title...' value={newPostData.title}
          onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value})}
        />
        <label>Message</label>
        <input
          type='text' placeholder='Input Message...' value={newPostData.message}
          onChange={(e) => setNewPostData({ ...newPostData, message: e.target.value})}
        />
        <div>
          <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) => setNewPostData({ ...newPostData, selectedFile: base64})}
          />
        </div>
        <input type='submit' />
      </div>
    </form>
  )
};

export default Form;
