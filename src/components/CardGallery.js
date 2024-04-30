import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import GenreMovies from './GenreMovies';

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

  return (
    <Container>
      <h1>Lista de Géneros</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>
            <GenreMovies genre={genre} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CardGallery;