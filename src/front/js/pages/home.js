import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Card
            imagen="https://as01.epimg.net/meristation/imagenes/2021/11/29/noticias/1638183338_794994_1638183479_sumario_normal.jpg"
            informacion="Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso."
            titulo="Spider-Man No Way Home"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://es.web.img3.acsta.net/pictures/22/04/07/11/43/1839314.jpg"
            informacion="El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza enorme."
            titulo="Doctor Strange the Madness of Multiverse"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://i.pinimg.com/originals/01/92/a9/0192a94fe3326f632b28690cc7ee7273.jpg"
            informacion="Secuela de Thor: Ragnarok en la que el Dios del Trueno contará con Lady Thor como acompañante."
            titulo="Thor: Love and Thunder"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg"
            informacion="Tony Stark es un inventor de armamento brillante que es secuestrado en el extranjero. Sus captores son unos terroristas que le obligan a construir una máquina destructiva pero Tony se construirá una armadura para poder enfrentarse a ellos y escapar."
            titulo="Iron Man"
          />
        </div>
        <div className="col-md-3">
          <Card
            imagen="https://www.universalpictures-latam.com/tl_files/content/movies/northman/northman_header-mobile.jpg"
            informacion="El príncipe Amleth está a punto de convertirse en hombre pero, en ese momento, su tío asesina brutalmente a su padre y secuestra a la madre del niño. Dos décadas después, Amleth es un vikingo que tiene la misión de salvar a su madre."
            titulo="The Northman"
          />
        </div>
      </div>
    </div>
  );
};
