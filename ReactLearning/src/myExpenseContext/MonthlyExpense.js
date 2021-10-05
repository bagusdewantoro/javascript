import { useState, useEffect } from 'react';
import AddTransaction from './AddTransaction';

const ExpenseList = ({ transaction }) => {
  return (
    <div>
      <p>{ transaction.text } { transaction.amount } { transaction.type }</p>
    </div>
  )
};

const MonthlyExpense = ({ tabContent, deleteTab, categories }) => {
  const [transactions, setTransactions] = useState(
    localStorage.getItem(`${tabContent.label}`) ? JSON.parse(localStorage.getItem(`${tabContent.label}`)) : []
  );
  const addList = (transaction) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTransaction = { id, ...transaction };
    setTransactions([...transactions, newTransaction]);
  };
  const storeContent = () => {
    // set local storage
    localStorage.setItem(`${tabContent.label}`, JSON.stringify(transactions));
  };
  useEffect(() => storeContent());
  // const confirmDelete = () => {
  //   let confirmDelete = confirm('Are you sure?');
  //   confirmDelete ? alert('Success') : alert('Cancelled');
  // };

  return (
    <div>
      <h2>{tabContent.label}</h2>
      {transactions.map((transaction) => (
        <ExpenseList
          key={ transaction.id }
          transaction={ transaction }
        />
      ))}
      <AddTransaction
        addList={ addList }
        categories={ categories}
      />
      <button onClick={() => {
        delete localStorage[`${tabContent.label}`];
        deleteTab(tabContent.id)
      }}>
        Delete Tab
      </button>
    </div>
  )
};

export default MonthlyExpense;
