import './newUser.css'


export const NewUser = () => {
  const formField = [
    ['Username', 'text', 'john'],
    ['Full Name', 'text', 'John Mayer'],
    ['Email', 'email', 'john@gmail.com'],
    ['Password', 'password', 'password'],
    ['Phone', 'text', '+63 356 78954'],
    ['Address', 'text', 'LA | USA'],
  ]

  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        {formField.map((field, index) => (
          <BoxField
            key={index}
            label={field[0]}
            type={field[1]}
            string={field[2]}
          />
        ))}
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label for='other'>Other</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  )
}

const BoxField = ({ label, type, string }) => {
  return (
    <div className='newUserItem'>
      <label>{label}</label>
      <input type={type} placeholder={string} />
    </div>
  )
}
