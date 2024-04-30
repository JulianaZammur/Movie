import React, { useState, useEffect } from 'react';


const rutaBaseImagenes = 'https://image.tmdb.org/t/p/w500/';

const GenreMovies = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesByGenre(genre.id);
  }, [genre.id]);

  const fetchMoviesByGenre = async (genreId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=es`, {
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
    <>
      <h2>{genre.name}</h2>
      {movies.length > 0 && (
        <div className="album py-5 bg-light">
          <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {movies.map(movie => (
                <div key={movie.id} className="col">
                <div className="card shadow-sm h-100">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={rutaBaseImagenes + movie.backdrop_path} alt="Movie Poster" />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="badge bg-warning text-white"><span>IMDb {movie.vote_average}</span></small>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenreMovies;