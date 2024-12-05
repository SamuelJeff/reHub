import { IonPage, IonContent } from "@ionic/react";
import "./SectionI.css";
import { useHistory } from "react-router-dom";
import Volunteer from "../../components/Volunteer";

const SectionI: React.FC = () => {
  const history = useHistory();

  const handleBackHomeI = () => {
    history.push("/homeI");
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="containerSI">
        <div className="status-bar">
    </div>

    <header className="header">
        <div className="back-buttonSI">
        <img
              src="../public/angle-left.svg"
              alt="Logo Icon"
              className="back"
              onClick={handleBackHomeI}
            />
        </div>
        <div className="session-info">
            <span>Sua sessão</span>
            <span>0/2</span>
        </div>
    </header>

    <div className="main-card">

    </div>

    <div className="group-info">
        <h2 className="group-title">Grupo de apoio e reeducação</h2>
        <div className="settings-icon"><img
              src="../public/engrenagem.svg"
              alt="Logo Icon"
              className="settings"
            /></div>
        <p className="address">R. Antônio de Brito, 356 - Água Fria, Recife - PE</p>
        <p className="description">O Centro de Referência em Atendimento à Mulher (CRAM) é uma instituição que oferece apoio e recursos para mulheres em situação de violência de gênero. Além de atender as vítimas, o CRAM também foca na reabilitação dos agressores, promovendo a conscientização sobre a violência e suas consequências.</p>
        <div className="duration">
            <div className="duration-icon"><img
                src="../public/calendar-clock.svg"
                alt="Logo Icon"
                className="logoD"
              /></div>
            Tempo de duração: 2 semanas
        </div>
    </div>

    <h3 className="applications-title">Aplicações de voluntários</h3>

  <Volunteer name={"José Antônio"} idade={"27"}/>

<Volunteer name={"Diego Oliveira"} idade={"34"}/>

 <Volunteer name={"Thiago Almeida"} idade={"29"}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SectionI;
