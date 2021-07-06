import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../axios/axios";

const ProductDetails = () => {
  const param = useParams();
  const [showAll, setShowApll] = useState(false);
  const [details, setDetails] = useState(0);
  const [user, setUser] = useState(0);

  // const trimmedDesc="";

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await axios
      .get(`/product/${param.id}`)
      .catch((err) => console.log("Error:", err));
      if (response && response.data) {
        setDetails(response.data);
        setUser(response.data.user);
        // const trimmedDesc = details.description.substring(0, 200);
    }
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={details.imageUrl}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">
              Added on: {details.addedOn}
              <br />
              <p>
                by:
                <a href="#">{user.fullName}</a>
              </p>
            </div>
            <h1 className="display-5 fw-bolder">{details.name}</h1>
            <div className="fs-5 mb-5">
              <span>${details.price}</span>
            </div>

            <p className="lead" style={{ whiteSpace: "pre-line" }}>
                 {details.description}
               </p>

            {/* {!showAll ? (
              <p className="lead" style={{ whiteSpace: "pre-line" }}>
                {trimmedDesc}
                <button
                  className="btn btn-link"
                  onClick={() => {
                    setShowApll(true);
                  }}
                >
                  Read more ...
                </button>
              </p>
            ) : (
              <p className="lead" style={{ whiteSpace: "pre-line" }}>
                {details.description} + "..."
                <button
                  className="btn btn-link"
                  onClick={() => {
                    setShowApll(false);
                  }}
                >
                  Read less
                </button>
              </p>
            )} */}
            <div className="d-flex">
              <a className="btn btn-outline-dark mt-auto" href="#">
                <i className="bi-cart-fill me-1"></i>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
