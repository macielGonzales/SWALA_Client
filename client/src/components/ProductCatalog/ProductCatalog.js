import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CardProduct from "./CardProduct";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";

const ProductCatalog = () => {
  const state = useContext(GlobalState);
  //la siguiente linea comentada es importante
  const [products] = state.productsApi.products;
  const [isLoading, setIsLoading] = useState(true);
  const [categories] = state.categoriesApi.categories;
  const [category, setCategory] = state.productsApi.category;
  const [sort, setSort] = state.productsApi.sort;
  const [search, setSearch] = state.productsApi.search;
  const status = 'habilitado'
  useEffect(() => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  const dataSource =
    products.filter((c) => {
      let field = c.estado
      field = field.toLowerCase()
      const query = status.toLowerCase()
      return field.indexOf(query) !== -1
    })
  console.log("🚀 ~ file: ProductCatalog.js ~ line 35 ~ ProductCatalog ~ dataSource", dataSource)

  return (
    <>
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Catalogo</h2>
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
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ height: 10 }}>
          <Fade in={isLoading} unmountOnExit>
            <CircularProgress />
          </Fade>
        </Box>
      </Box>
      {!isLoading && (
        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
              <aside className="col-md-3">
                <div className="card">
                  {/*categories 1*/}
                  <article className="filter-group">
                    <header className="card-header">
                      <a
                        href="/#"
                        data-toggle="collapse"
                        data-target="#collapse_1"
                        aria-expanded="true"
                        className=""
                      >
                        <i className="icon-control fa fa-chevron-down" />
                        <h6 className="title">Categorias</h6>
                      </a>
                    </header>
                    <div
                      className="filter-content collapse show"
                      id="collapse_1"
                    >
                      <div className="card-body">
                        <form className="pb-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                <i className="fa fa-search" />
                              </button>
                            </div>
                          </div>
                        </form>

                        <ul className="list-menu">
                          <li>
                            <a href="/#">Cakes </a>
                          </li>
                          <li>
                            <a href="/#">Cupcakes</a>
                          </li>
                          <li>
                            <a href="/#">Alfajores</a>
                          </li>
                          <li>
                            <a href="/#">Brownies</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  {/*Oferta */}
                  <article className="filter-group">
                    <header className="card-header">
                      <a
                        href="/#"
                        data-toggle="collapse"
                        data-target="#collapse_3"
                        aria-expanded="true"
                        className=""
                      >
                        <h6 className="title">Ofertas disponibles</h6>
                      </a>
                    </header>
                    <Link to="/ofertas">
                      <div
                        className="filter-content collapse show"
                        id="collapse_2"
                      >
                        <div className="card-body">
                          <Card
                            sx={{ minWidth: 200, bgcolor: orange[50] }}
                          >
                            <CardContent>
                              <Typography
                                sx={{ fontSize: 20 }}
                                color="text.secondary"
                                gutterBottom
                              >
                                Ofertas en Brownies
                              </Typography>
                              <Typography variant="h5" component="div" />
                              <Typography
                                sx={{ fontSize: 40 }}
                                color="text.secondary"
                              >
                                30%{" "}
                                <span style={{ fontSize: "20px" }}>
                                  {" "}
                                  dscto{" "}
                                </span>
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </Link>
                  </article>

                  {/*mas filtros  */}
                  <article className="filter-group">
                    <header className="card-header">
                      <a
                        href="/#"
                        data-toggle="collapse"
                        data-target="#collapse_5"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="icon-control fa fa-chevron-down" />
                        <h6 className="title">More filter </h6>
                      </a>
                    </header>
                    <div className="filter-content collapse in" id="collapse_5">
                      <div className="card-body">
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            checked=""
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">
                            Any condition
                          </div>
                        </label>
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">Brand new </div>
                        </label>
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">Used items</div>
                        </label>
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">Very old</div>
                        </label>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              <main className="col-md-9">
                <header className="border-bottom mb-4 pb-3">
                  <div className="form-inline">
                    <span className="mr-md-auto">{`${dataSource.length} productos disponibles`}</span>
                    <select
                      className="mr-2 form-control"
                      name="category"
                      value={category}
                      onChange={handleCategory}
                    >
                      <option value="">Todos</option>
                      {categories.map(category => (
                        <option
                          value={"category=" + category._id}
                          key={category._id}
                        >
                          {category.nombre}
                        </option>
                      ))}
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
                  {dataSource.map((product) => (
                    <div className="col-md-4">
                      <figure className="card card-product-grid">
                        <CardProduct key={product._id} product={product} />
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
                      <a className="page-link" href="7#">
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
            </div>
          </div>
        </section>
      )}
      {/* <div className="container_prod_filt">
        <div className="container-prod">
          <h1 className="namePage"> Productos </h1>
          <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ </div>

          <div className="products">
            {products.map((product) => {
              return <ProductItem key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div> */}
      {/* {products.length === 0 && <Loading />} */}
    </>
  );
};

export default ProductCatalog;
