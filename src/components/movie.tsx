import Image from 'next/image'
import React from 'react'
import { MovieType } from './movies'

function MovieComponent({imgSrc,title}:MovieType) {
  return (
    <div>
       <img src={imgSrc} alt={title} style={{
        width:200,height:200
       }}/>
    <div>
        <p>{title}</p>
    </div>
    </div>
  )
}

export default MovieComponent