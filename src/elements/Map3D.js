import React from 'react';
import '../styles/Map3D.css';

const Map3D = () => {
  return (
    <section className="map-container">
      <div className='perdido'>
        <div className="thought-bubble">
          <div className="bubble-circle"></div>
          <div className="bubble-circle"></div>
          <div className="bubble-circle"></div>
          <div className="bubble-content">
            <h3>Xiiiii... Tá perdido?</h3>
            <p>Com o mapa interativo da faculdade, você sabe exatamente como se localizar!</p>
          </div>
        </div>
        <img src='./img/perdido.png' alt="Ícone de pessoa perdida" className="lost-icon"></img>
      </div>
      
      <div className='faixa-yellow'>CLIQUE PARA VER!!!!!!!!!!!!!!!</div>
      <div className="map-base">
        <img src="./img/planta_athon.jpg" alt="Mapa da Faculdade" className="map-image" />
        <div className="block portaria" title="Portaria (entrada de alunos)"></div>
        <div className="block design" title="Prédio Design"></div>
        <div className="block quadra" title="Quadra"></div>
        <div className="block engenharia" title="Prédio Engenharia"></div>
        <div className="block principal" title="Prédio Principal"></div>
        <div className="block biblioteca" title="Biblioteca / Secretaria"></div>
        <div className="block objetivo" title="Escola Objetivo"></div>
      </div>
      
    </section>
  );
};

export default Map3D;
