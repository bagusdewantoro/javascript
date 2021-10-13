import { useState } from 'react';

const AddCategory = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const handleSubmit = (e) => {

    e.preventDefault();
    addCategory({ desc: categoryName, display: categoryName });
    setCategoryName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='category'>Input new category</label>
      <input
        id='category'
        type='text'
        value={categoryName}
        placeholder='Input text...'
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddCategory;
