import { useState } from 'react';
import React from 'react';
import '../styles/Tutorial.css';

const Tutorial = () => {

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: "Não consigo ver minhas disciplinas",
      content:
        "Verifique se você está matriculado nas disciplinas no SAAF. As disciplinas aparecem no Blackboard até 24h após a matrícula.",
    },
    {
      title: "Esqueci minha senha",
      content:
        'Utilize a opção "Recuperar senha" no portal ou entre em contato com o suporte técnico.',
    },
    {
      title: "Atividade não está disponível",
      content:
        "Verifique o prazo de disponibilidade com seu professor. Algumas atividades são liberadas apenas em datas específicas.",
    },
  ];

  return (
    <section className="tutorial-section">
      <div className="hero-banner-tutorial">
        <div className="hero-content-tutorial">
          <h1>Tutoriais das Plataformas Acadêmicas</h1>
          <p className="lead">Tudo o que você precisa saber sobre o SAAF e o Blackboard, em um só lugar.</p>
        </div>
      </div>
      
      <div className="container">
        <div className="platform-card">
          <div className="platform-header">
            <div className="platform-icon">
              <span>1</span>
            </div>
            <h2>SAAF Athon</h2>
          </div>
          
          <p className="platform-description">
            O SAAF Athon é a plataforma oficial da faculdade para realizar requerimentos, 
            obter declarações, realizar pagamentos e muito mais. Por lá, você também 
            acompanha toda sua jornada acadêmica.
          </p>
          
          <div className="features-section">
            <h3>Sua vida acadêmica em um só lugar:</h3>
            <ul className="features-grid">
              <li className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Notas</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">📅</span>
                <span>Faltas</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">⏰</span>
                <span>Grade Horária</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">🎓</span>
                <span>Curso e Semestre</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">🆔</span>
                <span>Carteirinha Estudantil</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">✨</span>
                <span>E muito mais!</span>
              </li>
            </ul>
            <div className="visual-guide">
            <img src='./img/saaf.png' alt='Painel do SAAF ATHON' className="guide-image" />
            <p className="image-caption">Visualização do painel acadêmico no SAAF</p>
          </div>
          </div>
          
          <div className="access-steps">
            <h3 className="steps-title">Como acessar o SAAF:</h3>
            <ol className="steps-list">
              <li className="step-item">
                <span className="step-number">1</span>
                <span>Vá para o <a href='https://saafapp.cscedu.com.br/login/athon' className="step-link">site de Login</a></span>
              </li>
              <li className="step-item">
                <span className="step-number">2</span>
                <span>Entre com seu R.A e Senha</span>
              </li>
              <li className="step-item">
                <span className="step-number">3</span>
                <span>Escolha o serviço que deseja utilizar</span>
              </li>
            </ol>
            <div className="success-message">
              <span className="success-icon">✅</span>
              <span>Pronto! Você está dentro do SAAF.</span>
            </div>
          </div>

          <div className="platform-card blackboard-card">
          <div className="platform-header">
            <div className="platform-icon">
              <span>2</span>
            </div>
            <h2>Blackboard Learn</h2>
          </div>
          
          <p className="platform-description">
            O Blackboard é o Ambiente Virtual de Aprendizagem (AVA) da faculdade, onde você encontra
            materiais de aula, atividades online, notas parciais, comunicação com professores
            e colegas, e todo o conteúdo complementar das disciplinas.
          </p>
          
          <div className="features-section">
            <h3>Principais funcionalidades:</h3>
            <ul className="features-grid">
              <li className="feature-item">
                <span className="feature-icon">📚</span>
                <span>Materiais de aula</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">📝</span>
                <span>Atividades e tarefas</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">💬</span>
                <span>Fóruns de discussão</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Notas parciais</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">📅</span>
                <span>Calendário acadêmico</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon">🎥</span>
                <span>Aulas gravadas</span>
              </li>
            </ul>
          </div>
          
          <div className="visual-guide">
            <img src='./img/blackboard.png' alt='Interface do Blackboard' className="guide-image" />
            <p className="image-caption">Visão geral da interface do Blackboard Learn</p>
          </div>
          
          <div className="access-steps">
            <h3 className="steps-title">Primeiro acesso ao Blackboard:</h3>
            <ol className="steps-list">
              <li className="step-item">
                <span className="step-number">1</span>
                <span>Acesse o <a href='https://faculdade.blackboard.com' className="step-link">portal do Blackboard</a></span>
              </li>
              <li className="step-item">
                <span className="step-number">2</span>
                <span>Utilize as mesmas credenciais do SAAF (R.A e senha)</span>
              </li>
              <li className="step-item">
                <span className="step-number">3</span>
                <span>Na página inicial, clique em "Meus Cursos"</span>
              </li>
              <li className="step-item">
                <span className="step-number">4</span>
                <span>Selecione a disciplina desejada</span>
              </li>
            </ol>
            <div className="success-message">
              <span className="success-icon">✅</span>
              <span>Pronto! Você pode agora acessar todos os materiais.</span>
            </div>
          </div>
          
          <div className="troubleshooting">
        <h3>Problemas comuns e soluções:</h3>
        <div className="accordion">
          {items.map((item, index) => (
            <div
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
            >
              <button className="accordion-button" onClick={() => toggleItem(index)}>
                {item.title}
                <span className="accordion-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
          
          <div className="cta-section">
            <img src='./img/estudantes-pulando.jpg' alt='Estudantes comemorando' className="cta-image" />
            <div className="cta-content">
              <h3>Precisa de ajuda?</h3>
              <p>Em caso de dúvidas, entre em contato com a secretaria ou o suporte técnico.</p>
              <button className="support-button">Falar com Suporte</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;