import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="logo-footer">
            <img src="https://athonedu.com.br/wp-content/uploads/2025/05/logo-cw.webp" alt="Logo" className="footer-logo" />
            <div className="divisor" />
            <div className="brand-info">
              <Link to="/" className="footer-title">Ei, Calouro!</Link>
              <p className="footer-slogan">Facilitando sua jornada universitária.</p>
              <div className="social-icons">
                <a href="/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="/" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="/" className="social-icon"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <h4 className="footer-heading">Unidade Sorocaba</h4>
              <ul className="footer-links">
                <li>Rua da Penha, 1.181</li>
                <li>Centro - Sorocaba/SP</li>
                <li>(15) 3042-5000</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Unidade Itu</h4>
              <ul className="footer-links">
                <li>Rua Capitão Silvio Fleming, 135</li>
                <li>Centro - Itu/SP</li>
                <li>(11) 2429-9077</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Athon Soluções</h4>
              <ul className="footer-links">
                <li>(15) 3042-5054</li>
                <li><a href="mailto:solucoes@athonedu.com.br">solucoes@athonedu.com.br</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contato</h4>
              <ul className="footer-links">
                <li><a href="mailto:caa@athonedu.com.br">Atendimento ao Aluno</a></li>
                <li><a href="mailto:contato@athonedu.com.br">Informações gerais</a></li>
              </ul>
            </div>

            <div className="footer-column newsletter">
              <h4 className="footer-heading">Newsletter</h4>
              <p>Assine para receber novidades</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Seu e-mail" />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Athon Ensino Superior. Todos os direitos reservados.</p>
            <div className="legal-links">
              <a href="/">Política de privacidade</a>
              <a href="/">Termos de uso</a>
              <p>Razão Social: Athon Ensino Superior Ltda.</p>
              <p>CNPJ: 03.363.565/0001-21</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;