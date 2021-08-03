const formatDate = (date) => {
  return date.toLocaleDateString();
};

const Comment = (props) => {
  return (
    <div>
      <div>
        <img
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div>{props.author.name}</div>
      </div>
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
};

// You can do like this below
/*
const Comment = ({date, text, author}) => {
  return (
    <div>
      <div>
        <img
          src={author.avatarUrl}
          alt={author.name}
        />
        <div>{author.name}</div>
      </div>
      <div>{text}</div>
      <div>{formatDate(date)}</div>
    </div>
  );
};
*/

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
