import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [nominated, setNominated] = useState([]);

  // const handleMovieListUpdate = (list) => {
  //   setMovieList(list);
  // };

  // const nominateMovie = (movie) => {
  //   if (nominated.length >= 5) {
  //     message.error(
  //       'You have reached your nominated movies limit. Please remove some to add more.'
  //     );
  //     return;
  //   }

  //   setNominated((oldNominated) => [...oldNominated, movie]);
  // };

  return (
    <div className="container mx-auto lg:max-w-screen-lg">
      {/* Titles */}
      <div className="w-full pt-10 px-5">
        <h1 className="text-4xl m-0 font-bold">The Shoppies.</h1>
        <h1 className="text-4xl m-0 font-normal">Pick your top five.</h1>
        {/* Search bar */}
        <SearchBar />
      </div>
      {/* Lists */}
      <div className="mt-7 mb-8 px-5 space-y-7 md:space-y-0 md:space-x-7 md:flex">
        {/* Movie List */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-bold">Search results for: "moonlight"</h2>
          <MovieList />
        </div>
        {/* Nomination List */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-bold">My nominations</h2>
          <div className="bg-gray-300 h-20 p-5">2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
