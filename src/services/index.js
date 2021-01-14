import axios from 'axios';

const getMovieByIMDbID = async (imdbID) =>
  await axios.get(process.env.REACT_APP_OMDb_API_URL, {
    params: {
      apikey: process.env.REACT_APP_OMDb_API_KEY,
      type: 'movie',
      i: imdbID,
      plot: 'short',
    },
  });

const getMoviesByTitle = async (title, pageNumber) =>
  await axios.get(process.env.REACT_APP_OMDb_API_URL, {
    params: {
      apikey: process.env.REACT_APP_OMDb_API_KEY,
      type: 'movie',
      s: title,
      page: pageNumber,
    },
  });

export { getMovieByIMDbID, getMoviesByTitle };
