import { useState } from 'react';

const ExpenseList = ({ tabContent, transaction, categories, editList, deleteList }) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState('');
  const [category, setCategory] = useState('Not specified');

  const handleChange = (e) => {
    setNewText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    editList(newText, transaction.id);
    setNewText('');
    setEditing(false);
  }

  const editMode = (
    <form onSubmit={handleSubmit} className='row'>
      <div className='cell'>
        <input className='cellEdit' id={transaction.id} value={newText} onChange={handleChange}/>
      </div>
      <div className='cell'>
        <input className='cellEdit' placeholder={transaction.amount}/>
      </div>
      <div className='cell'>
        <select id='category' onChange={(e) => setCategory(e.target.value)}>
          {categories.map((type) => (
            <option key={type.id} value={type.desc}>{type.display}</option>
          ))}
        </select>
      </div>
      <button onClick={() => setEditing(false)}>Cancel</button>
      <button type='submit'>Save</button>
    </form>
  );
  const viewMode = (
    <div className='row'>
      <div className='cell'>
        {transaction.text}
      </div>
      <div className='cell'>
        {transaction.amount}
      </div>
      <div className='cell'>
        {transaction.category}
      </div>
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={() => deleteList(transaction.id)}>Delete</button>
    </div>
  );

  return isEditing ? editMode : viewMode;
};

export default ExpenseList;
