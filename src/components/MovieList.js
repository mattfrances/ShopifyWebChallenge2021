import React from 'react';
import Movie from './Movie';

const MovieList = ({ movieList, nominateMovie, nominated }) => {
  const onClickMovieNominate = (imdbID) => {
    nominateMovie(imdbID);
  };

  return (
    <div className="bg-white divide-y rounded">
      {movieList.map((movie) => {
        return (
          <Movie
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            image={movie.Poster}
            onClickMovieNominate={onClickMovieNominate}
            disabled={nominated.some(
              (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
            )}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
