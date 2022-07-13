import React, { useContext } from "react";
import "../../../src/App.css";
import Footer from "../../components/Footer-ContactUs/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";
import { IconButton, Icon } from "@mui/material";
import moment from "moment";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import foto from "../../assets/images/dataempty.png";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Button from "@mui/material/Button";
import { format } from "date-fns";
import "./MyProducts.css";

const Products = () => {
  const state = useContext(GlobalState);
  const [pedidos] = state.userApi.pedidos;


  let arrPrecio = []

  pedidos.map((pedido, index) => {
    //console.log("🚀 ~ file: MyProducts.js ~ line 32 ~ pedidos.map ~ pedido", pedido)
    console.log("🚀 ~ file: MyProducts.js ~ line 32 ~ pedidos.map ~ pedido.cart:", pedido.cart)
    let precio = pedido.cart[0].precio * pedido.cart[0].quantity
    console.log("🚀 ~ file: MyProducts.js ~ line 28 ~ pedidos.map ~ precio", precio)

    pedido.cart.map((cart, index) => {
      // console.log("🚀 ~ file: MyProducts.js ~ line 28 ~ pedido.cart.map ~ index", index)
      //console.log("🚀 ~ file: MyProducts.js ~ line 29 ~ pedido.cart[index].map ~ cart", cart)
    })
  })

  arrPrecio.map((precio, inde) => {

    pedidos.map((value, index) => {

    })

  })

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
                      <th scope="col" width="130">
                        N° Pedido
                      </th>
                      <th scope="col" width="130">
                        Cantidad(unidad)
                      </th>
                      <th scope="col" width="130">
                        Precio total(S/.)
                      </th>
                      <th scope="col" width="130">
                        Fecha de envio
                      </th>
                      <th scope="col" width="130">
                        Direccion
                      </th>
                      <th scope="col" width="130">
                        Estado
                      </th>
                      <th scope="col" width="130">
                        Accion
                      </th>
                    </tr>
                  </thead>
                  {
                    pedidos.length > 0
                      ?
                      (
                        <>
                          {
                            pedidos.map((pedido, index) => (
                              <tbody>
                                <tr key={index}>
                                  <td>
                                    #{(index += 1)}
                                  </td>
                                  <td>
                                    <div>
                                      <span>{pedido.cart.length}</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="price-wrap">
                                      <var className="price">
                                        S/.{pedido.pagoTotal}
                                        {/* S/.{(pedido.cart[0].precio).toString().indexOf('.') == -1 ? ((pedido.cart[0].precio * pedido.cart[0].quantity) + '.00') : pedido.cart[0].precio * pedido.cart[0].quantity} */}
                                      </var>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="price-wrap">
                                      <span>
                                        {moment(pedido.fechaEntrega).format(
                                          "DD/MM/yyyy - hh:mm a"
                                        )}
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="price-wrap">
                                      <p className="text-muted small">
                                        <span>{pedido.direccion.line1}</span>
                                        { }-{ }
                                        <span>{pedido.direccion.line2}</span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="price-wrap">
                                      <p className="text-muted small">
                                        <span>{pedido.estado}</span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <Box
                                      sx={{
                                        "& button": { m: 1 },
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <div>
                                        <IconButton size="large">
                                          <Icon color="primary">visibility</Icon>
                                        </IconButton>
                                      </div>
                                    </Box>
                                  </td>
                                </tr>
                              </tbody>
                            ))
                          }
                        </>
                      )
                      :
                      (
                        <tbody>
                          <tr>
                            <td>
                              <div alignItems="center">
                                <Box
                                  component="span"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    p: 5,
                                  }}
                                >
                                  <div className="aish">
                                    <img src={foto} sizes=" 100px, 20px" />
                                  </div>

                                  <Typography color="GrayText" variant="subtitle1">
                                    {" "}
                                    No tiene ningun pedido{" "}
                                  </Typography>
                                </Box>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      )
                  }
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
};

export default Products;
