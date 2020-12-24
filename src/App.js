import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import NominationList from './components/NominationList';
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [nominated, setNominated] = useState([]);

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const updateMovieList = (list) => {
    setMovieList(list);
  };

  const nominateMovie = (imdbID) => {
    if (nominated.length >= 5) {
      console.log('ERROR: reached nomination limit'); // TODO - convert this to alert message
      return;
    } else if (nominated.some((movie) => movie.imdbID === imdbID)) {
      console.log('ERROR: movie already nominated'); // TODO - convert this to alert message
      return;
    }

    axios
      .get(API_URL, {
        params: {
          apikey: process.env.REACT_APP_OMDb_API_KEY,
          type: 'movie',
          i: imdbID,
          plot: 'short',
        },
      })
      .then((result) => {
        setNominated((oldNominated) => [...oldNominated, result.data]);
      })
      .catch((error) => {
        console.log('ERROR'); // TODO - replace this with an alert message
      });
  };

  const removeNomination = (imdbID) => {
    setNominated(nominated.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <div className="container mx-auto lg:max-w-screen-lg">
      {/* Titles */}
      <div className="w-full pt-10 px-5">
        <h1 className="text-4xl m-0 font-bold">The Shoppies.</h1>
        <h1 className="text-4xl m-0 font-normal">Pick your top five.</h1>
        {/* Search bar */}
        <SearchBar
          updateSearchValue={updateSearchValue}
          updateMovieList={updateMovieList}
        />
      </div>
      {/* Lists */}
      <div className="mt-7 mb-8 px-5 space-y-7 md:space-y-0 md:space-x-7 md:flex">
        {/* Movie List */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-bold">{`Search results for: "${searchValue}"`}</h2>
          <MovieList
            movieList={movieList}
            nominateMovie={nominateMovie}
            nominated={nominated}
          />
        </div>
        {/* Nomination List */}
        <div className="w-full md:w-1/2">
          <NominationList
            nominated={nominated}
            removeNomination={removeNomination}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
