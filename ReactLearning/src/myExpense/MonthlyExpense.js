import { useState, useEffect } from 'react';
import AddTransaction from './AddTransaction';

const ExpenseList = ({ tabContent, transaction, categories, editList }) => {
  const [text, setText] = useState(
    localStorage.getItem(`${transaction.id}`) ? JSON.parse(localStorage.getItem(`${transaction.id}`)) :
    transaction.text);
  // const [amount, setAmount] = useState(transaction.amount);
  const [type, setType] = useState('Not specified');

  const updateList = (e) => {
    setText(e.target.value);
    editList(text, transaction.id);
  }

  const storeData = () => {
    localStorage.setItem(`${transaction.id}`, JSON.stringify(text));
  };
  useEffect(() => storeData());
  return (
    <tbody>
      <tr>
        <td>
          <input value={text} onChange={updateList}/>
        </td>
        <td>
          <input placeholder={transaction.amount}/>
        </td>
        <td>
          <select defaultValue={type} id='category' onChange={(e) => setType(e.target.value)}>
            {categories.map((category) => (
              <option key={category.id} value={category.desc}>{category.display}</option>
            ))}
          </select>
        </td>
      </tr>
    </tbody>
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
  const editList = (text, id) => {
    transactions.map(each => each.id === id ? each.text = text : null)
  }

  const storeContent = () => {
    localStorage.setItem(`${tabContent.label}`, JSON.stringify(transactions));
  };
  useEffect(() => storeContent());

  return (
    <div>
      <h2>{tabContent.label}</h2>
      <table>
        <thead>
          <tr>
            <th><button>Text</button></th>
            <th><button>Price</button></th>
            <th><button>Category</button></th>
          </tr>
        </thead>
        {transactions.map((transaction) => (
          <ExpenseList
            key={ transaction.id }
            transaction={ transaction }
            categories={ categories }
            tabContent = { tabContent }
            editList={ editList }
          />
        ))}
      </table>
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
