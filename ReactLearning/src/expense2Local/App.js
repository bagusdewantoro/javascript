import { useState, useEffect } from 'react';
import Header from './Header';
import Balance from './Balance';
import Summaries from './Summaries';
import History from './History';
import AddTransaction from './AddTransaction';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  // check local storage
  const [history, setHistory] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []);

  const addList = (transaction) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTransaction = { id, ...transaction };
    setHistory([...history, newTransaction]);
  };

  const deleteList = (id) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  const calculate = () => {
    // set local storage
    localStorage.setItem('items', JSON.stringify(history));
    // calculate & update income, expense, balance
    setBalance(history.reduce((current, acc) => {
      return current + acc.amount;
    }, 0));
    setIncome(history
      .filter((item) => item.amount > 0)
      .reduce((current, acc) => current + acc.amount, 0)
    );
    setExpense(history
      .filter((item) => item.amount < 0)
      .reduce((current, acc) => current + acc.amount, 0)
    );
  };

  const thousands = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => calculate());

  return (
    // <div onClick={calculate}>
    <div>
      <Header />
      <div className='container'>
        <Balance total={balance} thousands={thousands} />
        <Summaries income={income} expense={expense} thousands={thousands} />
        <History history={history} deleteList={deleteList} thousands={thousands} />
        <AddTransaction addList={addList}/>
      </div>
    </div>
  )
};

export default App;
