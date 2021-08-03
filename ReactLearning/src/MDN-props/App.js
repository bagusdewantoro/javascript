const formatDate = (date) => {
  return date.toLocaleDateString();
};

const Avatar = (props) => {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
};

const UserInfo = (props) => {
  return (
    <div>
      <Avatar user={props.user}/>
      <div>{props.user.name}</div>
    </div>
  )
}

const Comment = (props) => {
  return (
    <div>
      <UserInfo user={props.author}/>
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
};

const comment = {
  newDate: new Date(),
  newText: 'I hope you enjoy learning React!',
  newAuthor: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const App = () => {
  return (
    <Comment
      date={comment.newDate}
      text={comment.newText}
      author={comment.newAuthor}
    />
  )
};

export default App;
