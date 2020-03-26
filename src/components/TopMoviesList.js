import React from 'react';

const TopMoviesList = (props) => {
  const movies = props.movies;
  const listItems = movies.map((movie) => (
    <li key={movie.id}>
      <img src={'http://image.tmdb.org/t/p/w92/' + movie.poster_path} alt='poster'/>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </li>
  ));
  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default TopMoviesList;