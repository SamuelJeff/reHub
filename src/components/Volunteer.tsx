import './Volunteer.css';

interface ContainerProps {
  name: string;
  idade: string;
}

const Volunteer: React.FC<ContainerProps> = ({ name, idade}) => {
  return (
    <div className="volunteer-card">
    <div className="volunteer-image"></div>
    <div className="volunteer-info">
        <div className="volunteer-name">{name}</div>
    </div>
    <div className="volunteer-age">{idade} anos</div>
    <div className="action-buttons">
        <div className="action-button-accept"><img
            src="../public/check.svg"
            alt="Logo Icon"
            className="logoCheck"
          /></div>
        <div className="action-button-reject"><img
            src="../public/reject.svg"
            alt="Logo Icon"
            className="logoCheck"
          /></div>
    </div>
</div>
  );
};

export default Volunteer;