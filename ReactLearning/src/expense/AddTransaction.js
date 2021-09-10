const Form = () => {
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='text'>Text</label>
        <input type='text' id='text' placeholder='Enter text...'/>
      </div>
      <div className='form-control'>
        <label htmlFor='amount'>Amount<br />(negative - expense, positive - income)
        </label>
        <input type='number' id='amount' placeholder='Enter amount...'/>
      </div>
      <button className='btn'>Add transaction</button>
    </form>
  )
};

const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <Form />
    </div>
  )
};

export default AddTransaction;
