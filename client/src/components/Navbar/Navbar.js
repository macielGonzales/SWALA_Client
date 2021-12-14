import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import Inventory2 from "@mui/icons-material/Inventory2"
import axios from "axios";
import "./NavBar.css";

function Navbar() {
  //   hooks usestate
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const state = useContext(GlobalState);
  // console.log(state)
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;
  const [isNameUser, setIsNameUser] = state.userApi.isNameUser;
  const [isNameUserAvatar, setIsNameUserAvatar] =
    state.userApi.isNameUserAvatar;
  const [cart] = state.userApi.cart;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickM = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutUser = async () => {
    await axios.get("/usuario/logout");
    localStorage.clear();
    setIsLogged(false);
    window.location.href = "/";
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4">
              <a href="/products" className="brand-wrap">
                <img
                  alt="ladlolalogo"
                  src="https://res.cloudinary.com/dr9mltwij/image/upload/v1635965970/LADLOLA/logo_small_nhtupi.png"
                />
              </a>
            </div>
            <div className="col-lg-6 col-sm-12">
              <form action="/#" className="buscar">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-search"> </i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="widgets-wrap float-md-right">
                <div className="widget-header mr-3">
                  <a href="/cart" className="icon icon-sm rounded-circle border">
                    <i className="fa fa-shopping-cart"> </i>
                  </a>
                  <span className="badge badge-pill notify">
                    {" "}
                    {cart.length}{" "}
                  </span>
                </div>
                <div className="widget-header icontext">
                  {isLogged ? (
                    <IconButton className="icon icon-sm rounded-circle border"
                    onClick={handleClickM}
                  >
                    {/* <i className="fa fa-user">{isNameUserAvatar}</i> */}
                    <Avatar
                      className="fa fa-user"
                      sx={{ width: 32, height: 32 }}
                      className="mayuscula"
                    >
                      {isNameUserAvatar}
                    </Avatar>
                  </IconButton>
                  ) : (
                      <IconButton className="icon icon-sm rounded-circle border"
                        onClick={handleClickM}
                      >
                        <i className="fa fa-user"></i>
                        {/* <Avatar
                          className="fa fa-user"
                          sx={{ width: 32, height: 32 }}
                          className="mayuscula"
                        >
                          {isNameUserAvatar}
                        </Avatar> */}
                      </IconButton>
                  )}

                  <div className="texto">
                    {isLogged ? (
                      <span className="text-muted">
                        ㅤㅤ¡Bienvenido {isNameUser} !
                      </span>
                    ) : (
                      <span className="text-muted"> ㅤㅤ¡Bienvenido! </span>
                    )}
                    <div>
                      {isLogged ? (
                        ""
                      ) : (
                        <div>
                          <a href="/sign-up"> Iniciar sesion </a> |
                          <a href="/register"> Registrar </a>
                        </div>
                      )}
                      {isLogged ? (
                        <>
                          {" "}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              textAlign: "center",
                            }}
                          >  
                          </Box>
                          <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                              elevation: 0,
                              sx: {
                                overflow: "visible",
                                filter:
                                  "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                                "&:before": {
                                  content: '""',
                                  display: "block",
                                  position: "absolute",
                                  top: 0,
                                  right: 14,
                                  width: 10,
                                  height: 10,
                                  bgcolor: "background.paper",
                                  transform: "translateY(-50%) rotate(45deg)",
                                  zIndex: 0,
                                },
                              },
                            }}
                            transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                            }}
                            anchorOrigin={{
                              horizontal: "right",
                              vertical: "bottom",
                            }}
                          >

                            <a href="/myproducts" >
                              <MenuItem>
                                <ListItemIcon>
                                  <Inventory2 fontSize="small" />
                                </ListItemIcon>
                                Mis pedidos
                              </MenuItem>
                            </a>
                            <MenuItem onClick={handleLogoutUser}>
                              <ListItemIcon>
                                <Logout fontSize="small" />
                              </ListItemIcon>
                              Logout
                            </MenuItem>
                          </Menu>{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
