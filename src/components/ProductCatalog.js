import React, { useState, useEffect } from "react";
import { axios } from "../axios/axios";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios
      .get("/product")
      .catch((err) => console.log("Error:", err));
    if (response && response.data) {
      setProducts(response.data);
    }
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => {
            return (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  {/* <div style={{maxHeight:"300px",maxWidth:"450px"}}> */}
                  <div style={{ display: "inline-block"}}>
                    <div
                      style={{
                        width: "218px",
                        height: "300px",
                        verticalAlign: "middle",
                        textAlign: "center",
                        display: "table-cell"
                      }}
                    >
                      <a href={`/details/${product.id}`}>
                        <img
                          className="card-img-top"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            display: "block",
                            margin: "0 auto",
                          }}
                          // style={{
                          //   width: "218px",
                          //   height: "300px",
                          //   maxWidth: "100%",
                          // }}
                          src={product.imageUrl}
                          alt="..."
                        />
                      </a>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{product.name}</h5>
                      {/* <!-- Product price--> */}${product.price}
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        <i className="bi-cart-fill me-1"></i>
                        Add to Cart
                      </a>
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href={`/details/${product.id}`}
                        style={{
                          width: "127px",
                          top: "15px",
                          position: "relative",
                        }}
                      >
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
