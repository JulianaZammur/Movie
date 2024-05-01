import React from 'react';
import "../stylesheets/Navbar.css";
import '@fortawesome/fontawesome-free/css/all.css';
function Navbar({ handleSubmit, handleChange }) {
  return (
    
    <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <i class="fa-solid fa-film"></i>
          PeliculApp
        </a>
        <div className="collapse navbar-collapse" id="navbarsExample02">
          <form className="d-flex ms-auto" onSubmit={handleSubmit}>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;