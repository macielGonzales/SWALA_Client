import React, { useContext } from "react";
import "../../../src/App.css";
import Footer from "../../components/Footer-ContactUs/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { GlobalState } from "../../GlobalState";


function Products() {
  const state = useContext(GlobalState)
  return (
    <div>
      <Navbar />
       Hola gente
      <Footer />
    </div>
  );
}

export default Products;
