import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const HandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Login</h1>
      </div>
      <div className="input mt-5">
        <form onSubmit={(e) => actions.onSubmit(e, user, history)}>
          <input
            name="email"
            type="text"
            value={user.email}
            onChange={HandleChange}
            className="form-control me-2"
            placeholder="Correo"
          />
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={HandleChange}
            className="form-control me-2"
            placeholder="Password"
          />
          <button class="btn btn-dark" type="submit">
            Login
          </button>
          <button className="btn btn-online-dark" type="submit">
            Recuperar contraseña
          </button>
        </form>
      </div>
    </div>
  );
};
