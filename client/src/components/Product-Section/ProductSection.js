import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "./CardProduct";
import "./ProductSection.css";

export const ProductSection = () => {
  return (
    <>
      <div className="product_container">
        <div className="box_product_1">
          <h1> Productos </h1>
          <p justify="center">
            Brindamos productos de gran variedad, utilizando los mejores
            ingredientes y frutos frescos para satisfacer las necesidades y
            exigencias de nuestros clientes.
            <Link to="/products" className="product_link">
              Ver más
            </Link>
          </p>
        </div>
        <div className="box_product_2">
          <div className="product">
            <CardProduct
              src="https://res.cloudinary.com/dr9mltwij/image/upload/v1634593559/LADLOLA/Bocadito_Alfajor_xiffgg.jpg"
              path="/products"
            />{" "}
          </div>
          <div className="product">
            <CardProduct
              src="https://res.cloudinary.com/dr9mltwij/image/upload/v1635913551/LADLOLA/tortaQuincea%C3%B1era_eh3hml.png"
              path="/products"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
