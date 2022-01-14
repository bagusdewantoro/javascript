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
  })

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
  return (
    <>
      <Form
        postData={postData}
        newPostData={newPostData}
        setNewPostData={setNewPostData}
        currentId={currentId}
        setCurrentId={setCurrentId}
        handleSubmit={handleSubmit}
      />
      <Posts postData={postData} setCurrentId={setCurrentId} />
    </>
  )
}

export default App;
