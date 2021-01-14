import axios from 'axios';

const getMovieByIMDbID = (imdbID) =>
  axios.get(process.env.REACT_APP_OMDb_API_URL, {
    params: {
      apikey: process.env.REACT_APP_OMDb_API_KEY,
      type: 'movie',
      i: imdbID,
      plot: 'short',
    },
  });

export { getMovieByIMDbID };
