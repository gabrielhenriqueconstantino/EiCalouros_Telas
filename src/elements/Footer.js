import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {new Date().getFullYear()} SuaEmpresa. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/">Sobre</a>
          <a href="/">Contato</a>
          <a href="/">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;