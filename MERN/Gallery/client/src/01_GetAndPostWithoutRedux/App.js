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


  // // CARA PERTAMA: ====================================
  // // if link exist: sukses fetch || if link not exist: page still looks ok
  // const getPosts = async () => {
  //   try {
  //     axios.get(apiUrl)
  //       .then(res => setPostData(res.data));
  //     console.log(postData)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getPosts();
  // }, []);


  // // CARA KEDUA: =====================================
  // // if link exist: sukses fetch || if link not exist: page broken
  // const fetchTasks = async () => {
  //   const res = await fetch(apiUrl);
  //   const data = await res.json();
  //   return data;
  // }
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const data = await fetchTasks()
  //     setPostData(data);
  //     console.log(postData)
  //   }
  //   getTasks()
  // }, []);


  // // CARA KETIGA: ========================================
  // // if link exist: Nothing fetch || if link not exist: page still looks ok
  // const getPosts = async () => {
  //   fetch(apiUrl)
  //     .then(function(res) {
  //       if (!res.ok) {
  //         // make the promise be rejected if we didn't get a 2xx response
  //         const err = new Error("Not 2xx response");
  //         // err.res = res;
  //         const { res } = err;
  //         throw err;
  //       } else {
  //         const data = res.json();
  //         console.log(data)
  //       }
  //     })
  //     .catch(function(err) {
  //       console.log(err.message)
  //     });
  // }
  // useEffect(() => {
  //   const get = async () => {
  //     const newData = await getPosts();
  //     console.log(newData)
  //   }
  //   get()
  // }, []);


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
