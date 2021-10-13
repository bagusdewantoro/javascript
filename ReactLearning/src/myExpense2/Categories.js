import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCategory from './AddCategory';

const Categories = ({ categories, addCategory, deleteCategory }) => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div>
      <button onClick={() => setAddMode(!addMode)}>Add Category</button>
      <Link to='/'>
        <button>Back to Home</button>
      </Link>
      {categories.map((category) => (
        <div key={category.id}>
          {category.desc}
          <button onClick={() => deleteCategory(category.id)}>x</button>
        </div>
      ))}
      {addMode && <AddCategory addCategory={addCategory} />}
    </div>
  )
};

export default Categories;
