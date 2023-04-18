import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export function Loginpage() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginEmail = event.target.elements.loginEmail.value;
    const loginPassword = event.target.elements.loginPassword.value;
    const loginData = {
      email: loginEmail,
      password: loginPassword,
    };
    console.log(loginData);

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        alert("Has iniciado sesión");
        const body = await response.json();
        console.log(body);
        actions.setToken(body.jwt_token);
        navigate("/private");
      } else if (response.status == 400) {
        alert("Se produjo un error, verifica tus datos");
        throw new Error(response.status);
      } else {
        alert("Se produjo un error");
        throw new Error(response.status);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" className="form-control" id="loginEmail" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
