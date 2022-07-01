import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";

const DetailProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  const [detailProduct, setDetailProduct] = useState([]);
  const addCart = state.userApi.addCart;

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);
  console.log(detailProduct);
  if (detailProduct.length === 0) return null;

  return (
    <div className="App">
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Detalle</h2>
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
      <section className="section-content padding-y bg">
        <div className="container">
          <article className="card">
            <div className="card-body">
              <div className="row">
                <aside className="col-md-6">
                  <article className="gallery-wrap">
                    <div className="card img-big-wrap">
                      <a href="/#">
                        {" "}
                        <img src={detailProduct.images[0].url} />
                      </a>
                    </div>
                    <div className="thumbs-wrap">
                      <a href="/#" className="item-thumb">
                        {" "}
                        <img src={detailProduct.images[0].url} />
                      </a>
                      <a href="/#" className="item-thumb">
                        {" "}
                        <img src={detailProduct.images[0].url} />
                      </a>
                      <a href="/#" className="item-thumb">
                        {" "}
                        <img src={detailProduct.images[0].url} />
                      </a>
                      <a href="/#" className="item-thumb">
                        {" "}
                        <img src={detailProduct.images[0].url} />
                      </a>
                    </div>
                  </article>
                </aside>
                <main className="col-md-6">
                  <article>
                    <a href="/#" className="text-primary btn-link">
                      Producto
                    </a>
                    <h3 className="title">{detailProduct.nombre}</h3>
                    <div>
                      <ul className="rating-stars">
                        <li className="stars-active">
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span className="label-rating mr-3 text-muted">7/10</span>
                      <a href="/#" className="btn-link  mr-3 text-muted">
                        {" "}
                        <i className="fa fa-heart"></i> Añadir a favoritos{" "}
                      </a>
                      <a href="/#" className="btn-link text-muted">
                        {" "}
                        <i className="fa fa-book-open"></i> Comparar{" "}
                      </a>
                    </div>

                    <hr />

                    <div className="mb-3">
                      <h6>Short description</h6>
                      <ul className="list-dots mb-0">
                        <li>{detailProduct.descripcion}</li>
                        {/* <li>Wolf leather </li>
                          <li>Rubber material bottom</li>
                          <li>Dark blue color</li> */}
                      </ul>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />


                    {/* <div className="form-group">
                      <label className="text-muted">Available sizes</label>
                      <div>
                        <label className="js-check btn btn-check active mr-1">
                          <input
                            type="radio"
                            name="option_size"
                            value="option1"
                            checked=""
                          />
                          <span>Small</span>
                        </label>
                        <label className="js-check btn btn-check mr-1">
                          <input
                            type="radio"
                            name="option_size"
                            value="option1"
                          />
                          <span>Medium</span>
                        </label>
                        <label className="js-check btn btn-check mr-1">
                          <input
                            type="radio"
                            name="option_size"
                            value="option1"
                          />
                          <span>Large</span>
                        </label>
                        <label className="js-check btn btn-check disabled">
                          <input
                            type="radio"
                            name="option_size"
                            disabled=""
                            value="option1"
                          />
                          <span>Babies</span>
                        </label>
                      </div>
                    </div> */}

                    <div className="mb-3">
                      <span className="monthly">
                        Precio
                        {/* <a href="#" className="btn-link">
                            installment{" "}
                          </a> */}
                      </span>
                      <br />
                      <var className="price h4">s/. {detailProduct.precio}</var>{" "}
                      
                    </div>

                    <div className="mb-4">
                      <a href="/cart" className="btn btn-primary mr-1" onClick={() => addCart(detailProduct)}>
                        Buy now
                      </a>
                      <a
                        // href="/#"
                        className="btn btn-light"
                        onClick={() => addCart(detailProduct)}
                      >
                        Add to card
                      </a>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default DetailProduct;
