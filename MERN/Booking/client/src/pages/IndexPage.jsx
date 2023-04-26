import { useEffect, useState } from "react"
import axios from 'axios'
import {api} from '../apiConfig.js'


axios.defaults.baseURL = api.defaults.baseURL

export default function IndexPage() {
	const [places, setPlaces] = useState([])
	useEffect(() => {
		axios.get('/places').then(res => {
			setPlaces(res.data)
		})
	}, [])
	return (
		<div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 && places.map(place => (
				<div key={place._id}>
					<div className='bg-gray-500 mb-2 rounded-2xl flex'>
						{place.addedPhotos?.[0] && (
							<img className="rounded-2xl object-cover aspect-square"
								src={axios.defaults.baseURL + '/uploads/' + place.addedPhotos[0]} alt="" />
						)}
					</div>
					<h2 className="font-bold">{place.address}</h2>
					<h3 className="truncate leading-4 text-gray-500">{place.title}</h3>
					<div className="mt-1">
						<span className="font-bold">${place.price}</span> per night
					</div>
					
				</div>
			))}
    </div>
	)
}