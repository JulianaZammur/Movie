import React from 'react';
import { Container, Carousel, Card, Button } from 'react-bootstrap';

const MovieCarousel = ({ movies }) => {
  return (
    <Carousel>
      {movies.map((movie, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={movie.imageUrl}
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const MovieGallery = ({ movies }) => {
  return (
    <Container>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie, index) => (
          <div key={index} className="col">
            <Card>
              <Card.Img variant="top" src={movie.imageUrl} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  {movie.description}
                </Card.Text>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

const MovieSection = ({ sectionTitle, movies }) => {
  return (
    <div>
      <h2>{sectionTitle}</h2>
      <MovieCarousel movies={movies} />
      <MovieGallery movies={movies} />
    </div>
  );
};

const CardGallery = () => {
  // Ejemplo de datos de películas por sección
  const comedyMovies = [
    { title: 'Movie 1', description: 'Description 1', imageUrl: 'https://example.com/movie1.jpg' },
    { title: 'Movie 2', description: 'Description 2', imageUrl: 'https://example.com/movie2.jpg' },
    // Agrega más películas de comedia aquí
  ];

  const thrillerMovies = [
    { title: 'Movie 3', description: 'Description 3', imageUrl: 'https://example.com/movie3.jpg' },
    { title: 'Movie 4', description: 'Description 4', imageUrl: 'https://example.com/movie4.jpg' },
    // Agrega más películas de thriller aquí
  ];

  // Agrega más secciones de películas según sea necesario
  
  return (
    <div>
      <MovieSection sectionTitle="Comedy" movies={comedyMovies} />
      <MovieSection sectionTitle="Thriller" movies={thrillerMovies} />
      {/* Agrega más secciones aquí */}
    </div>
  );
};

export default CardGallery;