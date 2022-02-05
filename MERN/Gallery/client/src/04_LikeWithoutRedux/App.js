import { useEffect, useState } from 'react';
import Form from './Form';
import Posts from './Posts';

const App = () => {
  const [postData, setPostData] = useState([]);
  const [newPostData, setNewPostData] = useState({
    title: '', message: '', selectedFile: '', like: 0
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
      .then(console.log(`Edited ${newPostData}`)); // This is optional
    setPostData(postData.map(post => post._id === currentId ? data : post))
    setNewPostData({...newPostData, title: '', message: '', selectedFile: ''})
    setCurrentId(null);
  };

  // DELETE DATA
  const deletePost = async(currentId) => {
    await fetch(`${apiUrl}/${currentId}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
    setPostData(postData.filter(post => post._id !== currentId))
  }

  // LIKE POST
  const likePost = async(currentId) => {
    await fetch(`${apiUrl}/${currentId}/likePost`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
    setNewPostData({...newPostData, like: postData.find(post => post._id === currentId).like += 1})
    console.log(`${postData.find(post => post._id === currentId).like} likes`)
  }

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
      <Posts
        postData={postData}
        setCurrentId={setCurrentId}
        deletePost={deletePost}
        likePost={likePost}
      />
    </>
  )
}

export default App;
