"use client";

import axios from "axios";
import React, { useEffect } from "react";

function Movies({random}:{random:string}) {
  useEffect(() => {
    (async () => {
      const movies = await axios.get(`https://york-marketing-movie.vercel.app/movies/${random}`);
      console.log(movies);
    })();
  }, []);
  return <div>movies loading</div>;
}

export default Movies;
