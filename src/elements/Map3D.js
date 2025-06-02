import React from 'react';
import '../styles/Map3D.css';

const Map3D = () => {
  return (
    <section className="map-container">
      <h2>Mapa Interativo da Faculdade</h2>
      <div className="map-base">
        <img src="/img/imagem planta athon.jpg" alt="Mapa da Faculdade" className="map-image" />
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
