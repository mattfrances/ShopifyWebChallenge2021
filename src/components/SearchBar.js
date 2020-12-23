import React from 'react';
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';

const SearchBar = () => {
  // const handleSearch = (value) => {
  //   if (value === '') return;

  //   axios
  //     .get(API_URL, {
  //       params: {
  //         apikey: process.env.REACT_APP_OMDb_API_KEY,
  //         type: 'movie',
  //         s: value,
  //         page: 1,
  //       },
  //     })
  //     .then((result) => setMovieList(result.data.Search));
  // };

  return (
    <div class="mt-7 h-12 relative rounded shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span class="text-gray-200">
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
        type="text"
        name="search"
        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent block w-full h-full px-12 placeholder-gray-200 rounded-md"
        placeholder="Search for a movie by title..."
      />
    </div>
  );
};

export default SearchBar;
