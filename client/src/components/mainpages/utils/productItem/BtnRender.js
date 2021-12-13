import React from "react";
import { Link } from "react-router-dom";
import './ProductItem.css'

const BtnRender = ({product}) => {
  return (
    <div className="row_btn">
      <Link id="btn_buy" to="#!">
        Comprar
      </Link>
      <Link id="btn_view" to={`/detail/${product._id}`}>
        Detalles
      </Link>
    </div>
  );
};

export default BtnRender;
