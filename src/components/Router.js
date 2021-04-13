import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Portafolio from "./portfolio";
import AcercaDe from "./acercaDe";
import Footer from "./footer";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Portafolio} />
          <Route exact path="/acercaDe" component={AcercaDe} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default Router;
