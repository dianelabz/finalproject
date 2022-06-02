import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Watchpo</a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Qué quieres ver?"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            🎞️
          </button>
        </form>
      </div>
    </nav>
  );
};
