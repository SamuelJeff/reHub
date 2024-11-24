import { IonPage } from "@ionic/react";
import { useHistory } from 'react-router-dom';
import "./HomeR.css";

const HomeR: React.FC = () => {
  const history = useHistory(); // Criando a instância de history

    // Funções para redirecionar
    const handleAddActivityClick = () => {
        history.push('/activityR'); // Substitua '/add-activity' pelo caminho da sua próxima tela
    };

    const handleExitClick = () => {
        history.push('/loginR'); // Substitua '/exit' pelo caminho da sua próxima tela
    };

    const handleDetailsClick = () => {
        history.push('/details'); // Substitua '/details' pelo caminho da sua próxima tela
    };

  return (
    <IonPage>
      <div className="containerR">
        <div className="headerR">
          <button className="exit-placeholder" onClick={handleExitClick}>Sair</button>
          <div className="logo-containerR">
            <img
              src="../public/minden.svg"
              alt="Logo Icon"
              className="logoMinden"
            />
          </div>
          <h2 className="page-title">Página inicial</h2>
        </div>

        <div className="menu-icons">
          <div className="icon-item">
            <div className="icon-placeholder">
              <img
                src="../public/calendar-clock.svg"
                alt="Logo Icon"
                className="logo"
              />
            </div>
            <span className="icon-label">
              Calendário<br></br>de atividades
            </span>
          </div>
          <div className="icon-item">
            <div className="icon-placeholder">
              <img
                src="../public/time-past.svg"
                alt="Logo Icon"
                className="logo"
              />
            </div>
            <span className="icon-label">
              Histórico de<br></br>Atividades
            </span>
          </div>
        </div>

        <div className="next-session">
          <div className="session-header">
            <span>Próxima Sessão Agendada</span>
            <button className="details-button" onClick={handleDetailsClick}>Detalhes</button>
          </div>

          <div className="image-container">Imagem</div>

          <div className="session-info">
            <strong>Grupo de apoio e reeducação</strong>
            <br></br>
            Data: 10/10/2024 - 14:00
          </div>
        </div>
        <button
          className="map-button"
          onClick={() => window.open("https://www.google.com/maps", "_blank")}
        >
          Ver no mapa
        </button>
        <button className="add-activity" onClick={handleAddActivityClick}>Adicionar atividade</button>
      </div>
    </IonPage>
  );
};
export default HomeR;