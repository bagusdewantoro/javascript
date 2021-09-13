import { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const Summary = ({ title, amount }) => {
  return (
    <div>
      <h4>{ title }</h4>
      <p className='money'>Rp { amount }</p>
    </div>
  )
}

const Summaries = ({ thousands }) => {
  const {transactions} = useContext(GlobalContext);
  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((current, acc) => current + acc.amount, 0);
  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((current, acc) => current + acc.amount, 0);
  return (
    <div className='inc-exp-container'>
      <Summary title='Income' amount={ thousands(income) } />
      <Summary title='Expense' amount={ thousands(expense)} />
    </div>
  )
};

export default Summaries;
