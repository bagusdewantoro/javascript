import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to='/invoices'>Invoices</Link> | {' '}
        <Link to='/expenses'>Expenses</Link> | {' '}
        <Link to='/other/layout'>Other Layout</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
