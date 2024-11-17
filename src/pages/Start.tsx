import { IonButton, IonContent, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importando useHistory
import './Start.css';

const Start: React.FC = () => {
  const history = useHistory(); // Criando a instância de history

  // Funções para redirecionar
  const handleInstituicaoClick = () => {
    history.push('/instituicao'); // Substitua '/ong' pelo caminho da sua próxima tela
  };

  const handleReeducandoClick = () => {
    history.push('/LoginR'); // Substitua '/reeducando' pelo caminho da sua próxima tela
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="background">
          {/* Círculos decorativos */}
          <div className="circle circle-top-small"></div>
          <div className="circle circle-top"></div>
          <div className="circle circle-bottom"></div>
          <div className="circle circle-bottom-small"></div>
          {/* Conteúdo principal */}
          <div className="container">
            <div className="logo-container">
              <img src="../public/logo.png" alt="Logo Icon" className="logo-icon" />
            </div>
            <div className="buttons">
            <button className="custom-button" onClick={handleInstituicaoClick}>
                Entrar como instituição
              </button>
              <button className="custom-button" onClick={handleReeducandoClick}>
                Entrar como Reeducando
              </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Start;