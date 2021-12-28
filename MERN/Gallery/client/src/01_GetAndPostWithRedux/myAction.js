// API =====================
import axios from 'axios';
const url = 'http://localhost:5000/posts';
const fetchPosts = () => axios.get(url);
const postPost = (newPost) => axios.post(url, newPost);

// ACTIONS
// get posts
const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPosts();
    dispatch({
      type: 'FETCH_ALL',
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};
// create new post
const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await postPost(post);
    dispatch({
      type: 'CREATE',
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};

export { getPosts, createPost };
