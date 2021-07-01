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
          <a className="navbar-brand" href="/">
            IBuy
          </a>
          {localStorage.getItem("user") != null && (
            <p style={{ marginTop: "20px" }}>
              Welcome {AuthService.getCurrentUser().fullName}
            </p>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#!">
                    New Arrivals
                    </a>
                    </li>
                  </ul>*/}
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
            {localStorage.getItem("user") != null ? (
              <a
                className="nav-link"
                onClick={handleLogout}
                href="/"
                style={{ color: "red" }}
              >
                Logout
              </a>
            ) : (
              <React.Fragment>
              <a
                className="nav-link"
                href="/user/login"
                style={{ color: "red" }}
              >
                Login
              </a>
              <a
                className="nav-link"
                href="/user/register"
                style={{ color: "red" }}
              >
                Register
              </a>
              </React.Fragment>
            )}
          </div>

          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
