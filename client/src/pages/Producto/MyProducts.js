import React, { useContext } from "react";
import "../../../src/App.css";
import Footer from "../../components/Footer-ContactUs/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";
import { format } from 'date-fns'

const Products = ()=> {
  const state = useContext(GlobalState)
  const [pedidos] = state.userApi.pedidos

  return (
    <>
        <Navbar />
        <section className="section-pagetop bg">
          <div className="container">
            <h2 className="title-page">Mis pedidos</h2>
            <nav>
              <h5>Tienes {pedidos.length} pedidos confirmados.</h5>
          </nav>
          </div>
        </section>
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
                          <th scope="col" width="120">
                            Fecha
                          </th>
                          <th scope="col" className="text-right" width="200">
                            {" "}
                          </th>
                        </tr>
                      </thead>
                      {pedidos.map((pedido) => (
                        <tbody>
                          <tr>
                            <td>
                              <figure className="itemside">
                                <div className="aside">
                                  <img
                                    src={pedido.cart[0].imagen.url}
                                    className="img-sm"
                                  />
                                </div>
                                <figcaption className="info">
                                  <Link
                                    to={`/detail/${pedido._id}`}
                                    className="title text-dark"
                                  >
                                    {" "}
                                    {pedido.cart[0].nombre}
                                  </Link>
                                  <p className="text-muted small">
                                    {pedido.cart[0].descripcion}
                                  </p>
                                </figcaption>
                              </figure>
                            </td>
                            <td>
                              <div>
                                <div
                                  className="btn btn-light"
                                >
                                 
                                </div>
                                <span>{pedido.cart[0].quantity}</span>
                                <div
                                  className="btn btn-light mr-2"
                                >
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="price-wrap">
                                <var className="price">
                                  s/. {pedido.cart[0].precio * pedido.cart[0].quantity}
                                </var>
                                <small className="text-muted">
                                  s/. {pedido.precio} cada uno{" "}
                                </small>
                              </div>
                            </td>
                            <td>
                              <div className="price-wrap">
                                <span>
                                  {format(
                                    new Date(pedido.fechaEntrega),
                                    'dd/MM/yyyy h/m'
                                  )}
                                </span>
                                
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>

                    <div className="card-body border-top">
                      <a href="/products" className="btn btn-light">
                        {" "}
                        <i className="fa fa-chevron-left"></i> Ir al catalogo
                      </a>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </section>
        <Footer />
    </>
  );
}

export default Products;
