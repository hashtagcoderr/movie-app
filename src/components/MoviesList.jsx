import React, { useState } from "react";
import { allMovies } from "../data/movies";

export const MoviesList = () => {
  //   const [movies, setMovies] = useState([1, 232, 23]);

  // CONDITIONAL RENDERING

  //   if (movies.length === 0) {
  //     return <i>No Movies Found...</i>;
  //   } else {
  //     return <h1>Here is the movies list: 1,2,3,23,2,</h1>;
  //   }

  return (
    <>
      <h1>All Movies</h1>
      <div className="movie-wrapper">
        {allMovies.map((movie) => {
          return (
            <div className="movie-item">
              <h4 style={{
                  color: 'orangered',
                  fontSize: '32px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: 'black',
                  textAlign: 'center'
              }}>{movie.title}</h4>
              <p>{movie.director}</p>
              <p>Rating: {movie.rating}</p>
              <button>View Details</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
