import { useState } from 'react';

const AddTransaction = ({ addList, categories }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Not specified');

  const submitList = (e) => {
    e.preventDefault();
    if (!text || !amount ) {
      alert('Please fill in the form');
      return;
    }
    addList({ text, amount, type });
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
          <label htmlFor='amount'>Amount<br />(negative - expense, positive - income)
          </label>
          <input type='number' id='amount' placeholder='Enter amount...' value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor='category'>Category</label>
          <select defaultValue={type} id='category' onChange={(e) => setType(e.target.value)}>
            {categories.map((category) => (
              <option key={category.id} value={category.desc}>{category.display}</option>
            ))}
          </select>
        </div>
        <button className='btn' type='submit'>Add transaction</button>
      </form>
    </div>
  )
};


export default AddTransaction;
