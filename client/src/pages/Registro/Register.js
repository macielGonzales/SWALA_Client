import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

export const Register = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/usuario/register", { ...user });

      localStorage.setItem("firstLogin", true);
      window.location.href = "/products";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div class="main-wrap-register">
      <div class="outer-wrap-register">
        <div class="img-wrap-register">
          <img
            src="https://res.cloudinary.com/dr9mltwij/image/upload/v1635914728/LADLOLA/6_inenc4.png"
            alt=""
          />
        </div>
        <div class="form-wrap-register">
          <h1>Registrar</h1>
          <p>Bienvenido a la pasteleria "Los alfajores de la Lola"</p>
          <form onSubmit={handleRegisterSubmit} class="form-register">
            <br></br>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Nombre"
              value={user.nombre}
              onChange={handleInput}
            />
            <br></br>
            <input
              type="email"
              name="email"
              required
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
            <button type="submit" class="btn-register">
              Registrar
            </button>
          </form>

          <div class="social-login-register">
            <a href="#">
              <i class="fab fa-google"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
          <div class="bottom-text-register">
            <p>
              ¿Ya tienes una cuenta? <a href="/sign-up"> Iniciar Sesion</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
