import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Login</h1>
      </div>
      <div className="input mt-5">
        <input className="form-control me-2" placeholder="Correo" />
        <input className="form-control me-2" placeholder="Contraseña" />
        <button class="btn btn-dark" type="submit">
          Login
        </button>
        <button className="btn btn-online-dark" type="submit">
          Recuperar contraseña
        </button>
      </div>
    </div>
  );
};
