import { useState } from "react";
import axios from 'axios'
import {api} from '../apiConfig'
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks.jsx"


export default function PlacesPage() {
  const {action} = useParams();
  
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState('')
  const [photoLink, setPhotoLink] = useState([])
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckout] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)

  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    )
  }

  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    )
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    )
  }

  async function addPhotoByLink(e) {
    e.preventDefault()
    const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
    setAddedPhotos(prev => {
      return [...prev, filename]
    })
    setPhotoLink('')
  }

  function uploadPhoto(e) {
    const files = e.target.files
    const data = new FormData()
    for (let i=0; i<files.length; i++) {
      data.append('photos', files[i])
    }
    axios.post('/upload', data, {
      headers: {'Content-type': 'multipart/form-data'}
    }).then(response => {
      const {data:filenames} = response
      setAddedPhotos(prev => {
        return [...prev, ...filenames]
      })
    })
  }

  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
          <Link 
            to="/account/places/new"
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      
      {action === 'new' && (
        <div className="">
          <form>
            
            {/* Title */}
            {preInput('Title', 'title for your place, be short and catchy')}
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="title, i.e. Emerging Condo" />
            
            {/* Address */}
            {preInput('Address', 'Address to this place')}
            <input value={address} onChange={e => setAddress(e.target.value)}type="text" placeholder="address" />
            
            {/* Photos */}
            {preInput('Photos', 'Show the best views')}
            <div className="flex gap-2">
              <input 
                value={photoLink} 
                onChange={e => setPhotoLink(e.target.value)} type="text" placeholder="Add using a link ...jpg" />
              <button 
                onClick={addPhotoByLink}
                className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhotos.length > 0 && addedPhotos.map(link => (
                <div key={link}>
                  <img className="rounded-2xl object-cover h-48" 
                    src={'http://localhost:4000/uploads/' + link} alt={link} />
                </div>
              ))}
              <label className="cursor-pointer flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                <input type="file" multiple className="hidden" 
                  onChange={uploadPhoto} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                  Upload
              </label>
            </div>
            
            {/* Description */}
            {preInput('Description', 'Description of the place')}
            <textarea value={description} onChange={e => setDescription(e.target.value)} />
            
            {/* Perks */}
            {preInput('Perks', 'select all the perks of your place')}
            <div className="mt-2 gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              <Perks selected={perks} onChange={setPerks} />
            </div>

            {/* Extra Info */}
            {preInput('Extra Info', 'House rules, etc')}
            <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />

            {/* Check in & out, max guests */}
            {preInput('Check in&out times, max guests', 'add check in and out times, remember to have some time window for cleaning the room between guests guests')}
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input value={checkIn} onChange={e => setCheckIn(e.target.value)} type="text" placeholder="14:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input value={checkOut} onChange={e => setCheckout(e.target.value)} type="text" placeholder="11:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input value={maxGuests} onChange={e => setMaxGuests(e.target.value)} type="number" />
              </div>
            </div>

            {/* Save */}
            <button className="primary mt-4">Save</button>

          </form>
        </div>
      )}
    </div>
  )
}