import { IonPage } from "@ionic/react";
import "./ActivityR.css";
import Activity from "../components/Activity"

const ActivityR: React.FC = () => {
  return (
    <IonPage>
      <header className="header">
        <div className="header-left">
            <button className="back-button"><img
              src="../public/angle-left.svg"
              alt="Logo Icon"
              className="back"
            /></button>
           
        </div>
        <span className="header-title">Atividades disponíveis</span>
        <div className="header-menu"></div>
    </header>

    <div className="activity-list">

        <Activity name="instituição 1" activity="Grupo de apoio e reeducação"></Activity>
        <Activity name="instituição 2" activity="Curso de reeducação"></Activity>
        <Activity name="instituição 3" activity="Acompanhamento psicológico"></Activity>
        <Activity name="instituição 4" activity="Oficinas de conscientização"></Activity>
        <Activity name="instituição 5" activity="Atividade: Grupo de reflexão"></Activity>
</div>
    <button className="see-more-button">
        Ver Mais
    </button>
    <div></div>
    </IonPage>
  );
};
export default ActivityR;