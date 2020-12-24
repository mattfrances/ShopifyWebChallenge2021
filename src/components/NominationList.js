import React from 'react';
import NominatedMovie from './NominatedMovie';

const NominationList = ({ nominated, removeNomination }) => {
  const onClickRemoveNomination = (imdbID) => {
    removeNomination(imdbID);
  };

  return (
    <>
      <h2 className="text-lg font-bold">
        My nominations{' '}
        <span className="text-sm text-gray-300 font-normal">{`${
          5 - nominated.length
        } remaining`}</span>
      </h2>
      <div className="bg-white divide-y rounded">
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
    </>
  );
};

export default NominationList;
