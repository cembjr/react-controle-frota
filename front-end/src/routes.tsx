import React from "react";
import { Switch, Route } from "react-router-dom";
import SobrePage from "./Pages/Sobre";
import AtendentesPage from "./Pages/Atendentes";
import HomePage from "./Pages/Home";
import MotoristasPage from "./Pages/Motorista";
import { VeiculoPage } from "./Pages/Veiculo";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/atendentes" component={AtendentesPage} />
    <Route path="/motoristas" component={MotoristasPage} />    
    <Route path="/veiculos" component={VeiculoPage} />
    <Route path="/sobre" component={SobrePage} />
  </Switch>
);

export default Routes;

