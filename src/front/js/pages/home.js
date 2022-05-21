import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Navbar } from "../component/navbar";
import { Titulo } from "../component/titulo";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        <Titulo titulo="Disney" />
        <div className="col-md-3">
          <Card
            imagen="https://lumiere-a.akamaihd.net/v1/images/image_1e5c5703.jpeg?region=0%2C0%2C540%2C810"
            titulo="Avengers-Endgame"
            boton="Favoritos ❤"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://es.web.img3.acsta.net/pictures/22/04/07/11/43/1839314.jpg"
            titulo="Doctor Strange the Madness of Multiverse"
            boton="Favoritos ❤"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://es.web.img2.acsta.net/r_1280_720/pictures/21/07/13/11/50/0247103.jpg"
            titulo="Loki"
            boton="Favoritos ❤"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://static.posters.cz/image/750/posters/iron-man-3-solo-i14496.jpg"
            titulo="Iron Man 3"
            boton="Favoritos ❤"
          />
        </div>
        <div className="col-md-3">
          <Titulo titulo="HBO" />
          <Card
            imagen="https://cdn.europosters.eu/image/750/posters/game-of-thrones-season-7-night-king-i49129.jpg"
            titulo="Game of Thrones"
            boton="Favoritos ❤"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://w0.peakpx.com/wallpaper/587/697/HD-wallpaper-chernobyl-hbo-tv-series-disaster-poster-nuclear-power-plant-overcast.jpg"
            titulo="Chernobyl"
            boton="Favoritos ❤"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://flxt.tmsimg.com/assets/p21917022_b_v13_ac.jpg"
            titulo="The Staircase"
            boton="Favoritos ❤"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://images.moviefit.me/t/o/50746-dune.jpg"
            titulo="Dune"
            boton="Favoritos ❤"
          />
        </div>
      </div>
    </div>
  );
};
