import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Navbar } from "../component/navbar";

export const Inicio = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getInicio();
  }, []);
  let array = [
    "https://pics.filmaffinity.com/100_metros-170169519-large.jpg",
    "https://es.web.img3.acsta.net/pictures/16/10/21/09/40/411243.jpg",
    "https://pics.filmaffinity.com/4_latas-120821497-mmed.jpg",
    "https://www.bolsamania.com/cine/wp-content/uploads/2016/12/cine-espa%C3%B1ol-critica-7-a%C3%B1os-netflix.jpg",
    "https://pics.filmaffinity.com/A_trav_s_de_mi_ventana-294379519-large.jpg",
    "https://es.web.img3.acsta.net/pictures/20/07/06/21/58/1809007.jpg",
    "https://pics.filmaffinity.com/Alel-349668550-large.jpg",
    "https://pics.filmaffinity.com/Amalgama-294988289-mmed.jpg",
  ];
  return (
    <>
      <div className="row">
        <h1 className="titulo">Películas y Series</h1>
        <div className="scrolling-wrapper row flex-row flex-wrap mt-3 pb-3 pt-2 mb-3">
          {store.inicio.map((inicio, i) => (
            <div className="col-md-3">
              <Card data={inicio} image={array[i]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
