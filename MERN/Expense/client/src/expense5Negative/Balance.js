import { useContext } from 'react';
import { GlobalContext, numberFormat } from './context/GlobalState';

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const balance = transactions.reduce((current, acc) => {
    return current + acc.amount;
  }, 0);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Rp { numberFormat(balance) }</h1>
    </div>
  )
};


export default Balance;
