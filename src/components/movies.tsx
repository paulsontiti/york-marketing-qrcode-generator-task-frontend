"use client";

import axios from "axios";
import React, { useEffect } from "react";

function Movies({start}:{start:string}) {
  useEffect(() => {
    (async () => {
      const movies = await axios.get(`http://localhost:3001/movies/${start}`);
      console.log(movies);
    })();
  }, []);
  return <div>movies</div>;
}

export default Movies;
