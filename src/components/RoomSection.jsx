import React from 'react'
import { FcRating } from 'react-icons/fc'

const RoomSection = ({card}) => {
    const {details , image , price , title ,rating} = card || {}
    const {guests , bedrooms , baths , amenities , cancellationPolicy} = details || {}
    const {amount , currency ,unit} = price || {}
    const {stars , reviews} = rating
  return (
    <div className='flex border-2 rounded-md gap-5 p-3'>
        <div className="">
            <img className='w-52 rounded-xl' src={image} alt="" />
        </div>
        <div className="flex flex-col justify-around">
            <p className='text-lg font-bold'>{title}</p>
            <div className="flex gap-2">
                <p>Guests : {guests}</p>
                <p>bedrooms : {bedrooms}</p>
                <p>baths : {baths}</p>
            </div>
            <p>{amenities}</p>
            <p>{cancellationPolicy}</p>
            <div className="flex gap-3">
                <p className='flex items-center'><FcRating></FcRating>{stars}/Review:({reviews})</p>
                <p className='text-lg font-bold text-red-500'>Price: ${amount}/{unit}</p>
            </div>
        </div>
    </div>
  )
}

export default RoomSection