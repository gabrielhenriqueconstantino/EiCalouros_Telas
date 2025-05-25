import React from 'react';
import '../styles/Hero.css';
import '../styles/What.css';

const What = () => {
  const services = [
    { name: 'Chatbot de Suporte' },
    { name: 'Tutoriais Sobre Plataformas Acadêmicas' },
    { name: 'Agenda do Semestre' },
    { name: 'Fórum de Interação' },
  ];

  return (
    <section className="what-section">
      <div className='main'>
        <h2>O que é?</h2>
        <p>O 'Ei, Calouro!' é um site intuitivo e interativo que centraliza informações essenciais e facilita a adaptação dos calouros da Anhembi Morumbi, proporcionando uma experiência 
        universitária mais acessível, organizada e integrada.</p>
      </div>
      
      <div className='main-img'>
        <img src='./img/students_retouch.png' alt="Estudantes"></img>
      </div>

      <div className='solutions'>
        <div className='text'>
          <h3>O que você vai encontrar por aqui?</h3>
        </div>

        <div className="solutions-cards">
          {services.map((service) => (
            <div key={service.name} className="solution-card">
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className='girl-img'>
          <img src='./img/girl.png' alt='Estudante'></img>
        </div>
    </section>
  );
};

export default What;