import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div>
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className="row-poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* container -> posters */}
    </div>
  );
}

export default Row;
