import { Link, Outlet, useParams } from 'react-router-dom';
import { invoices, getInvoice } from '../data';

const Invoice = () => {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  console.log('useParams() =', params);
  console.log('useParams().invoiceId =', params.invoiceId);
  console.log('invoice =', invoice);

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

const Invoices = () => {
  return (
    <main>
      <h2>Invoices  </h2>
      <div style={{ display: "flex" }}>
        <nav
          style= {{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {invoices.map(invoice => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    </main>
  );
};

export { Invoices, Invoice };
