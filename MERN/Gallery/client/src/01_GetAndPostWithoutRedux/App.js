import { useEffect, useState } from 'react';
import Posts from './Posts';
import Form from './Form';
// import axios from 'axios';

const App = () => {
  const [postData, setPostData] = useState([]]);
  const [newPostData, setNewPostData] = useState({
    title: '', message: '', selectedFile: ''
  });
  const apiUrl = 'http://localhost:5000/posts';


  // // CARA PERTAMA: ====================================
  // // if link exist: success fetch || if link not exist: page still looks ok
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
  // // if link exist: success fetch || if link not exist: page broken
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

  // // CARA KEEMPAT: ========================================
  // // if link exist: Success fetch || if link not exist: page still looks ok
  const getPosts = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setPostData(data))
      .catch(err => console.error("error: ", err));
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
      <Form newPostData={newPostData} setNewPostData={setNewPostData} handleSubmit={handleSubmit} />
      <Posts postData={postData} />
    </>
  )
};

export default App;
