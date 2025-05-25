import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Header from './elements/Header';
import Hero from './elements/Hero';
import WhatIs from './elements/What.js';
import { useState } from 'react';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showYesNoButtons, setShowYesNoButtons] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [assistantMessage, setAssistantMessage] = useState("Oi! Precisa de ajuda com a faculdade? 👋");

  const togglePopup = () => {
    setIsPopupVisible(prev => !prev);
    setShowYesNoButtons(true);
    setShowOptions(false);
    setAssistantMessage("Oi! Precisa de ajuda com a faculdade? 👋");
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
    }, 2500); // Delay aumentado para 2,5 segundos
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <WhatIs />

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
                  <button className="btn-response">Calendário Acadêmico</button>
                  <button className="btn-response">Grade de Horários</button>
                  <button className="btn-response">Área Restrita Athon</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


