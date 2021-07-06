import React from "react";
import ProductCatalog from "./ProductCatalog";
import HeroImage from "../img/shaking_hands.jpg"

const HomePage = () => {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Everything By Everyone</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Best Place To Buy What You Need Or Sell What You Have
            </p>
          </div>
        </div>
          {/* <img
            // className="bg-img"
            src="135821707_2824043097842917_8740803061726428223_n.jpg"
            alt="..."
          ></img> */}
      </header>
      <ProductCatalog />
    </div>
  );
};

export default HomePage;
