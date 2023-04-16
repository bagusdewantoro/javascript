import {useContext, useState} from 'react'
import axios from 'axios'
import {UserContext} from '../UserContext.jsx'
import {Navigate, Link, useParams} from 'react-router-dom'

export default function AccountPage() {
	const [redirect, setRedirect] = useState(false)
	const {ready, user, setUser} = useContext(UserContext)

	let {subpage} = useParams()
	// console.log(subpage)
	if (subpage === undefined) {
		subpage = 'profile'
	}

	async function logout(){
		await axios.post('/logout')
		setRedirect('/')
		setUser(null)
	}

	if (!ready) {
		return 'Loading...'
	}

	if (ready && !user && !redirect) {
		return <Navigate to={'/login'} />
	}

	function linkClasses(type=null) {
		let classes = 'py-2 px-6';
		if (type===subpage) {
			classes += ' bg-primary text-white rounded-full'
		}
		return classes
	}

	if (redirect) {
		return <Navigate to = {redirect} />
	}

	return (
		// <div>Account page for {user?.name}</div>
		<div>

			<nav className="w-full flex justify-center mt-8 gap-4 mb-8">
				<Link 
					to={'/account'}
					className={linkClasses('profile')}
				>
					My profile
				</Link>
				<Link 
					to={'/account/bookings'}
					className={linkClasses('bookings')}
				>
					My bookings
				</Link>
				<Link 
					to={'/account/places'}
					className={linkClasses('places')}
				>
					My accommodations
				</Link>
			</nav>

			{subpage === 'profile' && (
				<div className='text-center max-w-lg mx-auto'>
					Logged in as {user.name} ({user.email})<br />
					<button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
				</div>		
			)}

		</div>
	)
}