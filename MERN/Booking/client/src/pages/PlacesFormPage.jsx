import { useEffect, useState } from "react"
import Perks from "../Perks.jsx"
import PhotosUploader from "../PhotosUploader";
import axios from "axios";
import AccountNav from "../AccountNav.jsx";
import { Navigate, useParams } from "react-router-dom";

export default function PlacesFormPage() {
  const {id} = useParams() 
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckout] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [price, setPrice] = useState(100)
    
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (!id) {
      return
    }
    axios.get('/places/' + id).then(response => {
      const {data} = response
      setTitle(data.title)
      setAddress(data.address)
      setAddedPhotos(data.addedPhotos)
      setDescription(data.description)
      setPerks(data.perks)
      setExtraInfo(data.extraInfo)
      setCheckIn(data.checkIn)
      setCheckout(data.checkOut)
      setMaxGuests(data.maxGuests)
      setPrice(data.price)
    })
  }, [id])
  
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
  
  async function savePlace(e) {
    e.preventDefault()
    const placeData = {
      title, address, addedPhotos, description, perks, 
      extraInfo, checkIn, checkOut, maxGuests, price
    }
    if (id) {
      await axios.put('/places', {
        id, 
        ...placeData
      })
      setRedirect(true)
    } else {
      await axios.post('/places', placeData)
      setRedirect(true)
    }
  }

  if (redirect) {
    return <Navigate to='/account/places' />
  }
  
  return (
    <div className="mb-32">
      <AccountNav />
      
      <form onSubmit={savePlace}>
        
        {/* Title */}
        {preInput('Title', 'title for your place, be short and catchy')}
        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="title, i.e. Emerging Condo" />
        
        {/* Address */}
        {preInput('Address', 'Address to this place')}
        <input value={address} onChange={e => setAddress(e.target.value)}type="text" placeholder="address" />
        
        {/* Photos */}
        {preInput('Photos', 'Show the best views')}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        
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

        {/* Check in & out, max guests, price */}
        {preInput('Check in&out times, max guests', 'add check in and out times, remember to have some time window for cleaning the room between guests guests')}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
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
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input value={price} onChange={e => setPrice(e.target.value)} type="number" />
          </div>
        </div>

        {/* Save */}
        <button className="primary mt-4">Save</button>

      </form>
    </div>
  )
}
