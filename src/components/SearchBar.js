import React from 'react';
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';

const SearchBar = ({ updateMovieList }) => {
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
        updateMovieList(result.data.Search);
        document.getElementById('searchInput').blur();
      });
  };

  return (
    <div className="mt-7 h-12 relative rounded shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-200">
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
        type="text"
        name="search"
        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent block w-full h-full px-12 placeholder-gray-200 rounded-md"
        placeholder="Search for a movie by title..."
        onKeyDown={(event) => handleSearch(event)}
      />
    </div>
  );
};

export default SearchBar;
