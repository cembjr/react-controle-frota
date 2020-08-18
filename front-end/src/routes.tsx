import React from "react";
import { Switch, Route } from "react-router-dom";
import Sobre from "./pages/Sobre/sobre";
import Atendentes from "./pages/Atendentes";
import Home from "./pages/Home/home";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/atendentes" component={Atendentes} />
    <Route path="/sobre" component={Sobre} />
  </Switch>
);

export default Routes;
