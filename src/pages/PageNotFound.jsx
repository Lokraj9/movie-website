import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  page  from '../assests/images/pagenotfound.png';

const PageNotFound = () => {
  useEffect(()=>{
    document.title=`Page Not Found/Movie`
  })
  
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'> 404 ,Oops!</p>
          <div className='max-w-lg'>
          <img className='rounded' src={page} alt='404'/>
          </div>
        </div>
        <div className='flex justify-center my-4 '>
         <Link to="/"> <button className='w-60 text-white text-xl bg-blue-500 hover:bg-blue-800 transition delay-200 ease-in-out rounded-lg p-3 m-2 font-medium'>Back To Home</button></Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound