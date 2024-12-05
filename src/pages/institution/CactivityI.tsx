import { IonContent, IonPage } from '@ionic/react'
import './CactivityI.css'
import { useState } from 'react';
import { useHistory } from 'react-router';

const CactivityI: React.FC = () =>{
    const history = useHistory();
    const [activityTitle, setActivityTitle] = useState(''); // Renomeado para "titulo"
    const [activityDescription, setActivityDescription] = useState(''); // Renomeado para "descricao"
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(''); // Novo estado para "data_fim"
    const [statusMessage, setStatusMessage] = useState(''); // Estado para a mensagem de status

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const formData = {
            titulo: activityTitle, // Mapeado para "titulo"
            descricao: activityDescription, // Mapeado para "descricao"
            data_inicio: startDate, // Mapeado para "data_inicio"
            data_fim: endDate // Mapeado para "data_fim"
        };
        
        try {
            const response = await fetch('http://54.85.147.83:8000/api/atividades', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar os dados: ' + response.statusText);
            }

            const data = await response.json();
            console.log('Resposta da API:', data);
            setStatusMessage('Formulário enviado com sucesso!'); // Atualiza a mensagem de status
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            setStatusMessage('Erro ao enviar o formulário. Tente novamente.'); // Mensagem de erro
        }
    };

    const handleBackHomeI = () => {
        history.push('/homeI');
    }

    return(
        <IonPage>
            <IonContent fullscreen>
                <div className='containerCA'>
                <div className="header">
        <div className="back-button"><img
              src="../public/angle-left.svg"
              alt="Logo Icon"
              className="back"
              onClick={handleBackHomeI}
            /></div>
        <h1 className="title">Crie sua atividade</h1>
    </div>

    <div className="organization-card">
        <div className="org-image-container">
            <div className="edit-icon">
            </div>
        </div>
        <div className="org-info">
            <h2>Centro de Referência em Atendimento à Mulher</h2>
            <p>R. Antônio de Brito, 356 - Água Fria, Recife - PE</p>
        </div>
    </div>

    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="activityTitle">Título da Atividade:</label>
                            <input
                                type="text"
                                id="activityTitle"
                                value={activityTitle}
                                onChange={(e) => setActivityTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="activityDescription">Descrição da Atividade:</label>
                            <textarea
                                id="activityDescription"
                                value={activityDescription}
                                onChange={(e) => setActivityDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="startDate">Data de Início:</label>
                            <input
                                type="datetime-local" // Alterado para datetime-local
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate">Data de Fim:</label>
                            <input
                                type="datetime-local" // Alterado para datetime-local
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    
                    {statusMessage && ( // Renderiza a mensagem de status se existir
                        <div className="status-message">
                            {statusMessage}
                        </div>
                    )}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default CactivityI