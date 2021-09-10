const Summary = ({ title, value }) => {
  return (
    <div>
      <h4>{ title }</h4>
      <p className='money'>Rp { value }</p>
    </div>
  )
}

const Summaries = ({ income, expense }) => {
  return (
    <div className='inc-exp-container'>
      <Summary title='Income' value={income} />
      <Summary title='Expense' value={expense} />
    </div>
  )
};

export default Summaries;
