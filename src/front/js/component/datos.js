import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Datos = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberPassword: "",
    name: "",
    lastName: "",
  });

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Registro</h1>
      </div>
      <div className="input mt-5">
        <form onSubmit={(e) => actions.onSubmit(e, user, history)}>
          <input
            name="email"
            type="text"
            value={user.email}
            className="pt-2 form-control me-2"
            placeholder="Correo"
          />
          <input
            name="password"
            type="password"
            value={user.password}
            className="pt-2 form-control me-2"
            placeholder="Contraseña"
          />
          <input
            name="remember password"
            type="password"
            value={user.rememberPassword}
            className="pt-2 form-control me-2"
            placeholder="Recordar contraseña"
          />
          <input
            name="name"
            type="name"
            value={user.name}
            className="pt-2 form-control me-2"
            placeholder="Nombre"
          />
          <input
            name="last name"
            type="name"
            value={user.lastName}
            className="pt-2 form-control me-2"
            placeholder="Apellido"
          />
          <button class="btn btn-dark" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};
