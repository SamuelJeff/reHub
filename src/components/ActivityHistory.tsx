import './ActivityHistory.css';

interface ContainerProps {
  name: string;
  date: string;
}

const ActivityHistory: React.FC<ContainerProps> = ({ name, date }) => {
  return (
    <li className="activity-item">
    <div className="activity-info">
        <div className="calendar-icon-placeholder"></div>
        <div className="activity-details">
            <span className="activity-name">{name}</span>
            <span className="activity-date">{date}</span>
        </div>
    </div>
    <span className="activity-status status-progress">Em andamento</span>
</li>
  );
};

export default ActivityHistory;