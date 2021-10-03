import { Link } from 'react-router-dom';
import AddCategory from './AddCategory';

const Categories = ({ categories }) => {
  return (
    <div>
      <AddCategory />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.desc}</li>
        ))}
      </ul>
      <Link to='/'>
        <button>Back</button>
      </Link>
    </div>
  )
};

export default Categories;
