
import Movies from '@/components/movies'
import React from 'react'

 async function page({params}:
  {params: Promise<{ random: string }>
 }) {

      // asynchronous access of `params.id`.
  const { random } = await params
  return (
   <div className='flex items-center justify-center m-10'>
    <Movies random={random}/>
   </div>
  )
}

export default page