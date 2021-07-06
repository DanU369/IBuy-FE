import React from "react";
import AuthService from "../services/Auth.service";

const NavBar = () => {

  const handleLogout= (e)=>{
    e.preventDefault();
    AuthService.logout();
    window.location.href="/";
    // window.location.reload();
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/" style={{ fontSize: "36px" }}>
            IBuy
          </a>
          {localStorage.getItem("user") != null ? (
            <p
              style={{
                marginTop: "20px",
                marginLeft: "31%",
                marginRight: "31%",
              }}
            >
              Welcome {AuthService.getCurrentUser().fullName}
            </p>
          ) : (
            <p style={{ marginLeft: "75%" }}></p>
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0 ms-lg-4">
              {/* <li className="nav-item ml-auto">
                <a className="nav-link">
                  <button className="btn btn-outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Saved Products
                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                      0
                    </span>
                  </button>
                </a>
              </li> */}
              {localStorage.getItem("user") != null ? (
                <React.Fragment>
                  <li>
                    <a
                      className="nav-link btn btn-primary"
                      href="/product/add"
                      style={{ color: "white", marginTop: "6%" }}
                    >
                      Add Product
                    </a>
                  </li>
                  <li style={{ marginLeft: "5px" }}>
                    <a
                      className="nav-link btn btn-danger"
                      onClick={handleLogout}
                      href="/"
                      style={{ color: "white", marginTop: "10%" }}
                    >
                      Logout
                    </a>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li>
                    <a
                      className="nav-link btn btn-success"
                      href="/user/login"
                      style={{ color: "white", marginTop: "15%" }}
                    >
                      Login
                    </a>
                  </li>
                  <li style={{ marginLeft: "5px" }}>
                    <a
                      className="nav-link btn btn-primary"
                      href="/user/register"
                      style={{ color: "white", marginTop: "12%" }}
                    >
                      Register
                    </a>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
