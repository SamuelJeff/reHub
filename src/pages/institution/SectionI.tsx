import { IonContent, IonPage } from "@ionic/react";
import "./SectionI.css";
import { useHistory } from "react-router-dom";

const SectionI: React.FC = () => {
  const history = useHistory();

const handleBackHome = () => {
    history.push("/homeI");
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="sectionI">
          <header className="header">
            <div className="back-button">
              <button className="back-buttonL">
                <img
                  src="../public/angle-left.svg"
                  alt="Logo Icon"
                  className="back"
                  onClick={handleBackHome}
                />
              </button>
            </div>
            <div className="session-info">
              <span>Sua sessão</span>
              <span>0/2</span>
            </div>
          </header>

          <div className="main-card"></div>

          <div className="group-info">
            <h2 className="group-title">Grupo de apoio e reeducação</h2>
            <div className="settings-icon"></div>
            <p className="address">
              R. Antônio de Brito, 356 - Água Fria, Recife - PE
            </p>
            <p className="description">
              O Centro de Referência em Atendimento à Mulher (CRAM) é uma
              instituição que oferece apoio e recursos para mulheres em situação
              de violência de gênero. Além de atender as vítimas, o CRAM também
              foca na reabilitação dos agressores, promovendo a conscientização
              sobre a violência e suas consequências.
            </p>
            <div className="duration">
              <div className="duration-icon"></div>
              Tempo de duração: 2 semanas
            </div>
          </div>

          <h3 className="applications-title">Aplicações de voluntários</h3>

          <div className="volunteer-card">
            <div className="volunteer-image"></div>
            <div className="volunteer-info">
              <div className="volunteer-name">José Antônio</div>
              <div className="volunteer-location">Água Fria, Recife</div>
            </div>
            <div className="volunteer-age">27 anos</div>
            <div className="action-buttons">
              <div className="action-button-accept"></div>
              <div className="action-button-reject"></div>
            </div>
          </div>

          <div className="volunteer-card">
            <div className="volunteer-image"></div>
            <div className="volunteer-info">
              <div className="volunteer-name">Diego Oliveira</div>
              <div className="volunteer-location">Santo Amaro, Recife</div>
            </div>
            <div className="volunteer-age">34 anos</div>
            <div className="action-buttons">
              <div className="action-button-accept"></div>
              <div className="action-button-reject"></div>
            </div>
          </div>

          <div className="volunteer-card">
            <div className="volunteer-image"></div>
            <div className="volunteer-info">
              <div className="volunteer-name">Thiago Almeida</div>
              <div className="volunteer-location">Encruzilhada, Recife</div>
            </div>
            <div className="volunteer-age">29 anos</div>
            <div className="action-buttons">
              <div className="action-button-accept"></div>
              <div className="action-button-reject"></div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SectionI;
