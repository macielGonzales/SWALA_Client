import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
import PaypalButton from "./PaypalButton";
import { Link } from "react-router-dom";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer-ContactUs/Footer";

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userApi.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.precio * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addCart = async (cart) => {
    await axios.patch(
      "/usuario/addCart",
      { cart },
      {
        headers: { Autorizacion: token },
      }
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    addCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    addCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addCart(cart);
    }
  };

  const tranSuccess = async (payment) => {
    console.log(payment);
    const { paymentID: pago_id, address: direccion } = payment;

    await axios.post(
      "/api/pago",
      { cart, pago_id, direccion },
      {
        headers: { Autorizacion: token },
      }
    );

    setCart([]);
    addCart([]);
    alert("Tu pedido ha sido realizado con exito");
  };

  return (
    <>
      <Navbar />
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Shopping cart</h2>
          <nav>
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/products">Catalogo</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/ofertas">Ofertas</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center", fontSize: "4rem" }}>
          {" "}
          Carrito vacio{" "}
        </h2>
      ) : (
        <div>
          <section className="section-content padding-y">
            <div className="container">
              <div className="row">
                <main className="col-md-9">
                  <div className="card">
                    <table className="table table-borderless table-shopping-cart">
                      <thead className="text-muted">
                        <tr className="small text-uppercase">
                          <th scope="col">Producto</th>
                          <th scope="col" width="120">
                            Cantidad
                          </th>
                          <th scope="col" width="120">
                            Precio
                          </th>
                          <th scope="col" className="text-right" width="200">
                            {" "}
                          </th>
                        </tr>
                      </thead>
                      {cart.map((product) => (
                        <tbody>
                          <tr>
                            <td>
                              <figure className="itemside">
                                <div className="aside">
                                  <img
                                    src={product.imagen.url}
                                    className="img-sm"
                                  />
                                </div>
                                <figcaption className="info">
                                  {/* <a href={`/detail/${product._id}`} className="title text-dark">
                                    {product.nombre}
                                  </a> */}
                                  <Link
                                    to={`/detail/${product._id}`}
                                    className="title text-dark"
                                  >
                                    {" "}
                                    {product.nombre}
                                  </Link>
                                  <p className="text-muted small">
                                    {/* Size: XL, Color: blue, <br /> Brand: Gucci */}
                                    {product.descripcion}
                                  </p>
                                </figcaption>
                              </figure>
                            </td>
                            <td>
                              <div>
                                <div
                                  className="btn btn-light"
                                  onClick={() => increment(product._id)}
                                >
                                  <i class="fas fa-plus-square"></i>
                                </div>
                                <span>{product.quantity}</span>
                                <div
                                  className="btn btn-light mr-2"
                                  onClick={() => decrement(product._id)}
                                >
                                  <i class="fas fa-minus-square"></i>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="price-wrap">
                                <var className="price">
                                  s/. {product.precio * product.quantity}
                                </var>
                                <small className="text-muted">
                                  s/. {product.precio} cada uno{" "}
                                </small>
                              </div>
                            </td>
                            <td className="form-control">
                              <a
                                data-original-title="Save to Wishlist"
                                title=""
                                href="/#"
                                className="btn btn-light mr-2"
                                data-toggle="tooltip"
                              >
                                {" "}
                                <i className="fa fa-heart"></i>
                              </a>
                              <div
                                className="btn btn-light btn-round"
                                onClick={() => removeProduct(product._id)}
                              >
                                <i class="fas fa-trash"></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>

                    <div className="card-body border-top">
                      <a href="/#" className="btn btn-primary float-md-right">
                        {" "}
                        Make Purchase <i className="fa fa-chevron-right"></i>{" "}
                      </a>
                      <a href="/products" className="btn btn-light">
                        {" "}
                        <i className="fa fa-chevron-left"></i> Continuar
                        comprando
                      </a>
                    </div>
                  </div>

                  <div className="alert alert-success mt-3">
                    <p className="icontext">
                      <i className="icon text-success fa fa-truck"></i> Free
                      Delivery within 1-2 weeks
                    </p>
                  </div>
                </main>
                <aside className="col-md-3">
                  <div className="card mb-3">
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label>Have coupon?</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              placeholder="Coupon code"
                            />
                            <span className="input-group-append">
                              <button className="btn btn-primary">Apply</button>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <dl className="dlist-align">
                        <dt>Total price:</dt>
                        <dd className="text-right">s/. {total}</dd>
                      </dl>
                      <dl className="dlist-align">
                        <dt>Descuento:</dt>
                        <dd className="text-right">s/. 0</dd>
                      </dl>
                      <dl className="dlist-align">
                        <dt>Total:</dt>
                        <dd className="text-right  h5">
                          <strong>s/. {total}</strong>
                        </dd>
                      </dl>
                      <hr />
                      <p className="text-center mb-3">
                        <PaypalButton total={total} tranSuccess={tranSuccess} />
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
