import { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const List = ({ list }) => {
  const { deleteList } = useContext(GlobalContext);
  return (
    <li className={ list.amount > 0 ? 'plus' : 'minus' }>
      <button
        className='delete-btn'
        onClick={() => deleteList(list.id)}
      >
        x
      </button>
      { list.text }:
      <span> Rp { list.amount }</span>
    </li>
  )
};

const History = () => {
  // pull global state from GlobalContext
  const {transactions} = useContext(GlobalContext);
  // console.log(context);
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
      { transactions.map((list) => (
        <List
          key={ list.id }
          list={ list }
          // deleteList={ deleteList }
          // thousands={ thousands }
        />
      ))}
      </ul>
    </div>
  )
};

export default History;