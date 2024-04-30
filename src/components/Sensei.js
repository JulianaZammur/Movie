import { useState } from 'react';
import Movie from './Movie';
import CardGallery from './CardGallery.js';
import Navbar from './Navbar.js';


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

    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1&language=es`, options)
      .then(response => response.json())
      .then(response => {
        setMovieData(response.results); // asigna los resultados al estado movieData
        console.log(movieData);
      })
      .catch(err => console.error(err));
  };

  const handleChange = (event) => {
    setMovieName(event.target.value); 
    if (event.target.value === "") {
      handleReset();
    } else {
      getMoviesData();
    }
  };

  const handleReset = () => {
    setMovieName("");
    setMovieData(null);
  };

  return (
    <>
      <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
      {movieData && movieData[0] ? (
        <div className="movies-container">
          <Movie movies={movieData} />
        </div>
      ) : (
        <CardGallery />
      )}

    </>
  );
}

export default Sensei;