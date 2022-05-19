import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <img className="img-fluid" src={props.imagen} />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.informacion}</p>
      </div>
    </div>
  );
};