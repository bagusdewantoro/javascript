import { useEffect, useState } from 'react';

// import axios from 'axios';
// const fetchPosts = () => axios.get(url);
// axios.get(url)
//   .then(res => console.log)
//   .catch(err => console.log)


const Posts = () => {
  const [data, setData] = useState([]);
  const url = 'http://localhost:5000/users/rec';

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchTasks()
      setData(dataFromServer)
    }
    getData()
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  return (
    <>
      {data.map((eachData) => (
        <div key={eachData._id}>
          <div>{eachData.name}</div>
          <div>{eachData.birthdate}</div>
          {/* <img src={eachData.photo} /> */}
        </div>
      ))}
    </>
  )
};

export default Posts;
