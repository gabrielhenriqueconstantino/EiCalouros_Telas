import React from 'react';
import '../styles/Hero.css';

const handleStructureClick = () => {
    const section = document.getElementById("sobre");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

const Sobre = () => {
    const section = document.getElementById("sobre");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

const Hero = () => {
  return (
    <section className="hero-section fade-in">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>O manual não oficial do calouro esperto</h1>
          <p>Seu apoio inicial na universidade: informações úteis para organizar sua rotina e aproveitar melhor o início do curso.</p>
          <div className="hero-buttons">
            <a href="/#about" className="btn btn-secondary" onClick={(Sobre)}>Saiba Mais</a>
          </div>
        </div>
        <img 
          className="hero-image" 
          src="/img/eicalouro1.png" 
          alt="Soluções Digitais" 
        />
      </div>
    </section>
  );
};

export default Hero;