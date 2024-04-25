import React from 'react';

function Movie({ movies }) {
    return (
      <div>
        <ul>
        {movies.map(movie => {
          return (
            <div>
              <li>ID: {movie.id}, Title: {movie.title}</li>
            </div>
          );
        })}
        </ul>
      </div>
    );
}

export default Movie;