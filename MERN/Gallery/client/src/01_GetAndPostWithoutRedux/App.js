import { useEffect, useState } from 'react';
import Posts from './Posts';
import Form from './Form';
import axios from 'axios';


const App = () => {
  const [postData, setPostData] = useState({
    title: '', message: '', selectedFile: ''
  });
  const [newPostData, setNewPostData] = useState({
    title: '', message: '', selectedFile: ''
  });
  const apiUrl = 'http://localhost:5000/posts';

  // // CARA PERTAMA: =====================================
  // const fetchTasks = async () => {
  //   const res = await fetch(apiUrl);
  //   const data = await res.json();
  //   return data;
  // }
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const data = await fetchTasks()
  //     // setCollection(data);
  //     console.log(postData)
  //   }
  //   getTasks();
  // }, []);

  // // CARA KEDUA: =====================================
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(postData);
  //       setPostData(postData);
  //     });
  // }, []);

  // // CARA KETIGA: ====================================
  const getPosts = async () => {
    try {
      const { data } = axios.get(apiUrl)
        .then(res => setPostData(res.data));
      console.log(postData)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = (newTask) => {
    // Making POST request
    fetch(apiUrl, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTask.title
      })
    })
      .then(console.log(`Added ${newPostData}`)); // This is optional
    // Refresh form
    setNewPostData({...newPostData, title: '', message: '', selectedFile: ''})
  };


  return (
    <>
      <Form postData={newPostData} setPostData={setNewPostData} handleSubmit={handleSubmit} />
      <Posts postData={postData} />
    </>
  )
};

export default App;
