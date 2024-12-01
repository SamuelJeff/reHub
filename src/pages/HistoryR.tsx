import { IonContent, IonPage } from '@ionic/react'
import './HistoryR.css'
import { useHistory } from 'react-router-dom';
import ActivityHistory from '../components/ActivityHistory';

const HistoryR: React.FC = () => {
    const history = useHistory();

    const handleBackHomeR = () => {
        history.push('/homeR');
    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='containerH'>
                <div className="headerH">
      
            <button className="back-button" onClick={handleBackHomeR}>
              <img
                src="../public/angle-left.svg"
                alt="Logo Icon"
                className="back"
              />
            </button>
            <span className="header-title">Histórico de Atividades</span>
          </div>

        <h2 className="title">Atividade</h2>

        <ul className="activity-list">
           <ActivityHistory name={'teste'} date={'teste'}></ActivityHistory>

            <li className="activity-item">
                <div className="activity-info">
                    <div className="calendar-icon-placeholder"></div>
                    <div className="activity-details">
                        <span className="activity-name">Sessão Psicológica</span>
                        <span className="activity-date">10/09/2024</span>
                    </div>
                </div>
                <span className="activity-status status-completed">Concluída</span>
            </li>
        </ul>
              
                </div>
            </IonContent>
        </IonPage>
    )
}
export default HistoryR;