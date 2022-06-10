import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-warning bg-warning">
      <div className="container-fluid">
        <h1 className="navbar-brand text-dark fs-4">Watchpo</h1>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Qué quieres ver?"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark" type="submit">
            🎞️
          </button>
        </form>
      </div>
    </nav>
  );
};
