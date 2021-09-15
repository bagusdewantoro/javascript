import { useState, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addList } = useContext(GlobalContext);

  const submitList = (e) => {
    e.preventDefault();
    const newList = {
      id: Math.floor(Math.random() * 10000) + 1,
      text,
      amount
    };
    if (!text || !amount) {
      alert('Please fill in the form');
      return;
    }
    addList(newList);
    setText('');
    setAmount('');
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={submitList}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' id='text' placeholder='Enter text...' value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount<br />(check the box if it is expense)
          </label>
          <input type='number' id='amount' placeholder='Enter amount...' value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button className='btn' type='submit'>Add transaction</button>
      </form>
    </div>
  )
};


export default AddTransaction;
