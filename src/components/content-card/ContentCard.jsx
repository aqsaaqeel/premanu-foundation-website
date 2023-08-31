import React from "react";
import "./ContentCard.css";

export const ContentCard = (prop) => {
  return (
    <div className="content-card" style={{backgroundColor: `${prop.color}`}}>
      <h2 className="content-card-title">{prop.heading}</h2>
      <div className="content-card-challenge">
        <h3 className="small-heading">{prop.smallHeading}</h3>
        <p className="content-card-para">{prop.paragraph}</p>
      </div>
      <div className="content-card-response">
        <h3>{prop.smallHeadingTwo}</h3>
        <ul>
          {prop.response.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{prop.endPara}</p>
      </div>
    </div>
  );
};
