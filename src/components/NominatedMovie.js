import React from 'react';
import moviePosterPlaceholder from '../assets/images/moviePosterPlaceholder.png';

const Movie = ({
  imdbID,
  title,
  year,
  image,
  description,
  onClickRemoveNomination,
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
          alt="Nominated movie poster."
        />
      </div>
      <div className="flex flex-col justify-between w-full pl-2.5">
        <h3 className="dark:text-white">
          <span className="font-bold">{title}</span> ({year})
        </h3>
        <p className="text-sm truncate-3-lines -mt-2 text-gray-400">
          {description}
        </p>
        <button
          className="flex justify-center items-center rounded px-2.5 py-1 w-28 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          onClick={() => onClickRemoveNomination(imdbID)}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Movie;
