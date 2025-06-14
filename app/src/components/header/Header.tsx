import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => (
  <header className="header">
    <div className="header-logo">Iss-bel</div>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contacto">Contácto</Link>
    </nav>
  </header>
);

export default Header;
