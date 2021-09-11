import { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import Summaries from './Summaries';
import History from './History';
import AddTransaction from './AddTransaction';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([
    {
      id: 1,
      text: 'drink',
      value: -1000
    },
    {
      id: 2,
      text: 'fee',
      value: 9500
    },
    {
      id: 3,
      text: 'bonus',
      value: 3000
    },
    {
      id: 4,
      text: 'party',
      value: -1200
    }
  ]);

  const calculate = () => {
    setBalance(history.reduce((current, acc) => {
      return current + acc.value;
    }, 0));
    setIncome(history
      .filter((item) => item.value > 0)
      .reduce((current, acc) => current + acc.value, 0)
    );
    setExpense(history
      .filter((item) => item.value < 0)
      .reduce((current, acc) => current + acc.value, 0)
    );
  };

  return (
    <div onClick={calculate}>
      <Header />
      <div className='container'>
        <Balance total={balance} />
        <Summaries income={income} expense={expense}/>
        <History history={history}/>
        <AddTransaction />
      </div>
    </div>
  )
};

export default App;
