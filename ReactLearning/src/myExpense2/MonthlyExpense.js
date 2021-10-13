import { useState, useEffect } from 'react';
import AddTransaction from './AddTransaction';
import ExpenseList from './ExpenseList';


const MonthlyExpense = ({ tabContent, deleteTab, categories }) => {
  const [transactions, setTransactions] = useState(
    localStorage.getItem(`${tabContent.label}`) ? JSON.parse(localStorage.getItem(`${tabContent.label}`)) : []
  );

  const addList = (transaction) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTransaction = { id, ...transaction };
    setTransactions([...transactions, newTransaction]);
  };
  const editList = (id, newText, newAmount, newCategory) => {
    const editedTransactions = transactions.map(transaction => {
      if (transaction.id === id) {
        return {...transaction, text: newText, amount: newAmount, category: newCategory }
      }
      return transaction;
    });
    setTransactions(editedTransactions);
  };
  const deleteList = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  };

  const storeContent = () => {
    localStorage.setItem(`${tabContent.label}`, JSON.stringify(transactions));
  };
  useEffect(() => storeContent());

  return (
    <div>
      <h2>{tabContent.label}</h2>
      <div className='row'>
        <div className='cell'><button>Text</button></div>
        <div className='cell'><button>Price</button></div>
        <div className='cell'><button>Category</button></div>
      </div>
      {transactions.map((transaction) => (
        <ExpenseList
          key={ transaction.id }
          transaction={ transaction }
          categories={ categories }
          tabContent = { tabContent }
          editList={ editList }
          deleteList={ deleteList }
        />
      ))}
      <AddTransaction
        addList={ addList }
        categories={ categories}
      />
      <button className='delete-tab' onClick={() => {
        delete localStorage[`${tabContent.label}`];
        deleteTab(tabContent.id)
      }}>
        Delete Tab
      </button>
    </div>
  )
};

export default MonthlyExpense;
