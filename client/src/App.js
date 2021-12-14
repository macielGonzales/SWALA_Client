import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Products from "./pages/Producto/Products";
import { SingUp } from "./pages/SingUp/SingUp";
import { Register } from "./pages/Registro/Register";
import Cart from "./pages/Cart/Cart";
import { Services } from "./pages/Services/Services";
import Oferta from "./pages/Oferta/Oferta";
import Detail from "./pages/Detail/Detail";
import MyProducts from "./pages/Producto/MyProducts";

function App() {
  // const state = useContext(GlobalState);
  // const [isLogged] = state.userApi.isLogged;

  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SingUp} />
          <Route path="/register" exact component={Register} />
          <Route path="/products" component={Products} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/ofertas" exact component={Oferta} />
          <Route path="/myproducts" exact component={MyProducts} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
