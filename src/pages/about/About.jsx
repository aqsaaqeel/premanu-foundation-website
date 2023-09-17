import { Team } from "../../components/team/Team";
import "./About.css";

// import { CardItem } from "../../components/carditem/CardItem";
export const About = () => {
  return (
    <div className="about-container">
      {console.log("yoy")}
      <h1>About Us</h1>
      <p className="about-det">
        Premanu Foundation, established in 2019 by two students from TISS (Tata
        Institute of Social Sciences), is a rapidly growing non-profit
        organization driven by a noble mission and unwavering commitment to
        child rights. In a remarkably short span of time, the organisation has
        made a significant impact, positively transforming the lives of over
        29,000 children. While currently active in five states, our aspirations
        transcend geographical boundaries as we envision a future where our
        efforts know no bounds.
      </p>
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
      <h1>Our Team</h1>
      <Team />
    </div>
  );
};
