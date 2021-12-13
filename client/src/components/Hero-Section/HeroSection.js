import React from "react";
import { Button } from "../Button-SignUp/Button";
import "./HeroSection.css";
import "../../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Pasteleria fina</h1>
      <p>
        Especialista en la preparación de postres artesanales, utilizando los
        mejores ingredientes y frutos frescos. La satisfacción de nuestros
        clientes es nuestra prioridad.
      </p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Catalogo
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Ver mas <i className="fas fa-arrow-down"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
