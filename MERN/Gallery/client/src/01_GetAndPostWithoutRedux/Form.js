import { useState } from 'react';
import FileBase from 'react-file-base64';

const Form = () => {
  const [postData, setPostData] = useState({
    title: '', message: '', selectedFile: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Making POST request
    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData)
    })
      .then(console.log(`Added ${postData}`)); // This is optional

    // Refresh form
    setPostData({...postData, title: '', message: '', selectedFile: ''})
  };

  return (
    <form className='add-form' autoComplete='off' noValidate onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input
          type='text' placeholder='Input Title...' value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value})}
        />
        <label>Message</label>
        <input
          type='text' placeholder='Input Message...' value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value})}
        />
        <div>
          <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
          />
        </div>
        <input type='submit' />
      </div>
    </form>
  )
};

export default Form;
