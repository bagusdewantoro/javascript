import { useState, useEffect } from 'react';
import AddTransaction from './AddTransaction';

const ExpenseList = ({ transaction }) => {
  return (
    <div>
      <p>{ transaction.text } { transaction.amount }</p>
    </div>
  )
};

const Tabs = ({ tabContent, deleteTab }) => {
  const [month, setMonth] = useState(tabContent.label);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled)
  }
  const [transactions, setTransactions] = useState(
    localStorage.getItem(`${month}`) ? JSON.parse(localStorage.getItem(`${month}`)) : []
  );
  const addList = (transaction) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTransaction = { id, ...transaction };
    setTransactions([...transactions, newTransaction]);
  };
  const calculate = () => {
    // set local storage
    localStorage.setItem(`${month}`, JSON.stringify(transactions));
  };
  useEffect(() => calculate());

  return (
    <div>
      <form onDoubleClick={()=>setIsDisabled(!isDisabled)} onSubmit={handleSubmit}>
        <input className="month" type="text" id="item" placeholder={month} disabled={isDisabled} onChange={(e) => setMonth(e.target.value)}/>
      </form>
      {transactions.map((transaction) => (
        <ExpenseList
          key={ transaction.id }
          transaction={ transaction }
        />
      ))}
      <AddTransaction
        addList={ addList }
      />
      <button onClick={() => {
        delete localStorage[`${month}`];
        deleteTab(tabContent.id)
      }}>
        Delete Tab
      </button>
    </div>
  )
};

export default Tabs;
