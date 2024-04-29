import React from 'react';

function Movie({ movies }) {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available</div>;
  }

  const rutaBaseImagenes = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div class="album py-5 bg-light">
    <div class="container"></div>
    <ul>
        {movies.map(movie => {
          return (
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={rutaBaseImagenes + movie.backdrop_path} alt="Descripción de la imagen" />
          <title>{movie.id}</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">{movie.title}</text>

          <div class="card-body">
              <p class="card-text">{movie.overview}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
          );
        })}
      </ul>
    
    </div>
  );
}

export default Movie;