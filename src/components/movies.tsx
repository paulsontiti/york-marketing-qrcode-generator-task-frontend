"use client";

import axios from "axios";
import React, { useEffect } from "react";

function Movies({random}:{random:string}) {
  useEffect(() => {
    (async () => {
      const movies = await axios.get(`http://localhost:3001/movies/${random}`);
      console.log(movies);
    })();
  }, []);
  return <div>movies</div>;
}

export default Movies;
