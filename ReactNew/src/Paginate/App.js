import { useState, useEffect } from 'react';
import './App.css'

const url = 'https://jsonplaceholder.typicode.com/posts';


const Post = ({ data }) => {
  const { id, title, body } = data;
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}


const Pagination = ({ data, pageLimit, dataLimit, currentPage, setCurrentPage }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  }
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  }
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  return (
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
  )
}


const Pages = ({ data, Post, title, pageLimit, dataLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);
  return (
    <div>
      <h1>{title}</h1>
      <Pagination
        data={data}
        pageLimit={pageLimit}
        dataLimit={dataLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="dataContainer">
        {getPaginatedData().map((d) => (
          <Post key={d.id} data={d} />
        ))}
      </div>
      <Pagination
        data={data}
        pageLimit={pageLimit}
        dataLimit={dataLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}


const App = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div>
      <h1>My Pagination Pages</h1>
      {posts.length > 0 ? (
        <>
          <Pages
            data={posts}
            Post={Post}
            title="List of Posts"
            pageLimit={3}
            dataLimit={8}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </div>
  );
}

export default App;
