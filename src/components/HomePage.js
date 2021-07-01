import React from "react";
import ProductCatalog from "./ProductCatalog";

const HomePage = () => {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Everything By Everyone</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Best Place To Buy What You Need Or Sell What You Have
              <i className="bi bi-check" style={{ color: "green" }}></i>
              <i className="bi bi-x" style={{ color: "red" }}></i>
            </p>
          </div>
        </div>
      </header>
      <ProductCatalog />
    </div>
  );
};

export default HomePage;
