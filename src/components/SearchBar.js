import React from 'react';
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';

const SearchBar = (props) => {
  const handleSearch = (event) => {
    if (event.key !== 'Enter') return;

    const searchValue = event.target.value;
    axios
      .get(API_URL, {
        params: {
          apikey: process.env.REACT_APP_OMDb_API_KEY,
          type: 'movie',
          s: searchValue,
          page: 1,
        },
      })
      .then((result) => props.handleMovieListUpdate(result.data.Search));
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onKeyPress={(event) => handleSearch(event)}
    />
  );
};

export default SearchBar;
