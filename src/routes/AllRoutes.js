import {Routes,Route} from "react-router-dom"
import { MovieDetail,MovieLists,Search,PageNotFound } from "../pages"

import React from 'react'

const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
        <Route path="/" element={<MovieLists apiPath="movie/now_playing" title="Home"/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/movies/popular" element={<MovieLists apiPath="movie/popular" title="Popular"/>}/>
        <Route path="/movies/top" element={<MovieLists apiPath="movie/top_rated"title="Top"/>}/>
        <Route path="/movies/upcoming" element={<MovieLists apiPath="movie/upcoming"title="Upcoming"/>}/>
        <Route path="/search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotFound />}/>

        <Route/>

    </Routes>
    
    </div>
  )
}

export default AllRoutes