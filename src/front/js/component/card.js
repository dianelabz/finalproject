import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="img-fluid" src={props.image} />
        <h5 className="card-title">Título: {props.data.title}</h5>
        <h6 className="rating">Rating IMDB: {props.data.imdbRating}</h6>
        <h6 className="streaming">Netflix</h6>
        <p className="tagline">{props.data.tagline}</p>
        <Link to="/detalle/">
          <a className="btn btn-dark">+ Detalles</a>
        </Link>
        <a href="#" className="btn btn-dark">
          Ver ahora
        </a>
      </div>
    </div>
  );
};
