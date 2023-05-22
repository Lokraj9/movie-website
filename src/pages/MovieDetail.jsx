import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import useTitle from '../hooks/useTitle'
import Backup from "../assests/images/backup.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const MovieDetail = () => {
  const params=useParams();
  console.log(params);
  const [movie,setMovie]=useState({});
  const pageTitle=useTitle(movie.title)
  const image=movie.poster_path ?`https://image.tmdb.org/t/p/w300/${movie.poster_path}`: {Backup};
  useEffect(()=>{
    async function fetchMovie(){
      const response=await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=53ac16606cecb5952701231308beabae`);
      const json=await response.json();
      setMovie(json);
      console.log(json)
    }
    fetchMovie();
   
      AOS.init();
    
  },[])
  
  return (
    <section className='flex justify-around flex-wrap py-5'>
      <div className='max-w-sm' data-aos="fade-right" data-aos-delay="300" >
        <img className='rounded' src={image} alt={movie.title}/>
      </div>
      <div className='max-w-2xl text-gray-600 text-lg dark:text-white' data-aos="fade-left" data-aos-delay="300">
        <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movie.title}</h1>
        <p className='my-4'>{movie.overview}</p>
       
          {movie.genres ? (<p className='my-7 flex flex-wrap gap-2'>
          {movie.genres.map((genre)=>(
             <span className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2' key={genre.id}>{genre.name}</span>
          ))}
          </p>
          ):""}
          
          <div className="flex items-center">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="  text-gray-900  dark:text-white">{movie.vote_count} reviews</span>
          </div>
          <p className='my-4'>
            <span className='mr-2 font-bold'>Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>
          <p className='my-4'>
            <span className='mr-2 font-bold'>Budget:</span>
            <span>{movie.budget}</span>
          </p>
          <p className='my-4'>
            <span className='mr-2 font-bold'>Revenue:</span>
            <span>{movie.revenue} min.</span>
          </p>
          <p className='my-4'>
            <span className='mr-2 font-bold'>Release Date:</span>
            <span>{movie.release_date} min.</span>
          </p>
          <p className='my-4'>
            <span className='mr-2 font-bold'>IMDB Code:</span>
            <a href={`https.imdb.com/title/${movie.id}`} target='_blank' rel='noreferrer'>{movie.imdb_id}</a>
          </p>
          

        
      </div>
    </section>
  )
}

export default MovieDetail