import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'https://www.omdbapi.com/';

const SearchBar = ({ updateSearchValue, updateMovieList }) => {
  const handleSearch = (event) => {
    if (
      event.keyCode !== 13 ||
      event.target.value === null ||
      event.target.value.match(/^ *$/) !== null
    ) {
      return;
    }

    const value = event.target.value;
    axios
      .get(API_URL, {
        params: {
          apikey: process.env.REACT_APP_OMDb_API_KEY,
          type: 'movie',
          s: value,
          page: 1,
        },
      })
      .then((result) => {
        updateMovieList(result.data);
        updateSearchValue(value);
        document.getElementById('searchInput').blur();
      })
      .catch(() => {
        toast.error('There was an error searching for a movie');
      });
  };

  return (
    <div className="mt-7 h-12 relative rounded shadow-sm">
      <div className="absolute inset-y-0 left-0 ml-1 pl-2 flex items-center pointer-events-none dark:bg-gray-800">
        <span className="text-gray-200 dark:text-gray-700">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
      <input
        id="searchInput"
        type="search"
        name="search"
        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent block w-full h-full px-12 placeholder-gray-200 rounded-md dark:bg-gray-800 dark:placeholder-gray-700 dark:text-white"
        placeholder="Search for a movie by title..."
        onKeyDown={(event) => handleSearch(event)}
      />
    </div>
  );
};

export default SearchBar;
