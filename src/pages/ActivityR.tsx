import { IonPage } from "@ionic/react";
import "./ActivityR.css";

const ActivityR: React.FC = () => {
  return (
    <IonPage>
      <header className="header">
        <div className="header-left">
            <div className="back-button"></div>
            <span className="header-title">Atividades disponíveis</span>
        </div>
        <div className="header-menu"></div>
    </header>

    <div className="activity-list">
        <div className="activity-item">
            <div className="activity-image"></div>
            <div className="activity-info">
                <div className="activity-title">Centro de Referência em Atendimento...</div>
                <div className="activity-subtitle">Atividade: Grupo de apoio e reeducação</div>
            </div>
        </div>

        <div className="activity-item">
            <div className="activity-image"></div>
            <div className="activity-info">
                <div className="activity-title">Instituto Maria da Penha</div>
                <div className="activity-subtitle">Atividade: Curso de reeducação</div>
            </div>
        </div>

        <div className="activity-item">
            <div className="activity-image"></div>
            <div className="activity-info">
                <div className="activity-title">Patrulha Maria da Penha</div>
                <div className="activity-subtitle">Atividade: Acompanhamento psicológico</div>
            </div>
        </div>

        <div className="activity-item">
            <div className="activity-image"></div>
            <div className="activity-info">
                <div className="activity-title">Centro de Referência Clarice Lispector</div>
                <div className="activity-subtitle">Atividade: Oficinas de conscientização</div>
            </div>
        </div>

        <div className="activity-item">
            <div className="activity-image"></div>
            <div className="activity-info">
                <div className="activity-title">Programa Homens de Palavra</div>
                <div className="activity-subtitle">Atividade: Grupo de reflexão</div>
            </div>
        </div>
    </div>

    <div className="see-more-button">
        Ver Mais
    </div>
    </IonPage>
  );
};
export default ActivityR;