import React from 'react';
import '../styles/Agenda.css';

const Agenda = () => {
  return (
    <section className="agenda">
        <div className='banner'>
            <h3 className="banner-text">Confira os Próximos eventos da Athon!</h3>
        </div>
        <div className='girl-jumping'>
            <img src='./img/garota-pulando.png' alt='girl_jumping'></img>
        </div>
        <div className='yellow-container'></div>
    </section>
  );
};

export default Agenda;