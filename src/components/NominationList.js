import React from 'react';
import NominatedMovie from './NominatedMovie';
import MovieEmptyState from './EmptyStates/MovieEmptyState';
import { toast } from 'react-toastify';

const NominationList = ({ nominated, removeNomination }) => {
  const onClickRemoveNomination = (imdbID) => {
    removeNomination(imdbID);
  };

  const handleShareNominations = () => {
    const queryString =
      `${process.env.REACT_APP_WEB_HOST}?` +
      nominated.map((movie) => `nominated=${movie.imdbID}`).join('&');
    navigator.clipboard.writeText(queryString);
    toast('Nominations copied to clipboard!');
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold dark:text-white">
          My nominations
          <span className="ml-1.5 text-sm text-gray-400 font-normal">{`${
            5 - nominated.length
          } remaining`}</span>
        </h2>
        <button
          className="rounded px-1.5 py-0.5 text-blue-600 hover:text-blue-500 focus:outline-none disabled:text-gray-300"
          disabled={nominated.length === 0}
          onClick={() => handleShareNominations()}
        >
          Share
        </button>
      </div>
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
