import "../../App.css";
import "./Interns.css"
export const InternCard = ({ title, description, imageUrl }) => {
  return (
    <div className="intern-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
