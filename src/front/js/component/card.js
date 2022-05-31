import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/detalle/">
          <a className="btn btn-primary">+ Detalles</a>
        </Link>
        <a href="#" className="btn btn-primary">
          Por ver
        </a>
      </div>
    </div>
  );
};
