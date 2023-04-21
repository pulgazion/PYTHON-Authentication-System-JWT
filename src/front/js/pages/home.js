import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logoIntroUrl from "../../img/logointro.png"
import "../../styles/home.css";

export const Home = () => {
  const { actions, store } = useContext(Context);

  return (
      <div className="App justify-content-center">
            <h1>Bienvenido a mi página</h1>
            <p>
              Esto es un ejemplo para demostrar cómo se puede usar la Autenticación JWT con Flask y React.
            </p>
            <img src={logoIntroUrl}  width="350" height="300" alt="Logo de la página" />
            <div className="d-flex m-4">
            {!store.jwt_token ? (
              <Link to="/signin">
                  <button className="btn btn-primary">
                      Registrarse
                  </button>
              </Link>
          ) : null}
      </div>
      </div>
    );
  }