import {Link, Navigate} from "react-router-dom";
import {useState, useContext} from "react"
import axios from 'axios'
import {UserContext} from '../UserContext.jsx'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [redirect, setRedirect] = useState(false)

	const {setUser} = useContext(UserContext)

	async function handleLoginSubmit(e) {
		e.preventDefault()
		try {
			if (email.length > 0 && password.length > 0) {
				const {data} = await axios.post('/login', {email, password})
				setUser(data)
				alert('Login successful')
				setRedirect(true)
			} else {
				alert('Please fill all the fields above')
			}
		} catch (e) {
			alert(e.response.data)
		}
	}

	if (redirect) {
		return <Navigate to={'/'} />
	}

	return (
		<div className="mt-4 grow flex items-center justify-around">
			
			<div className="mb-64">
				<h1 className="text-4xl text-center mb-4">Login</h1>
	 			<form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
	 				<input type="email" 
	 					placeholder='your@mail.com'
	 					value={email} 
	 					onChange={e =>setEmail(e.target.value)} />
	 				<input type="password" 
	 					placeholder='password'
	 					value={password} 
	 					onChange={e =>setPassword(e.target.value)} />
	 				<button className="primary">Login</button>
	 				<div className="text-center py-2">
	 					Don't have an acount 
	 					yet? <Link className="underline text" to={'/register'}>
	 						Register now
	 					</Link>
	 				</div>
	 			</form>
			</div>

		</div>
	)
}