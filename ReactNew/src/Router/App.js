import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import Expenses from './routes/expenses';
import ExpensesSub1 from './routes/expensessub1';
import ExpensesSub2 from './routes/expensessub2';
import { Invoices, Invoice } from './routes/invoices';
import Other from './Other';

const Main = () => {
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout */}
        <Route path="/" element={<Main />}>
          <Route path="expenses" element={<Expenses />}>
            <Route path="sub1" element={<ExpensesSub1 />} />
            <Route path="sub2" element={<ExpensesSub2 />} />
          </Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />}/>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>

        {/* Other layout */}
        <Route path="other/layout" element={<Other />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
