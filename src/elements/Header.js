// Componente do cabeçalho com navegação e menu hambúrguer para telas pequenas
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="https://athonedu.com.br/wp-content/uploads/2025/05/logo-c.webp" alt="Logo" />
        <div className="divider" />
        <Link to="/">Ei, Calouro!</Link>
        </div>
          
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar bar1 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar bar2 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar bar3 ${menuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Agenda
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Atlética
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;