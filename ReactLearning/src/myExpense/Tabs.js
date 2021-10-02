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
      <form>
        <input className="month" type="text" id="item" placeholder={month} />
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
