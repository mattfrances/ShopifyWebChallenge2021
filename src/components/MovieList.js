import React from 'react';
import Movie from './Movie';

const MovieList = ({ movieList }) => {
  return (
    <div className="bg-white divide-y rounded">
      {movieList.map((movie) => {
        return (
          <Movie title={movie.Title} year={movie.Year} image={movie.Poster} />
        );
      })}
    </div>
  );
};

export default MovieList;
