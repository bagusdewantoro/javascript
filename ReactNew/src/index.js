import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import App from './App';
import Expenses from './routes/expenses';
import ExpensesSub1 from './routes/expensessub1';
import ExpensesSub2 from './routes/expensessub2';
import { Invoices, Invoice } from './routes/invoices';
import Other from './Other';



ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />}>
          <Route path="sub1" element={<ExpensesSub1 />} />
          <Route path="sub2" element={<ExpensesSub2 />} />
        </Route>
        <Route path="invoices" element={<Invoices />}>
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

      <Route path="other/layout" element={<Other />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
