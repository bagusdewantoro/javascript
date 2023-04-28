import { useEffect, useState } from "react"
import axios from 'axios'
import {url} from '../apiConfig.js'
import {Link} from 'react-router-dom'

export default function IndexPage() {
	const [places, setPlaces] = useState([])
	useEffect(() => {
		axios.get('/places').then(res => {
			setPlaces(res.data)
		})
	}, [])
	return (
		<div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 && places.map(place => (
				<Link key={place._id} to={'/place/' + place._id}>
					<div className='bg-gray-500 mb-2 rounded-2xl flex'>
						{place.addedPhotos?.[0] && (
							<img className="rounded-2xl object-cover aspect-square"
								src={url + '/uploads/' + place.addedPhotos[0]} alt="" />
						)}
					</div>
					<h2 className="font-bold">{place.address}</h2>
					<h3 className="truncate leading-4 text-gray-500">{place.title}</h3>
					<div className="mt-1">
						<span className="font-bold">${place.price}</span> per night
					</div>
					
				</Link>
			))}
    </div>
	)
}