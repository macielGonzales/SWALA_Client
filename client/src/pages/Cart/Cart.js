import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
import PaypalButton from "./PaypalButton";
import { Link } from "react-router-dom";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer-ContactUs/Footer";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userApi.cart;
  const [fechaEntrega, setFechaEntrega] = state.userApi.fechaEntrega;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(Date.now());
  const addFechaEntrega = state.userApi.addFechaEntrega;
  const [modalConfirm, setModalConfirm] = useState(false)
  const [productName, setProductName] = useState(null)
  const [id, setId] = useState(null)
  const [open2, setOpen2] = useState(true);


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

  const removeProduct = (id, name) => {
    setId(id)
    setProductName(name)
    setModalConfirm(true)
  };

  const tranSuccess = async (payment) => {
    console.log(payment);
    const { paymentID: pago_id, address: direccion } = payment;

    await axios.post(
      "/api/pago",
      { cart, pago_id, direccion, fechaEntrega, pagoTotal: total },
      {
        headers: { Autorizacion: token },
      }
    );

    setCart([]);
    addCart([]);
    setFechaEntrega();
    addFechaEntrega();

    //setOpen2(true);
    alert("Tu pedido ha sido realizado con exito");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleCloseModal = () => {
    setModalConfirm(false)
  };

  const handleDeleteProductCart = () => {
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });

    setCart([...cart]);
    addCart(cart);
    setModalConfirm(true)
  }

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  return (
    <>
      <Navbar />
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Carrito de compra</h2>
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
          {" "}Carrito vacio{" "}
          <br />
          <a href="/products" className="btn btn-primary">Continuar comprando</a>
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
                                    src={product.images[0].url}
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
                                  S/.{(product.precio).toString().indexOf('.') == -1 ? (product.precio) * (product.quantity) + ".00" : product.precio * product.quantity}
                                </var>
                                <small className="text-muted">
                                  S/.{(product.precio).toString().indexOf('.') == -1 ? (product.precio) + ".00" : product.precio} cada uno {" "}
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
                                onClick={() => removeProduct(product._id, product.nombre)}
                              >
                                <i class="fas fa-trash"></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>

                    <div className="card-body border-top">
                      <div>
                        <Button
                          variant="outlined"
                          className="btn btn-primary float-md-right"
                          onClick={handleClickOpen}
                        >
                          Entregaﾠ
                          <AccessTimeFilledIcon />
                        </Button>
                        <BootstrapDialog
                          onClose={handleClose}
                          aria-labelledby="customized-dialog-title"
                          open={open}
                        >
                          <BootstrapDialogTitle
                            id="customized-dialog-title"
                            onClose={handleClose}
                          >
                            Entrega del pedido
                          </BootstrapDialogTitle>
                          <DialogContent dividers>
                            <Typography gutterBottom>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <Stack spacing={3}>

                                  <DateTimePicker
                                    label="Dia y hora"
                                    // inputFormat="dd/MM/yyyy"
                                    value={value}
                                    minDate={new Date()}
                                    // minTime={}
                                    // minTime={new Date('11:30 AM')}
                                    inputFormat="dd/MM/yyyy hh:mm aa"
                                    onChange={handleChange}
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />

                                </Stack>
                              </LocalizationProvider>
                            </Typography>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              autoFocus
                              onClick={() => addFechaEntrega(value)}
                            >
                              Guardar
                            </Button>

                          </DialogActions>
                        </BootstrapDialog>
                      </div>
                      <a href="/products" className="btn btn-light">
                        {" "}
                        <i className="fa fa-chevron-left"></i> Continuar
                        comprando
                      </a>
                    </div>
                  </div>

                  <div className="alert alert-success mt-3">
                    <p className="icontext">
                      <i className="icon text-success fa fa-truck"></i>
                      Delivery gratis
                    </p>
                  </div>
                </main>
                <aside className="col-md-3">
                  <div className="card mb-3">
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label>¿ Cupon de descuento ?</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              placeholder="Codigo de cupon"
                            />
                            <span className="input-group-append">
                              <button className="btn btn-primary">Añadir</button>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <dl className="dlist-align">
                        <dt>Precio total:</dt>
                        {/* <dd className="text-right">s/. {total}</dd> */}
                        <dd className="text-right">
                          S/.{(total).toString().indexOf('.') == -1 ? `${total}.00` : total}
                        </dd>
                      </dl>
                      <dl className="dlist-align">
                        <dt>Descuento:</dt>
                        <dd className="text-right">s/. 0.00</dd>
                      </dl>
                      <dl className="dlist-align">
                        <dt>IGV:</dt>
                        <dd className="text-right">Incluido en el precio total</dd>
                      </dl>
                      <dl className="dlist-align">
                        <dt>Total:</dt>
                        {/* <dd className="text-right  h5">
                          <strong>s/. {total}</strong>
                        </dd> */}
                        <dd className="text-right  h5">
                          <strong>S/.{(total).toString().indexOf('.') == -1 ? `${total}.00` : total}</strong>

                        </dd>
                      </dl>
                      <hr />
                      <p className="text-center mb-3">
                        {
                          <PaypalButton total={Math.round(total / 3.9)} tranSuccess={tranSuccess} />
                        }
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
          <Dialog
            open={modalConfirm}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Eliminar producto del carrito"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {`¿Esta seguro que desea eliminar  el producto`} {' '}<strong>{`${productName}`}</strong>{'?'}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal}>No</Button>
              <Button onClick={handleDeleteProductCart} >Si, eliminar</Button>
            </DialogActions>
          </Dialog>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
              <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                Tu pedido ha sido realizado con exito
              </Alert>
            </Snackbar>
          </Stack>
        </div>

      )}
      <Footer />
    </>
  );
};

export default Cart;
