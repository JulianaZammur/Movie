import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';


const CardGallery = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQ2YmM3Y2ZhYWUyMjU2Yjc3NzcyZWI4NzcyZGY3MSIsInN1YiI6IjY2MmY3MzU5YzNhYTNmMDEyM2ZkY2I3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HJyk3UYSYvbNxwtoPL-sDwKw_fI48ey29amg8Nt8Mlo', 
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los géneros de la API');
      }

      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  const [movies, setMovies] = useState([]);
  const genreId = 28; 

  useEffect(() => {
    fetchMoviesByGenre();
  }, []);

  const fetchMoviesByGenre = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?fbd6bc7cfaae2256b77772eb8772df71&with_genres=${genreId}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQ2YmM3Y2ZhYWUyMjU2Yjc3NzcyZWI4NzcyZGY3MSIsInN1YiI6IjY2MmY3MzU5YzNhYTNmMDEyM2ZkY2I3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HJyk3UYSYvbNxwtoPL-sDwKw_fI48ey29amg8Nt8Mlo', 
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener las películas por género');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h1>Lista de Géneros</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}
                
    <div>
    {movies.map(movie => (
          <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
          </div>
        </div>
        ))}
    </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardGallery;