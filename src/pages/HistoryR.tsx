import { IonContent, IonPage } from '@ionic/react'
import './HistoryR.css'

const HistoryR: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='containerH'>
                <div className="headerH">
            <div className="back-button-placeholder"></div>
            <h1>Histórico de Atividades</h1>
            <div className="menu-button-placeholder"></div>
        </div>

        <h2 className="title">Atividade</h2>

        <ul className="activity-list">
            <li className="activity-item">
                <div className="activity-info">
                    <div className="calendar-icon-placeholder"></div>
                    <div className="activity-details">
                        <span className="activity-name">Grupo de apoio e reeducação</span>
                        <span className="activity-date">15/09/2024</span>
                    </div>
                </div>
                <span className="activity-status status-progress">Em andamento</span>
            </li>

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