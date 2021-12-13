import React from "react";
import "../../../src/App.css";
import Footer from "../../components/Footer-ContactUs/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";

function Products() {
  return (
    <div>
      <Navbar />
      <ProductCatalog />
      <Footer />
    </div>
  );
}

export default Products;
