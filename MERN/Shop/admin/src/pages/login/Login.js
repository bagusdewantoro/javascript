import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector(state => state.user);

  const handleClick = e => {
    e.preventDefault();
    login(dispatch, { username, password })
    console.log(username)
  }
  return (
    <form>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <input
          style={{ padding:10, marginBottom:20 }}
          type='text'
          placeholder='username'
          onChange={e => setUsername(e.target.value)}
        />
        <input
          style={{ padding:10, marginBottom:20 }}
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          disabled={isFetching}
          style={{ padding:10, width:100}}
        >
          Login
        </button>
      </div>
    </form>
  )
}

export default Login;
