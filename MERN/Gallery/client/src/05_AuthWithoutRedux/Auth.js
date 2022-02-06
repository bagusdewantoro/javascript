import { useState } from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const handleShowPassword = (e) => {
    e.preventDefault()
    setShowPassword(currently => !currently)
  }
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }

  return (
    <div>
      <Link to='/'><button>Home</button></Link>
      <h1>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          {
            isSignup && (
              <>
                <label>First Name</label>
                <input type='text' placeholder='First Name' onChange={handleChange} autoFocus />
                <label>Last Name</label>
                <input type='text' placeholder='Last Name' onChange={handleChange} />
              </>
            )
          }
          <label>Email Address</label>
          <input type='email' placeholder='Email' onChange={handleChange} />
          <label>Password</label>
          <input type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={handleChange} />
          <button onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
          {
            isSignup && (
              <>
                <label>Confirm Password</label>
                <input type='password' placeholder='Confirm Password' onChange={handleChange} />
              </>
            )
          }
          <br />
          <input type='submit' value={isSignup ? 'Sign Up' : 'Sign In'} />
        </div>
      </form>
    </div>
  )
}

export default Auth;
