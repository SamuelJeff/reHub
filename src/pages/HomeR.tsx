import { IonPage } from "@ionic/react";
import "./HomeR.css";

const HomeR: React.FC = () => {
  return (
    <IonPage>
      <div className="containerR">
        <div className="header">
          <button className="exit-placeholder">Sair</button>
          <div className="logo-containerR">
              <img src="../public/minden.svg" alt="Logo Icon" className="logoMinden" />
            </div>
          <h2 className="page-title">Página inicial</h2>
        </div>

        

        <div className="menu-icons">
          <div className="icon-item">
            <div className="icon-placeholder">
            <img src="../public/calendar-clock.svg" alt="Logo Icon" className="logo" />
            </div>
            <span className="icon-label">
              Calendário<br></br>de atividades
            </span>
          </div>
          <div className="icon-item">
            <div className="icon-placeholder">
            <img src="../public/time-past.svg" alt="Logo Icon" className="logo" />
            </div>
            <span className="icon-label">
              Histórico de<br></br>Atividades
            </span>
          </div>
        </div>

        <div className="next-session">
          <div className="session-header">
            <span>Próxima Sessão Agendada</span>
            <button className="details-button">Detalhes</button>
          </div>

          <div className="image-container">Imagem</div>

          <div className="session-info">
            <strong>Grupo de apoio e reeducação</strong>
            <br></br>
            Data: 10/10/2024 - 14:00
          </div>
       
        </div>
        <button className="map-button">Ver no mapa</button>
        <button className="add-activity">Adicionar atividade</button>
      </div>
    </IonPage>
  );
};
export default HomeR;
