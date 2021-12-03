import { Outlet, Link } from 'react-router-dom';

const Expenses = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to='/expenses/sub1'>Expenses Sub 1</Link> | {' '}
        <Link to='/expenses/sub2'>Expenses Sub 2</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Expenses;
