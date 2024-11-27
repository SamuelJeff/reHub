import './Activity.css';

interface ContainerProps {
  name: string;
  activity: string;
}

const Activity: React.FC<ContainerProps> = ({ name, activity }) => {
  return (
    <div className="activity-item">
            <div className="activity-image"></div>
            <div className="activity-info">
                <div className="activity-title">{name}</div>
                <div className="activity-subtitle">Atividade: {activity}</div>
            </div>
        </div>
  );
};

export default Activity;
