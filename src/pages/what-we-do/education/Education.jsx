import "./Education.css";

export const Education = () => {
  return (
    <div className="about-container">
      {console.log("yoy")}
      <h1>Education</h1>
      <h2>Vision</h2>
      <p>{`“Empower every child of the world to become a change agent (Leader) of development.”`}</p>
      <h2>Mission</h2>
      <p>
        <ul className="about-ul">
          ​
          <li className="about-li">
            Organize all stakeholders on a single platform, including children,
            community people, local level committees and institutions.
          </li>
          ​
          <li className="about-li">
            Educate and involve all stakeholders about child rights, challenges
            and developmental barriers that children face.{" "}
          </li>
          ​
          <li className="about-li">
            Inspire all stakeholders to identify the challenges children face
            and work together to address those challenges.
          </li>
        </ul>
      </p>
    </div>
  );
};
