
import Movies from '@/components/movies'
import React from 'react'

 function page({ params }:{params:{random:string}}) {

      // asynchronous access of `params.id`.
  const { random } = params
  return (
   <Movies random={random}/>
  )
}

export default page