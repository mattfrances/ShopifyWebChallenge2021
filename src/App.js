import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import NominationList from './components/NominationList';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { ThemeProvider } from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

const API_URL = 'https://www.omdbapi.com/';

function App() {
  const [searchValue, setSearchValue] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [nominated, setNominated] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem('nominated') &&
      JSON.parse(localStorage.getItem('nominated')).length !== 0
    ) {
      setNominated(JSON.parse(localStorage.getItem('nominated')));
    }
  }, []);

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const updateMovieList = (movieListData) => {
    if (movieListData.Error) {
      setMovieList([]);
      setTotalResults(0);
      setCurrentPage(0);
    } else {
      setMovieList(movieListData.Search);
      setTotalResults(movieListData.totalResults);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (pageNumber) => {
    axios
      .get(API_URL, {
        params: {
          apikey: process.env.REACT_APP_OMDb_API_KEY,
          type: 'movie',
          s: searchValue,
          page: pageNumber,
        },
      })
      .then((result) => {
        if (result.data.Error) {
          setMovieList([]);
        } else {
          setMovieList(result.data.Search);
        }
      })
      .catch(() => {
        toast.error('There was an error searching for a movie');
      });
    setCurrentPage(pageNumber);
  };

  const nominateMovie = (imdbID) => {
    if (nominated.length >= 5) {
      toast.error("You've reached your nomination limit");
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
        const updatedNominations = [...nominated, result.data];
        localStorage.setItem('nominated', JSON.stringify(updatedNominations));
        setNominated(updatedNominations);
      })
      .catch(() => {
        toast.error('Movie could not be nominated');
      });
  };

  const removeNomination = (imdbID) => {
    const updatedNominations = nominated.filter(
      (movie) => movie.imdbID !== imdbID
    );
    localStorage.setItem('nominated', JSON.stringify(updatedNominations));
    setNominated(updatedNominations);
  };

  return (
    <ThemeProvider>
      <div className="container mx-auto lg:max-w-screen-lg">
        <div className="w-full pt-10 px-5">
          <div className="flex flex-row justify-between items-start">
            <div>
              <h1 className="text-4xl m-0 font-bold dark:text-white">
                The Shoppies.
              </h1>
              <h1 className="text-4xl m-0 font-normal dark:text-white">
                Pick your top five.
              </h1>
            </div>
            <ToggleTheme />
          </div>
          <SearchBar
            updateSearchValue={updateSearchValue}
            updateMovieList={updateMovieList}
          />
        </div>
        <div className="mt-7 mb-8 px-5 space-y-7 md:space-y-0 md:space-x-7 md:flex">
          <MovieList
            searchValue={searchValue}
            totalResults={totalResults}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            movieList={movieList}
            nominateMovie={nominateMovie}
            nominated={nominated}
          />
          <NominationList
            nominated={nominated}
            removeNomination={removeNomination}
          />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
