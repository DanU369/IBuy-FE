import React from "react";
import { Switch } from "react-router-dom";
import { Route} from "react-router-dom";
import Addproduct from "../components/Addproduct";
import HomePage from "../components/HomePage"
import Login from "../components/Login";
import ProductDetails from "../components/ProductDetails";
import Register from "../components/Register";

const Routes = () => {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/user/login" exact component={Login} />
          <Route path="/user/register" exact component={Register} />
          <Route path="/product/add" exact component={Addproduct} />
        </Switch>
      </React.Fragment>
    );
}

export default Routes
