import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import memeUrl from "../../img/meme.jpg";

export function PrivateView () {

    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (store.jwt_token == null) {
            alert("Por favor inicia sesión con tus datos")
            navigate("/login");
            return;
        }
        actions.getProfile()
    }, [store.jwt_token]);

    return (
        <div>
        {
          !store.jwt_token ?
          <h1>Bienvenidos</h1>
          :
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src={memeUrl} width="300" height="400" style={{ objectFit: "contain" }}></img>
        </div>         
        }
      </div>
    );
  };