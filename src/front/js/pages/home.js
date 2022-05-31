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
    <>
      <div className="row">
        <h1 className="titulo">Películas y Series</h1>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
          {store.home.map((home, i) => (
            <div className="col-md-3">
              <Card
                data={home}
                image="https://m.media-amazon.com/images/M/MV5BYjBlZGZkODEtNjUxMC00NWY1LWJkYWUtYzY2NDIxZjkwZmQyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
