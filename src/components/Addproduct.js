import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { axios } from "../axios/axios";
import authHeader from "../services/AuthHeader";

import { productSchema } from "../validations/ProductValidation";

const Addproduct = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onChange",
  });

  const handleAdd = async (form, e) => {
    e.preventDefault();

    console.log(authHeader());

    let userId=JSON.parse(localStorage.getItem("user")).id;

    await axios
      .post(
        `/product/add/${userId}`,
        {
          name: e.target[0].value,
          category: e.target[1].value,
          description: e.target[2].value,
          price: e.target[3].value,
          imageUrl: e.target[4].value,
        },
        { headers: authHeader() }
      )
      .then(() => {
        props.history.push("/");
        window.location.reload();
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="col-md-12">
      {localStorage.getItem("user") == null ? (
        <p
          style={{
            fontSize:"36px",
            marginTop: "20px",
            marginBottom: "80%",
            textAlign: "center",
          }}
        >
          You Must Be <a href="/user/login">Logged In</a>, In Order To Post A
          Product
        </p>
      ) : (
        <div className="card card-container">
          <form onSubmit={handleSubmit(handleAdd)}>
            <div>
              <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  {...register("productName")}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {errors.productName?.message}
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  className="form-select"
                  {...register("category")}
                >
                  <option value="Laptop">Laptop</option>
                  <option value="Phone">Phone</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Book">Book</option>
                </select>

                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {errors.category?.message}
                </p>
              </div>
              {/* {newCategory != "" && <p>{newCategory}</p>} */}

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                  {...register("description")}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {errors.description?.message}
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  {...register("price")}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {errors.price?.message}
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  {...register("imageUrl")}
                />
                <p
                  style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
                >
                  {errors.imageUrl?.message}
                </p>
              </div>

              <div className="form-group" style={{ marginTop: "14px" }}>
                <button
                  className="btn btn-primary btn-block"
                  //   disabled={loading}
                >
                  {/* {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )} */}
                  <span>Add Product</span>
                </button>
              </div>
            </div>

            {/* {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )} */}
          </form>
        </div>
      )}
    </div>
  );
};

export default Addproduct;
