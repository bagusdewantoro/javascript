import { Link } from 'react-router-dom';

const Other = () => {
  return (
    <div>
      <h1>Other Layout!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to='/'>Back to Home</Link>
      </nav>
    </div>
  );
};

export default Other;
