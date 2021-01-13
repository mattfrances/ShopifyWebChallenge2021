import React from 'react';
import moviePosterPlaceholder from '../assets/images/moviePosterPlaceholder.png';

const Movie = ({
  imdbID,
  title,
  year,
  image,
  onClickMovieNominate,
  disabled,
}) => {
  const addPlacehodlerImage = (event) => {
    event.target.src = moviePosterPlaceholder;
  };

  return (
    <div className="flex p-5 dark:border-gray-900">
      <div className="w-40 min-w-24 max-h-40 flex">
        <img
          className="max-h-40 min-w-24 object-contain"
          src={image}
          onError={(event) => addPlacehodlerImage(event)}
          alt="Searched movie poster."
        />
      </div>
      <div className="flex flex-col justify-around w-full pl-2.5">
        <h3 className="dark:text-white">
          <span className="font-bold">{title}</span> ({year})
        </h3>
        <button
          className="flex justify-center items-center rounded px-2.5 py-1 w-28 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:opacity-50"
          disabled={disabled}
          onClick={() => onClickMovieNominate(imdbID)}
        >
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          Nominate
        </button>
      </div>
    </div>
  );
};

export default Movie;
