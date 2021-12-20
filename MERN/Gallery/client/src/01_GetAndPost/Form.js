import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from './myAction';


const Form = () => {
  const [postData, setPostData] = useState({
    title: '', message: '', selectedFile: '', postNumber: 1
  })
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setPostData({...postData, postNumber: postData.postNumber + 1})
    dispatch(createPost(postData));
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
        {/* <label>Post Number</label>
          <input
          type='number' placeholder='Input Number...'
          onChange={(e) => setPostData({ ...postData, postNumber: postData.postNumber + 1})}
        /> */}
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
