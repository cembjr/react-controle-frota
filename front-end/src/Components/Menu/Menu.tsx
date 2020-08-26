import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Controle Frota
      </Link>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/atendentes">
            <span className="nav-item nav-link">Atendente</span>
          </Link>
          <Link to="/motoristas">
            <span className="nav-item nav-link">Motoristas</span>
          </Link>
          <Link to="/veiculos">
            <span className="nav-item nav-link">Veiculos</span>
          </Link>
          <Link to="/servicos">
            <span className="nav-item nav-link">Serviços</span>
          </Link>
          <Link to="/sobre">
            <span className="nav-item nav-link">Sobre</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
