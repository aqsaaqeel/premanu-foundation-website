import "../../App.css";
import { CardItem } from "../../components/carditem/CardItem";
export const Projects = () => {
  return (
    <>
      {" "}
      <div className="cards">
        <h1>Our Projects </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-9.jpg"
                text="Play2Learn - Toybank"
                label="Play2Learn"
                path="/play2learn"
              />
              <CardItem
                src="images/img-2.jpg"
                text="SCHOOL & COMMUNITY LEADERSHIP DEVELOPMENT PROJECT"
                label="School & community"
                path="/school-and-community"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-2.jpg"
                text="Our Earth is our responsibilityand no one else's"
                label="Our Earth-Our Responsibility"
                path="/earth-responsibility"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Our scholarship program which is very beneficial to students."
                label="Premanu Scholarship Program"
                path="/premanu-scholarship"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Taking a step to help the humanity"
                label="A Step towards Humanity"
                path="/step-humanity"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
