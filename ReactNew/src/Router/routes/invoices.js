import { NavLink, Outlet, useSearchParams, useParams,  } from 'react-router-dom';
import { invoices, getInvoice } from '../data';


const Invoice = () => {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  // console.log('useParams() =', params);
  // console.log('useParams().invoiceId =', params.invoiceId); // 1995 or 2000 or 2003 etc..
  // console.log('invoice =', invoice);

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
  let [searchParams, setSearchParams] = useSearchParams();
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
          <input
            value={searchParams.get("pilih") || ""}
            onChange={e => {
              let pilih = e.target.value;
              if (pilih) {
                setSearchParams({ pilih });
              } else {
                setSearchParams({});
              }
              console.log(pilih);
            }}
          />
          {invoices
            .filter(invoice => {
              let saring = searchParams.get("pilih");
              if (!saring) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(saring.toLowerCase());
            })
            .map(invoice => (
              <NavLink
                // style={{ display: "block", margin: "1rem 0" }} // for <Link>
                style={ ({ isActive }) => {
                  return {
                    display: 'block',
                    margin: '1rem 0',
                    color: isActive ? 'red' : ''
                  }
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </main>
  );
};

export { Invoices, Invoice };
