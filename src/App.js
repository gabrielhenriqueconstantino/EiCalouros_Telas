import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Header from './elements/Header';
import Hero from './elements/Hero';
import WhatIs from './elements/What.js';
import Forum from './elements/Forum.js';
import { useState } from 'react';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showYesNoButtons, setShowYesNoButtons] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [assistantMessage, setAssistantMessage] = useState("Oi! Precisa de ajuda com a faculdade? 👋");

  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showRaInput, setShowRaInput] = useState(false);
  const [raValue, setRaValue] = useState("");

  const togglePopup = () => {
    setIsPopupVisible(prev => !prev);
    setShowYesNoButtons(true);
    setShowOptions(false);
    setAssistantMessage("Oi! Precisa de ajuda com a faculdade? 👋");
    setShowScheduleModal(false);
    setShowRaInput(false);
    setRaValue("");
  };

  const handleYesClick = () => {
    setShowYesNoButtons(false);
    setShowOptions(true);
    setAssistantMessage("Escolha uma opção:");
  };

  const handleNoClick = () => {
    setAssistantMessage("Poxa, que pena! Se mudar de ideia, estarei aqui 😢");
    setTimeout(() => {
      setIsPopupVisible(false);
      setShowYesNoButtons(true);
      setShowOptions(false);
      setAssistantMessage("Oi! Precisa de ajuda com a faculdade? 👋");
      setShowScheduleModal(false);
      setShowRaInput(false);
      setRaValue("");
    }, 2500);
  };

  const handleAthonClick = () => {
    window.open('https://www.athonportal.com.br/', '_blank');
  };

  const handleScheduleClick = () => {
    setShowRaInput(true);
    setShowScheduleModal(false);
  };

  const handleRaConfirm = () => {
    if (raValue.trim() !== "") {
      setShowScheduleModal(true);
      setShowRaInput(false);
    } else {
      alert("Por favor, insira seu R.A.");
    }
  };

  const closeScheduleModal = () => {
    setShowScheduleModal(false);
    setRaValue("");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <WhatIs />
        <Forum />

        {/* Assistente Virtual */}
        <div className="virtual-assistant-container">
          <div className="assistant-bubble" onClick={togglePopup}>
            <img src="/img/robozinho.gif" alt="Assistente Virtual" />
          </div>

          <div className={`assistant-popup ${isPopupVisible ? 'active' : ''}`}>
            <div className="assistant-header">
              <strong>Athena</strong>
            </div>
            <div className="assistant-body">
              <p>{assistantMessage}</p>

              {showYesNoButtons && (
                <div className="assistant-buttons">
                  <button className="btn-response" onClick={handleYesClick}>Sim</button>
                  <button className="btn-response" onClick={handleNoClick}>Não</button>
                </div>
              )}

              {showOptions && (
                <div className="assistant-options">
                  <button className="btn-response" onClick={() => window.open("https://www.exemplo-calendario.com.br", "_blank")}>
                    Calendário Acadêmico
                  </button>
                  <button className="btn-response" onClick={handleScheduleClick}>
                    Grade de Horários
                  </button>
                  <button className="btn-response" onClick={handleAthonClick}>
                    Área Restrita Athon
                  </button>
                </div>
              )}

              {showRaInput && (
                <div className="assistant-options">
                  <input
                    type="text"
                    placeholder="Digite seu R.A"
                    value={raValue}
                    onChange={(e) => setRaValue(e.target.value)}
                    className="ra-input"
                  />
                  <button className="btn-response" onClick={handleRaConfirm}>
                    Confirmar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Modal da imagem da grade */}
          {showScheduleModal && (
            <div className="schedule-modal-overlay" onClick={closeScheduleModal}>
              <div className="schedule-modal" onClick={e => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={closeScheduleModal}>×</button>
                <div className="schedule-header-icon">
                  <img src="/img/robozinho.gif" alt="Robozinho" />
                </div>
                <img
                  src="/img/HorarioAulas.png"
                  alt="Grade de Horários"
                  className="schedule-image"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
