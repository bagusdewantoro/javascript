const List = ({ text, value }) => {
  return (
    <li className={ value > 0 ? 'plus' : 'minus' }>
      <button className='delete-btn'>x</button>
      { text }:
      <span> { value }</span>
    </li>
  )
};

const History = ({ history }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        { history.map((list) => (
          <List
            key={ list.id }
            text={ list.text }
            value={ list.value }
          />
        ))}
      </ul>
    </div>
  )
};

export default History;
