import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ScrollParaInicio = () => {
    const section = document.getElementById("inicio");
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  const ScrollParaAgenda = () => {
    const section = document.getElementById("agenda");
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  const ScrollParaMapa = () => {
    const section = document.getElementById("estrutura");
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  const handleStructureClick = () => {
    const section = document.getElementById("forum");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="https://athonedu.com.br/wp-content/uploads/2025/05/logo-cw.webp" alt="Logo" />
          <div className="barra-divider" />
          <Link to="/">Ei, Calouro!</Link>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar bar1 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar bar2 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar bar3 ${menuOpen ? 'open' : ''}`}></span>
        </div>

       <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li>
    <a
      href='#'
      onClick={() => {
        ScrollParaInicio();
        setMenuOpen(false);
      }}
      className="active" // ou remova se não for o link ativo
      style={{ cursor: 'pointer' }}
    >
      Início
    </a>
  </li>
  <li>
    <a
      href='#'
      onClick={() => {
        ScrollParaAgenda();
        setMenuOpen(false);
      }}
      style={{ cursor: 'pointer' }}
    >
      Agenda
    </a>
  </li>
  <li>
    <a
      href='#'
      onClick={() => {
        handleStructureClick();
        setMenuOpen(false);
      }}
      style={{ cursor: 'pointer' }}
    >
      Fórum
    </a>
  </li>
  <li>
    <a
      href='#'
      onClick={() => {
        ScrollParaMapa();
        setMenuOpen(false);
      }}
      style={{ cursor: 'pointer' }}
    >
      Mapa
    </a>
  </li>
</ul>

      </nav>
    </header>
  );
};

export default Header;
