
import React from 'react'

function MovieComponent({imgSrc,title}:{title:string,imgSrc:string}) {
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