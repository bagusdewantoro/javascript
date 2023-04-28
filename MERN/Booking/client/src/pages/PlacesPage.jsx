import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from 'axios'
import {url} from '../apiConfig.js'


export default function PlacesPage() {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    axios.get('/user-places').then(({data}) => {
      setPlaces(data)
    })
  }, [])
  
  return (
    <div>
      <AccountNav />

      <div className="text-center">
        <Link 
          to="/account/places/new"
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add new place
        </Link>
      </div>

      <div className="mt-4">
        {places.length > 0  && places.map(place => (
          <Link to={'/account/places/' + place._id}
            key={place._id}
            className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
            <div className="flex h-32 w-32 bg-gray-300 shrink-0">
              {place.addedPhotos.length && (
                <img 
                  className='object-cover'
                  src={url + '/uploads/' + place.addedPhotos[0]} alt='' />
              )}
            </div>
            <div className="grow-0 shrink">
              <h2 className="text-xl">{place.title}</h2>
              <p className="text-sm mt-2">{place.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}