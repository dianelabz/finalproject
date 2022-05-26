import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Navbar } from "../component/navbar";
import { Titulo } from "../component/titulo";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getHome();
  }, []);
  return (
    <div className="container-fluid">
      <div className="titulo">
        <h1 className="text-black" style={{}}>
          Peliculas y Series
        </h1>
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <ul>
            {store.home.map(function (object) {
              return <Card object={object} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
