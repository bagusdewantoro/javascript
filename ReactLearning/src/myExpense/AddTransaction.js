import { useState } from 'react';

const AddTransaction = ({ addList, categories }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const submitList = (e) => {
    e.preventDefault();
    addList({ text, amount });
    setText('');
    setAmount('');
  }

  return (
    <div>
      <h3>Summary</h3>
      <form onSubmit={submitList}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' id='text' placeholder='Enter text...' value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
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
