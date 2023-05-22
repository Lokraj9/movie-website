import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { Card } from '../components'
import { useSearchParams } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q");


  const {data:movies}=useFetch(apiPath,queryTerm)
  const pageTitle= useTitle(`Search Result for ${queryTerm}`)
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length ===0?`No result Found for '${queryTerm}'`:`Result for '${queryTerm}' `}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>
          ))}
          

        </div>
      </section>
    </main>
  )
}

export default Search