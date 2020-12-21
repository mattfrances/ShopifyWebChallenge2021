import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [movieList, setMovieList] = useState(null);

  const handleMovieListUpdate = (list) => {
    console.log(list);
    setMovieList(list);
  };

  return (
    <div>
      <div className="titlesWrapper">
        <h2>The Shoppies.</h2>
        <h3>Nominate your top five movies.</h3>
      </div>
      <div className="searchBarWrapper">
        <SearchBar handleMovieListUpdate={handleMovieListUpdate} />
      </div>
      <div className="movieListWrapper">
        <ul>
          {movieList &&
            movieList.map((movie) => {
              return <li>{`${movie.Title} ${movie.Year}`}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
