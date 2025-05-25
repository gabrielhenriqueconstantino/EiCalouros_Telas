import React from 'react';
import '../styles/Hero.css';
import '../styles/What.css';

const What = () => {
  return (
    <section className="what-section">
      <div className='main'>
        <h2>O que é?</h2>
        <p>O 'Ei, Calouro!' é um site intuitivo e interativo que centraliza informações essenciais 
        <br />e facilita a adaptação dos calouros da Anhembi Morumbi, proporcionando uma experiência 
        <br />universitária mais acessível, organizada e integrada.</p>
      </div>
      
      <div className='main-img'>
        <img src='./img/students_retouch.png'></img>
      </div>
      
    </section>
  );
};

export default What;