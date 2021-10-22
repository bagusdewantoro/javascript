// import { useState, useEffect } from 'react';
import Header from './Header';
import Balance from './Balance';
import Summaries from './Summaries';
import History from './History';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from './context/GlobalState';


const App = () => {
  // const [balance, setBalance] = useState(0);
  // const [income, setIncome] = useState(0);
  // const [expense, setExpense] = useState(0);
  // const [history, setHistory] = useState([
  //   {
  //     id: 1,
  //     text: 'drink',
  //     amount: -1000
  //   },
  //   {
  //     id: 2,
  //     text: 'fee',
  //     amount: 9500
  //   },
  //   {
  //     id: 3,
  //     text: 'bonus',
  //     amount: 3000
  //   },
  //   {
  //     id: 4,
  //     text: 'party',
  //     amount: -1200
  //   }
  // ]);
  //
  // const addList = (transaction) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTransaction = { id, ...transaction };
  //   setHistory([...history, newTransaction]);
  // };
  //
  // const deleteList = (id) => {
  //   setHistory(history.filter((item) => item.id !== id));
  // };
  //
  // const calculate = () => {
  //   setBalance(history.reduce((current, acc) => {
  //     return current + acc.amount;
  //   }, 0));
  //   setIncome(history
  //     .filter((item) => item.amount > 0)
  //     .reduce((current, acc) => current + acc.amount, 0)
  //   );
  //   setExpense(history
  //     .filter((item) => item.amount < 0)
  //     .reduce((current, acc) => current + acc.amount, 0)
  //   );
  // };
  //
  // const thousands = (num) => {
  //   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  // useEffect(() => calculate());

  return (
    <GlobalProvider >
      <Header />
      <div className='container'>
        <Balance />
        <Summaries />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
};

export default App;
