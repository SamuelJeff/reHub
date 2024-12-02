import { IonContent, IonPage } from "@ionic/react";
import "./HomeI.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const HomeI: React.FC = () => {
    const history = useHistory();
    const handleExitClick = () => {
        history.push('/loginI'); // Substitua '/exit' pelo caminho da sua próxima tela
    };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="containerHI">
        <header className="header">
        <button className="exitButton" onClick={handleExitClick}><img
              src="../public/exit-alt.svg"
              alt="Logo Icon"
              className="logoExit"
            />Sair</button>
        <div className="header-spacer"></div>
    </header>

    <div className="logo-area">
    <div className="logo-container">
              <img
                src="../../../public/minden.svg"
                alt="Logo Icon"
                className="logoMinden"
              />
            </div>
        <a href="#" className="profile-btn">Ver perfil</a>
    </div>

    <div className="menu-button">
        <div className="icon-placeholder"></div>
        Relatórios
    </div>

    <section>
        <h2 className="section-title">
            <span className="icon-placeholder"></span>
            Reeducando
        </h2>
        <div className="cards-scroll">
            <div className="cards-container">
                <div className="person-card">
                    <div className="person-image"></div>
                    <div className="person-info">
                        <span className="status-badge em-andamento">Em andamento</span>
                        <h3>Rafael Miguel</h3>
                        <p>Oficinas de conscientização</p>
                    </div>
                </div>
                <div className="person-card">
                    <div className="person-image"></div>
                    <div className="person-info">
                        <span className="status-badge nao-iniciado">Não iniciado</span>
                        <h3>Lucas Miguel</h3>
                        <p>Cursos de reeducação</p>
                    </div>
                </div>
                <div className="person-card">
                    <div className="person-image"></div>
                    <div className="person-info">
                        <span className="status-badge em-andamento">Em andamento</span>
                        <h3>Thiago Miguel</h3>
                        <p>Acompanhamento psicológico</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <h2 className="section-title">
            <span className="icon-placeholder"></span>
            Sessões e Atividades
        </h2>
        <div className="cards-scroll">
            <div className="cards-container">
                <div className="activity-card">
                    <span className="status-badge em-andamento">Em aberto</span>
                    <span className="status-counter">7</span>
                    <div className="activity-image"></div>
                    <h3>Grupo de apoio e r...</h3>
                    <p className="vagas-info">2 vagas disponíveis</p>
                </div>
                <div className="activity-card">
                    <span className="status-badge finalizado">Finalizado</span>
                    <div className="activity-image"></div>
                    <h3>Acompanhamento psicológico</h3>
                </div>
                <div className="activity-card">
                    <span className="status-badge finalizado">Finalizado</span>
                    <div className="activity-image"></div>
                    <h3>Oficinas</h3>
                </div>
            </div>
        </div>
    </section>

    <button className="add-activity-btn">+</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeI;
