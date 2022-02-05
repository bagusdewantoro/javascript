import moment from 'moment';

const Post = ({ post, setCurrentId, deletePost, likePost }) => {
  return (
    <div>
      <h2>
        {post.title} | {' '}
        <button onClick={e => likePost(post._id)}>Like</button>
        <button onClick={e => setCurrentId(post._id)}>Edit</button>
        <button onClick={e => deletePost(post._id)}>Delete</button>
      </h2>
      <img
        src={post.selectedFile}
        height='150' width='auto'
        alt='This is just title and description'
      />
      <h3>{post.message}</h3>
      <p>Created {moment(post.createdAt).fromNow()}</p>
      <p>{post.like} {post.like < 2 ? 'like' : 'likes'}</p>
      <br />
      <br />
    </div>
  )
}

const Posts = ({ postData, setCurrentId, deletePost, likePost }) => {
  return (
    !postData.length ?
      <h3>There is no post</h3> :
      (
        <div>
          { postData.map(post => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} deletePost={deletePost} likePost={likePost} />
          ))}
        </div>
      )
  )
}

export default Posts;
