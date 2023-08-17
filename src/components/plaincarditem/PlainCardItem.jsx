import "./PlainCardItem.css";
export const PlainCardItem = (props) => {
  return (
    <div className="plain-card">
        <img src={props.image} className="card-img" alt ="" />
        <div className="plain-card-body">
            <h1 className="plain-card-title">{props.heading}</h1>
            <p className="plain-card-sub-title">{props.details}</p>
        </div>
    </div>
  )
};
