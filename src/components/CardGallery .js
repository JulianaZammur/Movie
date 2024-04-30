import React from 'react';
import { Container } from 'react-bootstrap';
import Movie from './Movie';


const CardGallery = () => {
 
  const moviesByGenre = [
    {
      genre: 'Comedy',
      movies: [
        { title: 'Movie 1', description: 'Description 1', imageUrl: 'https://example.com/movie1.jpg' },
        { title: 'Movie 2', description: 'Description 2', imageUrl: 'https://example.com/movie2.jpg' },
       
      ]
    },
    {
      genre: 'Thriller',
      movies: [
        { title: 'Movie 3', description: 'Description 3', imageUrl: 'https://example.com/movie3.jpg' },
        { title: 'Movie 4', description: 'Description 4', imageUrl: 'https://example.com/movie4.jpg' },
       
      ]
    },
    
  ];

  return (
    <Container>
      {moviesByGenre.map((genreData, index) => (
        <Movie key={index} sectionTitle={genreData.genre} movies={genreData.movies} />
      ))}
    </Container>
  );
};

export default CardGallery;