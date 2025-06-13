
import Movies from '@/components/movies'
import React from 'react'

 async function page({ params }:{params:{random:string}}) {

      // asynchronous access of `params.id`.
  const { random } = await params
  return (
   <Movies random={random}/>
  )
}

export default page