import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <>
      <div className="bg-white divide-y rounded">
        <Movie />
        <Movie />
        <Movie />
        {/* <div class="p-5 grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 ">
            <img className="h-24" src={TODELETEIMG} />
          </div>
          <div class="col-span-2 ">2</div>
          <div class="row-span-2 col-span-2 ">3</div>
        </div> */}
      </div>
      {/* {movies &&
        movies.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              movie={movie}
              nominateMovie={nominateMovie}
            />
          );
        })} */}
      {/* <h3>Search results</h3>
      {movies.map((movie) => {
        return (
          <li key={movie.imdbID}>
            {`${movie.Title} (${movie.Year})`}
            <Button onClick={() => nominateMovie(movie)}>Nominate</Button>
          </li>
        );
      })} */}
    </>
  );
};

export default MovieList;
