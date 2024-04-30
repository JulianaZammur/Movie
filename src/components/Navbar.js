import React from 'react';
import "../stylesheets/Navbar.css";

function Navbar({ handleSubmit, handleChange }) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
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