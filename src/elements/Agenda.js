import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/Agenda.css';

const eventos = [
  {
    id: 1,
    titulo: "TechCo",
    data: "15 a 20 de Junho",
    horario: "14:00 - 17:00",
    local: "Auditório Principal",
    descricao: "Um Evento de Tecnologia da \nAthon Ensino Superior",
    imagem: "https://athonedu.com.br/wp-content/uploads/2024/08/eventos-athon-techco-imagem-evento-site.png",
    escola: "TI"
  },
  {
    id: 2,
    titulo: "Innovation Week 2025",
    data: "07 a 10 de outubro",
    horario: "19:00",
    local: "Pátio",
    descricao: "Inteligência Artificial e \nCustomer Experience",
    imagem: "https://athonedu.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-03-at-14.25.15.jpeg",
    escola: ["Negócios", "IA"]
  },
  {
    id: 3,
    titulo: "SCIETEC 2024",
    data: "21 a 23 de outubro",
    horario: "19:30",
    local: "Auditório Principal",
    descricao: "Engenharia e Arquitetura Inteligentes: \nProjetando para um Futuro Inclusivo e Sustentável",
    imagem: "https://athonedu.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-10.29.29-1-1.jpeg",
    escola: ["Engenharias", "Arquitetura"]
  },
  {
    id: 4,
    titulo: "17ª Feira de Direito Constitucional",
    data: "08 de novembro",
    horario: "19:00",
    local: "Hall prédio E",
    descricao: "Crimes Constitucionais e Direitos Fundamentais",
    imagem: "https://athonedu.com.br/wp-content/uploads/2024/11/4708-banner_90x120cm.pdf.png",
    escola: ["Palestras", "Direito"]
  },
  {
    id: 5,
    titulo: "Semana Jurídica 2025",
    data: "07 a 10 de abril",
    horario: "19:30",
    local: "Auditório",
    descricao: "4 noites de palestras para debater os temas mais relevantes do Direito para todos os nossos alunos e comunidade.",
    imagem: "https://athonedu.com.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-25-at-17.23.03.jpeg",
    escola: "Direito"
  },
  {
    id: 6,
    titulo: "Connect Business 2025",
    data: "05 a 08 de maio",
    horario: "19:30",
    local: "Quadra Esportiva",
    descricao: "O Connect Athon é o maior evento \nde Comunicação de Sorocaba \ne região.",
    imagem: "https://athonedu.com.br/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-28-at-16.21.18.jpeg",
    escola: ["Comunicação", "Negócios"]
  }
];

const Agenda = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para controlar pausa
  const carrosselRef = useRef(null);
  const wrapperRef = useRef(null);
  const intervalRef = useRef(null);

  // Função para avançar para o próximo card
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % eventos.length);
  }, []);

  // Função para voltar ao card anterior
  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + eventos.length) % eventos.length);
  }, []);

  // Configura o carrossel automático
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          nextSlide();
        }
      }, 3500);
    };

    startAutoScroll();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  useEffect(() => {
    if (carrosselRef.current && wrapperRef.current) {
      const cardWidth = carrosselRef.current.children[0]?.offsetWidth + 20;
      //const wrapperWidth = wrapperRef.current.offsetWidth;
      
      // Calcula a posição para alinhar o card atual à esquerda
      const newPosition = -(currentIndex * cardWidth);
      
      // Ajusta para mostrar parte do próximo card
      const offset = 0; // Espaço para mostrar parte do próximo card
      const adjustedPosition = newPosition + offset;
      
      carrosselRef.current.style.transform = `translateX(${adjustedPosition}px)`;
    }
  }, [currentIndex]);

  // Adiciona listeners para as teclas de seta
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  // Funções para pausar/retomar o carrossel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
  <section className="agenda">
    <div className='banner'>
      <h3 className="banner-text">Confira os Próximos eventos da Athon!</h3>
    </div>
    
    <div className='girl-jumping'>
      <img src='./img/garota-pulando.png' alt='girl_jumping'></img>
    </div>

    <div className='yellow-container'></div>

    <div className='carrossel-wrapper' ref={wrapperRef}>
      <div className='carrossel' ref={carrosselRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {eventos.map((evento, index) => (
          <EventoCard 
            key={evento.id} 
            evento={evento} 
            isCurrent={index === currentIndex}
            isNext={index === (currentIndex + 1) % eventos.length}
          />
        ))}
      </div>
    </div>

    <div className='duvidas-eventos'>
      <div className='duvidas-content'>
        <div className='girl-duvidas'>
          <img src='./img/girl-duvidas.png' alt='Dúvidas sobre eventos'></img>
        </div>
        
        <div className="form-wrapper">
          <div className="form-container">
            <h2 className="form-title">Dúvidas sobre os eventos?<br />Entre em contato!</h2>
            <form className="contact-form" action="#" method="post">
  <div className="form-columns">
    <div className="form-left">
      <div className="form-group">
        <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />
      </div>
      <div className="form-group">
        <input type="email" id="email" name="email" placeholder="Seu melhor e-mail" required />
      </div>
      <div className="form-group">
        <input type="tel" id="telefone" name="telefone" placeholder="Telefone (opcional)" />
      </div>
    </div>
    <div className="form-right">
      <div className="form-group">
        <textarea className='textarea' id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>
      </div>
    </div>
  </div>
  <button type="submit" className="submit-btn">Enviar Mensagem</button>
</form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

const EventoCard = ({ evento, isCurrent, isNext }) => {
  const escolas = Array.isArray(evento.escola) ? evento.escola : [evento.escola];
  
  return (
    <div className={`evento-card ${isCurrent ? 'current' : ''} ${isNext ? 'next' : ''}`}>
      <div className="evento-imagem-container">
        <img src={evento.imagem} alt={evento.titulo} className="evento-imagem" />
      </div>
      <div className="evento-conteudo">
        <h3 className="evento-titulo">{evento.titulo}</h3>
        
        <div className="evento-escolas">
          {escolas.map((escola, index) => (
            <span key={index} className="escola-tag">{escola}</span>
          ))}
        </div>
        
        <div className="evento-info">
          <p><strong>Data:</strong> {evento.data}</p>
          <p><strong>Horário:</strong> {evento.horario}</p>
          <p><strong>Local:</strong> {evento.local}</p>
        </div>
        
        <p className="evento-descricao">{evento.descricao}</p>
        
        <button className="inscrever-btn">Inscreva-se</button>
      </div>
    </div>
  );
};

export default Agenda;
