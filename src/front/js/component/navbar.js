import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { actions, store } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-light">
			<div className="container">
				<Link to="/" className="mr-auto">
					<span className="navbar-primary">Inicio</span>
				</Link>
				<div className="ml-auto">
					{!store.jwt_token ? (
						<Link to="/login">
							<button className="btn btn-primary">
								Iniciar Sesión
							</button>
						</Link>
						) : (
						<Link to="/login">
							<button
								onClick={actions.removeToken}
								className="btn btn-primary"
							>
								Cerrar Sesión
							</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};	