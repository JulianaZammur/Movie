import React from 'react';
import Movie from './Movie';
import { useState } from 'react';

function Sensei() {
  const [movieData, setMovieData] = useState(null);
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getMoviesData();
  };

  const getMoviesData = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDdmNTA3MWNiMjA4NTEyMWE4NGYyNzlhNjRlNDQ2YyIsInN1YiI6IjY2MjA0MTYyZWNhZWY1MDEzMGY4ODA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._isHD7Vt7Ku-6m705nLUiZCPTePwgJpMucfRtnwJQSQ'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
          setMovieData(response.results); // asigna los resultados al estado movieData
          console.log(movieData);
        })
        .catch(err => console.error(err));
  };

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleReset = () => {
    setMovieName("");
    setMovieData(null);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <div>
          <button type="submit">Get movies!</button>
          <button type="reset" onClick={handleReset}>Reset</button>
        </div>
    </form>
    
    {movieData && movieData[0] && (
      <Movie 
        movies={movieData}
      />
    )}
    </>
  );
}

export default Sensei;