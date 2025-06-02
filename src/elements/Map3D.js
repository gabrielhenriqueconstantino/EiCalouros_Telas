import React, { useState } from 'react';
import '../styles/Map3D.css';

const Map3D = () => {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const blockInfo = {
    portaria: {
      title: "Portaria",
      description: "Entrada principal de alunos",
      images: [
        "./img/locais/portaria_athon.png"
      ],
      logo: "./img/entrada.png" // Adicione o caminho para o ícone de cada bloco
    },
    design: {
      title: "Prédio de Fotografia",
      description: "Centro de cursos de design",
      images: [
        "https://athonedu.com.br/wp-content/uploads/2023/05/Estudio-de-Video.png",
        "https://athonedu.com.br/wp-content/uploads/2023/05/Estudio-de-foto.png"
      ],
      logo: "./img/fotografia.png"
    },
    quadra: {
      title: "Quadra",
      description: "Área esportiva da faculdade",
      images: [
        "./img/locais/QuadraAthon.jpg"
      ],
      logo: "./img/quadra.png"
    },
    engenharia: {
      title: "Prédio Engenharia",
      description: "Centro de engenharias",
      images: [
        "https://athonedu.com.br/wp-content/uploads/2021/11/fotos-estrutura-athon-5.png",
        "./img/locais/Engenharia_athon.png"
      ],
      logo: "./img/engenharia.png"
    },
    principal: {
      title: "Prédio Principal",
      description: "Salas de aula e Laboratórios",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRio2exD2u_3k5OxLEahyD4QjaKWUOD7iNUXNmT_-aD7dMdKQuZsHYQoM_0lmTvrUJNzM&usqp=CAU",
        "https://agendasorocaba.com.br/wp-content/uploads/2023/10/athon-ambiente-materia.jpg"
      ],
      logo: "https://athonedu.com.br/wp-content/uploads/2025/05/logo-cw.webp"
    },
    biblioteca: {
      title: "Biblioteca",
      description: "Acervo acadêmico e secretaria",
      images: [
        "./img/locais/Biblioteca_athon.png",
        "./img/locais/SecretariaAthon.png"
      ],
      logo: "./img/livro.png"
    },
    objetivo: {
      title: "Escola Objetivo",
      description: "Parceria educacional",
      images: [
        "https://objetivosorocaba.com.br/shared/upload/unidades/129_3533_78.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gE69F5L4RUCQB6q1OgmOv8s_fbbPL8yOdw&s"
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gE69F5L4RUCQB6q1OgmOv8s_fbbPL8yOdw&s"
    },
    alameda: {
      title: "Alameda",
      description: "Pátio - Entrada principal",
      images: [
        "https://athonedu.com.br/wp-content/uploads/2025/04/IMG_9605-scaled.jpeg"
      ],
      logo: "https://athonedu.com.br/wp-content/uploads/2025/01/fav32.png"
    }
  };

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
      
      <div className='faixa-yellow'></div>
      <div className="map-base">
        <img src="./img/planta_athon.jpg" alt="Mapa da Faculdade" className="map-image" />
        
        {Object.keys(blockInfo).map((blockKey) => (
          <div 
            key={blockKey}
            className={`block ${blockKey}`} 
            title={blockInfo[blockKey].title}
            onMouseEnter={() => setHoveredBlock(blockKey)}
            onMouseLeave={() => setHoveredBlock(null)}
          >
            <img 
              src={blockInfo[blockKey].logo} 
              alt={`${blockInfo[blockKey].title} logo`}
              className="block-logo"
            />
          </div>
        ))}
        
        {hoveredBlock && (
          <div className={`popup ${hoveredBlock}-popup`}>
            <div className="popup-content">
              <h3>{blockInfo[hoveredBlock].title}</h3>
              <p>{blockInfo[hoveredBlock].description}</p>
              <div className="popup-images">
                {blockInfo[hoveredBlock].images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${blockInfo[hoveredBlock].title} ${index + 1}`}
                    className="popup-image"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Map3D;