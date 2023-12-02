import React from 'react'

export default function({image, country, place, date, about}){
    return(
        <div className='card-container'>
            <div className='image-container'>
                <img src = {process.env.PUBLIC_URL + '/images/' + image}/>
            </div>
            <div className='card_info'>
                <div className='location'>
                <img src = {process.env.PUBLIC_URL + '/images/location.svg'} className='locimg'/> 
                <p className='country'>{country}</p>
                <p className='gmaps'>View on Google Maps</p>
                </div>
                <h1>{place}</h1>
                <div className='description'>
                    <p className='date'>{date}</p>
                    <p className='desc'>{about}</p>
                </div>
            </div>
        </div>
    )
}