import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Header from './elements/Header';
import Hero from './elements/Hero';
import WhatIs from './elements/What.js';
import { useState } from 'react';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(prev => !prev);
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
              <p>Oi! Precisa de ajuda com a faculdade? 👋</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

