
import Movies from '@/components/movies'
import React from 'react'

async function page({params:{start}}:{
    params:{start:string}
}) {

     
  return (
   <Movies start={start}/>
  )
}

export default page