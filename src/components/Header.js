import React from 'react'

export default function Header(){
    return(
        <div className='header'>
            <img src = {process.env.PUBLIC_URL + '/images/globe.svg'}/>
            <h1>my travel journal.</h1>
        </div>
    )
}