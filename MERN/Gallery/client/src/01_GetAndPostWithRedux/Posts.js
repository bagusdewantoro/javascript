import { useSelector } from 'react-redux';
import moment from 'moment';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <img
        src={post.selectedFile}
        height='150' width='auto'
        alt='This is just title and description'
      />
      <h3>{post.message}</h3>
      <p>Created at {moment(post.createdAt).fromNow()}</p>
      <br />
      <br />
    </div>
  )
}

const Posts = () => {
  const postData = useSelector((state) => state.myPostData)
  console.log(postData);
  return (
    !postData.length ?
      <h3>There is no post</h3> :
      (
        <div>
          { postData.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
    )
  )
};

export default Posts;
