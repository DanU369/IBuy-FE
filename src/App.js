import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
