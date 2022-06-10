import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Recuperar = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({
    email: "",
    newPassword: "",
    repitPassword: "",
  });

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Recuperar contraseña</h1>
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
            name="newPassword"
            type="newPassword"
            value={user.newPassword}
            className="pt-2 form-control me-2"
            placeholder="Nueva Contraseña"
          />
          <input
            name="repitPassword"
            type="repitPassword"
            value={user.repitPassword}
            className="pt-2 form-control me-2"
            placeholder="Repetir contraseña"
          />
          <button
            class="btn btn-warning"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
