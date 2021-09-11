const Summary = ({ title, amount }) => {
  return (
    <div>
      <h4>{ title }</h4>
      <p className='money'>Rp { amount }</p>
    </div>
  )
}

const Summaries = ({ income, expense, thousands }) => {
  return (
    <div className='inc-exp-container'>
      <Summary title='Income' amount={ thousands(income) } />
      <Summary title='Expense' amount={ thousands(expense)} />
    </div>
  )
};

export default Summaries;
