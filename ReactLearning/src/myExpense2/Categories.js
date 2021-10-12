import { Link } from 'react-router-dom';
import AddCategory from './AddCategory';

const Categories = ({ categories }) => {
  return (
    <div>
      <AddCategory />
      <Link to='/'>
        <button>Back to Home</button>
      </Link>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.desc}</li>
        ))}
      </ul>
    </div>
  )
};

export default Categories;
