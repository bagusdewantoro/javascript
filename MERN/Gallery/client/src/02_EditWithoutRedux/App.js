import { useEffect, useState } from 'react';
import Posts from './Posts';
import Form from './Form';


const App = () => {
  const [collection, setCollection] = useState({collection:[]});
  const [currentId, setCurrentId] = useState(null);

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
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCollection(data);
      });
  }, [collection]);

  return (
    <>
      <Form />
      <Posts collection={collection} />
    </>
  )
};

export default App;
