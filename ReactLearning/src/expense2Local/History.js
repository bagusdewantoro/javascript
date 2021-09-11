const List = ({ list, deleteList, thousands }) => {
  return (
    <li className={ list.amount > 0 ? 'plus' : 'minus' }>
      <button
        className='delete-btn'
        onClick={() => deleteList(list.id)}
      >
        x
      </button>
      { list.text }:
      <span> Rp { thousands(list.amount) }</span>
    </li>
  )
};

const History = ({ history, deleteList, thousands }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        { history.map((list) => (
          <List
            key={ list.id }
            list={ list }
            deleteList={ deleteList }
            thousands={ thousands }
          />
        ))}
      </ul>
    </div>
  )
};

export default History;
