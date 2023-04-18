import React from "react";
import { useNavigate } from "react-router-dom";

export function SigninPage() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signInName = event.target.elements.signInName.value;
    const signInEmail = event.target.elements.signInEmail.value;
    const signInPassword = event.target.elements.signInPassword.value;
    const signInData = {
      name: signInName,
      email: signInEmail,
      password: signInPassword,
    };
    console.log(signInData);

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/signin", {
        method: "POST",
        body: JSON.stringify(signInData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 201) {
        alert("Usuario creado con exito");
        const body = await response.json();
        console.log(body);
        navigate("/login");
      } else {
        alert("Se produjo un error al crear el usuario");
        throw new Error(response.status);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" className="form-control" id="signInName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" className="form-control" id="signInEmail" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="signInPassword"
            required
          />
        </div>
          <div className="form-group mb-3">
            <button type="submit" className="btn btn-primary">
              Crear Usuario
            </button>
          </div>
      </form>
    </div>
  );
}
