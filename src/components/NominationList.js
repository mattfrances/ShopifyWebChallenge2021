import React from 'react';
import NominatedMovie from './NominatedMovie';
import MovieEmptyState from './EmptyStates/MovieEmptyState';

const NominationList = ({ nominated, removeNomination }) => {
  const onClickRemoveNomination = (imdbID) => {
    removeNomination(imdbID);
  };

  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-lg font-bold dark:text-white">
        My nominations
        <span className="ml-1.5 text-sm text-gray-400 font-normal">{`${
          5 - nominated.length
        } remaining`}</span>
      </h2>
      {nominated.length === 0 && (
        <MovieEmptyState message={'Nominate a movie to see it here.'} />
      )}
      <div className="bg-white divide-y rounded dark:bg-gray-800">
        {nominated.map((movie) => {
          return (
            <NominatedMovie
              key={movie.imdbID}
              imdbID={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
              description={movie.Plot}
              onClickRemoveNomination={onClickRemoveNomination}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NominationList;
