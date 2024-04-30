import React from 'react';

function Movie({ movies }) {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available</div>;
  }

  const rutaBaseImagenes = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {movies.map(movie => (
            <div key={movie.id} className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={rutaBaseImagenes + movie.backdrop_path} alt="Movie Poster" />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;