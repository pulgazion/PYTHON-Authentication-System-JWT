import React, { useState, useContext } from "react";
import { Button, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../../styles/home.css";
import logoIntroUrl from "../../img/logointro.png"
export const Home = () => {

  return (
      <div className="App justify-content-center">
            <h1>Bienvenido a mi página</h1>
            <p>
              Esto es un ejemplo para demostrar cómo se puede usar la Autenticación JWT con Flask y React.
            </p>
            <img src={logoIntroUrl}  width="350" height="300" alt="Logo de la página" />
            <div className="d-flex m-4">
        <Link to="/login">
        <Button variant="primary" size="lg" className="m-2">Iniciar sesión</Button>
        </Link>
        <Link to="/signin">
        <Button variant="primary" size="lg" className="m-2">Registrarse</Button>
        </Link>
      </div>
      </div>
    );
  }