import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

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
      <div className="input text-center mt-5">
        <form onSubmit={(e) => actions.onSubmit(e, user, history)}>
          <input
            name="email"
            type="text"
            value={user.email}
            onChange={HandleChange}
            className="form-control me-2"
            placeholder="Correo"
            style={{
              width: "500px",
              margin: "0",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "300px",
            }}
          />
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={HandleChange}
            className="form-control me-2"
            placeholder="Contraseña"
            style={{
              width: "500px",
              marginLeft: "300px",
            }}
          />
          <Link to="/registro/">
            <button
              className="btn btn-warning"
              type="submit"
              style={{
                padding: "5px",
                marginTop: "10px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              Registro
            </button>
          </Link>
          <button
            class="btn btn-warning"
            type="submit"
            style={{
              padding: "5px",
              marginTop: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            Login
          </button>
          <Link to="/recuperar/">
            <a href="#" className="link">
              Recuperar contraseña
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};
