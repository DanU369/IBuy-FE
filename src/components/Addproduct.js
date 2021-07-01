import React from 'react'

const Addproduct = () => {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <form >
            <div>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  //   {...register("username")}
                />
                {/* <p
                  style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
                >
                  {errors.username?.message}
                </p> */}
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  //   {...register("fullName")}
                />
                {/* <p
                  style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
                >
                  {errors.fullName?.message}
                </p> */}
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="textarea"
                  className="form-control"
                  name="description"
                  //   {...register("email")}
                />
                {/* <p
                  style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
                >
                  {errors.email?.message}
                </p> */}
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  //   {...register("phoneNumber")}
                />
                {/* <p
                  style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
                >
                  {errors.phoneNumber?.message}
                </p> */}
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-dummy mx-auto">
                  <i
                    className="fas fa-cloud-upload-alt tm-upload-icon"
                    // onclick="document.getElementById('fileInput').click();"
                  ></i>
                </div>
                <div className="custom-file mt-3 mb-3">
                  <input id="fileInput" type="file" style={{"display":"none"}} />
                  <input
                    type="button"
                    className="btn btn-primary btn-block mx-auto"
                    value="UPLOAD PRODUCT IMAGE"
                    // onclick="document.getElementById('fileInput').click();"
                  />
                </div>
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                //   disabled={loading}
                >
                  {/* {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )} */}
                  <span>Sign Up</span>
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
      </div>
    );
}

export default Addproduct
