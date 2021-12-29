import { useEffect, useState } from 'react';
import Posts from './Posts';
import Form from './Form';
import axios from 'axios';


const App = () => {
  const [collection, setCollection] = useState([]);
  // const [currentId, setCurrentId] = useState(null);

  // // CARA PERTAMA: =====================================
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/posts');
  //   const data = await res.json();
  //   return data;
  // }
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const data = await fetchTasks()
  //     setCollection(data);
  //     console.log(collection)
  //   }
  //   getTasks()
  // }, [collection]);

  // // CARA KEDUA: =====================================
  // useEffect(() => {
  //   fetch('http://localhost:5000/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setCollection(data);
  //     });
  // }, [collection]);

  // // CARA KETIGA: ====================================
  const url = 'http://localhost:5000/posts';
  const getPosts = async () => {
    try {
      const { data } = axios.get(url)
        .then(res => setCollection(res.data));

      // setCollection(data);
      console.log(collection)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, [ ]);

  return (
    <>
      <Form />
      <Posts collection={collection} />
    </>
  )
};

export default App;
