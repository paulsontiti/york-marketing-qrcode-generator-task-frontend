"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieComponent from "./movie";

export type MovieType ={
  title:string,
  imgSrc:string
}

function Movies({random}:{random:string}) {
  const [movies,setMovies] = useState<any[]>([]);


  useEffect(() => {
    (async () => {
      // const res = await axios.get(`http://localhost:3001/movies/${random}`);
      const res = await axios.get(`https://york-marketing-movie.vercel.app/movies/${random}`);
    setMovies(res.data);
    })();
  }, []);
  return <div className="grid grid-cols-4 gap-4">
    {
      movies.map((movie)=>(
        <MovieComponent title={movie.title} imgSrc={movie.images[3] || movie.images[1] || movie.images[2]} key={movie.id}/>
      ))
    }
  </div>;
}

export default Movies;
