import React from 'react';

function Movie({ movies }) {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <div key={movie.id}>
              <li>ID: {movie.id}, Title: {movie.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Movie;