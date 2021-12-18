import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './myAction';
import Posts from './Posts';
import Form from './Form';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <Posts />
    </>
  )
};

export default App;
