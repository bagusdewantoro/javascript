import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from 'axios'
import {url} from '../apiConfig.js'


export default function PlacePage() {
  const {id} = useParams()
  const [place, setPlace] = useState(null)
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  useEffect(() => {
    if (!id) {
      return
    }
    axios.get('/places/' + id).then(response => {
      setPlace(response.data)
    })
  }, [id])

  if (!place) return ''

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl text-white">Photos of {place.title}</h2>
            <button onClick={() => setShowAllPhotos(false) } 
              className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          {place?.addedPhotos?.length > 0 && place.addedPhotos.map(photo => (
            <div key={photo}>
              <img src={url + '/uploads/' + photo} alt="" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8">

      <h1 className="text-3xl">{place.title}</h1>
      <a target="_blank" className="flex gap-1 my-3 block font-semibold underline"
        href={'https://maps.google.com/?q=' + place.address}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        {place.address}
      </a >

      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          <div>
            {place.addedPhotos?.[0] && (
              <div className="">
                <img className="aspect-square object-cover"
                  src={url + "/uploads/" + place.addedPhotos[0]} alt="" />
              </div>
            )}
          </div>
          <div className="grid">
            {place.addedPhotos?.[1] && (
              <img className="aspect-square object-cover"
                src={url + "/uploads/" + place.addedPhotos[1]} alt="" />
            )}
            <div className="overflow-hidden">
              {place.addedPhotos?.[2] && (
                <img className="aspect-square object-cover relative top-2"
                  src={url + "/uploads/" + place.addedPhotos[2]} alt="" />
              )}
            </div>
          </div>
        </div>
        <button onClick={() => setShowAllPhotos(true)} 
          className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          Show more photos
        </button>
      </div>
      
    </div>
  )
}