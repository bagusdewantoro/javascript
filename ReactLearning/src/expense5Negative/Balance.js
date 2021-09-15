import { useContext } from 'react';
import { GlobalContext, numberFormat } from './context/GlobalState';

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const balance = () => {
    const income = transactions
      .filter((item) => item.expense === false)
      .reduce((current, acc) => current + acc.amount, 0);
    const expense = transactions
      .filter((item) => item.expense === true)
      .reduce((current, acc) => current + acc.amount, 0);
    return income - expense;
  };
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Rp { numberFormat(balance()) }</h1>
    </div>
  )
};


export default Balance;
