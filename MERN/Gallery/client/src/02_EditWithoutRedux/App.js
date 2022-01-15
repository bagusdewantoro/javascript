import { useEffect, useState } from 'react';
import Form from './Form';
import Posts from './Posts';

const App = () => {
  const [postData, setPostData] = useState([]);
  const [newPostData, setNewPostData] = useState({
    title: '', message: '', selectedFile: ''
  });
  const [currentId, setCurrentId] = useState(null);
  const apiUrl = 'http://localhost:5000/posts';

  // GET DATA
  const getPosts = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setPostData(data))
      .catch(err => console.error('The error is', err));
  }
  useEffect(() => {
    getPosts()
  }, [])

  // CREATE DATA
  const handleSubmit = async () => {
    const data = await fetch(apiUrl, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newPostData.title,
        message: newPostData.message,
        selectedFile: newPostData.selectedFile
      })
    })
      .then(res => res.json())
      .then(console.log(`Added ${newPostData}`)); // This is optional
    // Refresh form
    setPostData([...postData, data])
    setNewPostData({...newPostData, title: '', message: '', selectedFile: ''})
  };

  // EDIT DATA
  const editPost = async (currentId) => {
    const data = await fetch(`${apiUrl}/${currentId}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newPostData.title ? newPostData.title : postData.find(post => post._id === currentId).title,
        message: newPostData.message ? newPostData.message : postData.find(post => post._id === currentId).message,
        selectedFile: newPostData.selectedFile ? newPostData.selectedFile : postData.find(post => post._id === currentId).selectedFile
      })
    })
      .then(res => res.json())
      .then(console.log(`Added ${newPostData}`)); // This is optional
    // Refresh form
    // setPostData([...postData, data])
    setPostData(postData.map(post => post._id === currentId ? data : post))
    setNewPostData({...newPostData, title: '', message: '', selectedFile: ''})
    setCurrentId(null);
  };

  return (
    <>
      <Form
        postData={postData}
        setPostData={setPostData}
        newPostData={newPostData}
        setNewPostData={setNewPostData}
        currentId={currentId}
        setCurrentId={setCurrentId}
        handleSubmit={handleSubmit}
        editPost={editPost}
      />
      <Posts postData={postData} setCurrentId={setCurrentId} />
    </>
  )
}

export default App;
