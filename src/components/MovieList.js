import React from 'react';
import MagnifyEmptyState from './EmptyStates/MagnifyEmptyState';
import Movie from './Movie';
import Paginator from './Paginator';

const MovieList = ({
  searchValue,
  totalResults,
  currentPage,
  handlePageChange,
  movieList,
  nominateMovie,
  nominated,
}) => {
  const onClickMovieNominate = (imdbID) => {
    nominateMovie(imdbID);
  };

  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-lg font-bold dark:text-white">{`Search results for: "${
        searchValue === null ? '' : searchValue
      }"`}</h2>
      {searchValue === null && movieList.length === 0 && (
        <MagnifyEmptyState
          message={'Get started by searching for a movie by title.'}
        />
      )}
      {searchValue !== null && movieList.length === 0 && (
        <MagnifyEmptyState
          message={"Couldn't find that movie! Try something else."}
        />
      )}
      <div className="bg-white divide-y rounded dark:bg-gray-800">
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
      {movieList.length > 0 && (
        <Paginator
          totalResults={totalResults}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default MovieList;
