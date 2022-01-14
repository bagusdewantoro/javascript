import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  return (
    <div>
      <h2>
        {post.title} | {' '}
        <button onClick={e => setCurrentId(post._id)}>Edit</button>
      </h2>
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

const Posts = ({ postData, setCurrentId }) => {
  return (
    !postData.length ?
      <h3>There is no post</h3> :
      (
        <div>
          { postData.map(post => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </div>
      )
  )
}

export default Posts;
