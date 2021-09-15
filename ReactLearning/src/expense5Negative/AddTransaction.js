import { useState, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState(false);

  const { addList } = useContext(GlobalContext);

  const submitList = (e) => {
    e.preventDefault();
    const newList = {
      id: Math.floor(Math.random() * 10000) + 1,
      text,
      amount,
      expense
    };
    if (!text || !amount) {
      alert('Please fill in the form');
      return;
    }
    addList(newList);
    setText('');
    setAmount('');
    setExpense(expense);
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
          <label htmlFor='amount'>Amount<br /></label>
          <div className='box-container'>
            <input type='checkbox' className='box' id='box'
              onChange={(e) => setExpense(!expense)}
            />
            <p>Check the box if it is income</p>
          </div>

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
