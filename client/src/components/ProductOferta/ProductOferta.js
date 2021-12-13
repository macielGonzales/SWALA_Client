import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";
import CardOferta from "./CardOferta";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const ProductOferta = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <div className="App">
        <section className="section-pagetop bg">
          <div className="container">
            <h2 className="title-page">Oferta</h2>
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

        <section className="section-content padding-ofertas">
          <div className="container-oferta">
            <div className="row">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ height: 10 }}>
                  <Fade in={isLoading} unmountOnExit>
                    <CircularProgress />
                  </Fade>
                </Box>
              </Box>
              {!isLoading && (
                <main className="col-md-9">
                  <header className="border-bottom mb-4 pb-4">
                    <div className="form-inline">
                      <span className="mr-md-auto">{`${products.length} ofertas en oferta disponibles`}</span>
                      <select className="mr-2 form-control">
                        <option>Torta</option>
                        <option>Turron</option>
                        <option>Brownie</option>
                        <option>Alfajores</option>
                      </select>
                      <div className="btn-group">
                        <a
                          href="/#"
                          className="btn btn-outline-secondary"
                          data-toggle="tooltip"
                          title="List view"
                        >
                          <i className="fa fa-bars" />
                        </a>
                        <a
                          href="/#"
                          className="btn  btn-outline-secondary active"
                          data-toggle="tooltip"
                          title="Grid view"
                        >
                          <i className="fa fa-th" />
                        </a>
                      </div>
                    </div>
                  </header>
                  {/*products*/}
                  <div className="row">
                    {products.map((product) => (
                      <div className="col-md-4">
                        <figure className="card card-product-grid">
                          <CardOferta key={product._id} product={product} />
                        </figure>
                      </div>
                    ))}
                  </div>
                  <nav className="mt-4" aria-label="Page navigation sample">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="/#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </main>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ProductOferta;
