import { useState } from 'react';

const ExpenseList = ({ tabContent, transaction, categories, editList, deleteList }) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(transaction.text);
  const [newAmount, setNewAmount] = useState(transaction.amount);
  const [newCategory, setNewCategory] = useState(transaction.category);

  const handleChange = (e) => {
    setNewText(e.target.value)
  }
  const handleCancel = () => {
    setNewText(transaction.text);
    setNewAmount(transaction.amount);
    setNewCategory(transaction.category);
    setEditing(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    editList(transaction.id, newText, newAmount, newCategory);
    setNewText(newText);
    setNewAmount(newAmount);
    setNewCategory(newCategory);
    setEditing(false);
  }

  const editMode = (
    <form onSubmit={handleSubmit} className='row'>
      <div className='cell'>
        <input className='cellEdit' id={transaction.id} value={newText} onChange={handleChange}/>
      </div>
      <div className='cell'>
        <input className='cellEdit' onChange={(e) => setNewAmount(e.target.value)} value={newAmount}/>
      </div>
      <div className='cell'>
        <select id='category' onChange={(e) => setNewCategory(e.target.value)} value={newCategory}>
          {categories.map((type) => (
            <option key={type.id} value={type.desc}>{type.display}</option>
          ))}
        </select>
      </div>
      <button type='button' onClick={handleCancel}>Cancel</button>
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
