import React from 'react';

import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
