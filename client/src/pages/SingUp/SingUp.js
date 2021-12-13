import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../pages/SingUp/SingUp.css";

export const SingUp = () => {
  const [user, setUser] = useState({
    email: "",
    contraseña: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/usuario/login", { ...user });

      localStorage.setItem("firstLogin", true);
      window.location.href = "/products";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div class="main-wrap-singUp">
      <div class="outer-wrap-singUp">
        <div class="img-wrap-singUp">
          <img src="https://res.cloudinary.com/dr9mltwij/image/upload/v1635914728/LADLOLA/6_inenc4.png" alt=""/>
        </div>
        <div class="form-wrap-singUp">
          <h1>Iniciar Sesion</h1>
          <p>Bienvenido a la pasteleria "Los alfajores de la Lola"</p>
          <form onSubmit={handleLoginSubmit} class="form-singUp">
            <br></br>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInput}
            />
            <br></br>
            <input
              type="password"
              name="contraseña"
              required
              autoComplete="on"
              placeholder="Contraseña"
              value={user.contraseña}
              onChange={handleInput}
            />
            <br></br>
            <button type="submit" class="btn-singUp">
              Iniciar sesion
            </button>
          </form>

          <div class="social-login-singUp">
            <a href="#"><i class="fab fa-google"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div class="bottom-text-singUp" className="breadcrumb-item" >
            <p>
              ¿Aun no tienes una cuenta?  <a href="/register"><strong>Registrar</strong></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
