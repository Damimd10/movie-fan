import React, { useEffect, useState } from 'react';

import {
  BY_TITLE_ENDPOINT,
  ENDPOINT,
  FILTER_BY_POPULARITY,
  URL,
} from './constants';

import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [selectedStars, setSelectedStars] = useState(0);

  const onFilterChange = index =>
    setSelectedStars(index === selectedStars ? 0 : index);

  useEffect(() => {
    fetch(
      `${URL}/${ENDPOINT}?api_key=${process.env.REACT_APP_MOVIE_KEY}&${FILTER_BY_POPULARITY}`
    )
      .then(response => response.json())
      .then(toJson => setMovieList(toJson.results));
  }, []);

  const searchMovie = title => {
    fetch(
      `${URL}/${BY_TITLE_ENDPOINT}?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${title}`
    )
      .then(response => response.json())
      .then(toJson => setMovieList(toJson.results));
  };

  const fromRate = selectedStars * 2 - 2;
  const toRate = selectedStars * 2;
  const movies =
    selectedStars > 0
      ? movieList.filter(
          m => m.vote_average > fromRate && m.vote_average < toRate
        )
      : movieList;

  return (
    <div className="App">
      <SearchBar
        searchMovie={searchMovie}
        stars={selectedStars}
        whenFilterChange={onFilterChange}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
