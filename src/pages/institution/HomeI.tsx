import { IonContent, IonPage } from "@ionic/react";
import "./HomeI.css"; // Certifique-se de que a nova classe CSS esteja incluída aqui
import { useHistory } from "react-router-dom";

const HomeI: React.FC = () => {
    const history = useHistory();
    const handleExitClick = () => {
        history.push('/loginI'); // Substitua '/exit' pelo caminho da sua próxima tela
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="containerHI">
                    <header className="headerHI">
                        <button className="exitButton" onClick={handleExitClick}>
                            <img
                                src="../public/exit-alt.svg"
                                alt="Logo Icon"
                                className="logoExit"
                            />Sair
                        </button>
                        <div className="logo-container">
                            <img
                                src="../../../public/minden.svg"
                                alt="Logo Icon"
                                className="logoMindenHI"
                            />
                        </div>
                        <div className="header-spacer"></div>
                    </header>

        

                    <div className="menu-button">
                        <div className="icon-placeholder">
                            <img
                                src="../../../public/relatorio.svg"
                                alt="Logo Icon"
                                className="logo"
                            /></div>
                        Relatórios
                    </div>

                    <section>
                        <h2 className="section-title">
                            <span className="icon-placeholder">
                                <img
                                    src="../../../public/perfil.svg"
                                    alt="Logo Icon"
                                    className="logo"
                                />
                            </span>
                            Reeducando
                        </h2>
                        <div className="cards-scroll">
                            <div className="cards-container">
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="person-image"></div>
                                    <div className="cardInfo">
                                        <span className="status-badge em-andamento">Em andamento</span>
                                        <h3>Rafael Miguel</h3>
                                        <p>Oficinas de conscientização</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <h2 className="section-title">
                            <span className="icon-placeholder">
                                <img
                                    src="../../../public/historia.svg"
                                    alt="Logo Icon"
                                    className="logo"
                                />
                            </span>
                            Sessões e Atividades
                        </h2>
                        <div className="cards-scroll">
                            <div className="cards-container">
                                <div className="card"> {/* Classe card aplicada */}
                                    <div className="activity-image"></div>
                                    <div className="cardInfo">
                                    <span className="status-badge em-andamento">Em aberto</span>
                                    <h3>Grupo de apoio e r...</h3>
                                    <p className="vagas-info">2 vagas disponíveis</p>
                                    </div>
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
