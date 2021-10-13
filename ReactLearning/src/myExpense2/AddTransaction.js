import { useState } from 'react';

const AddTransaction = ({ addList, categories }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Not specified');

  const submitList = (e) => {
    e.preventDefault();
    addList({ text, amount, category });
    setText('');
    setAmount('');
    setCategory('Not specified');
  }

  return (
    <form onSubmit={submitList} className='row'>
      <div className='cell'>
        <input className='cellEdit' type='text' id='text' placeholder='Enter text...' value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='cell'>
        <input className='cellEdit' type='number' id='amount' placeholder='Enter amount...' value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className='cell'>
        <select id='category' onChange={(e) => setCategory(e.target.value)} value={category}>
          {categories.map((type) => (
            <option key={type.id} value={type.desc}>{type.display}</option>
          ))}
        </select>
      </div>
      <button type='submit'>Add transaction</button>
    </form>
  )
};


export default AddTransaction;
