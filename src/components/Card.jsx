import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import backup from "../assests/images/backup.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({movie}) => {
    const{id,original_title,overview,poster_path}=movie;
    const image=poster_path ?`https://image.tmdb.org/t/p/w300/${poster_path}`: {backup};
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div data-aos="fade-up" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <Link to={`/movie/${id}`}>
      <img
        className="rounded-t-lg"
        src={image}
        alt=""
      />
    </Link>
    <div className="p-5">
      <Link to={`/movie/${id}`}>
        <h5 data-aos="fade-left" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {original_title}
        </h5>
      </Link>
      <p data-aos="fade-left" className="mb-3 font-normal text-gray-700 dark:text-gray-400">
       {overview}
      </p>
      
    </div>
  </div>
  
  )
}

export default Card