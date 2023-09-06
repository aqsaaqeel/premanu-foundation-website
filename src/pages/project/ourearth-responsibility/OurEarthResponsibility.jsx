import "./OurEarthResponsibility.css";
import { PlainCardItem } from "../../../components/plaincarditem/PlainCardItem";
export const OurEarthResponsibility = () => {
  return (
    <div className="education-container">
      <h1>Our Earth-Our Responsibility</h1>
      <p className="italic-blue">${`
        Play2Learn - Toybank In August 2021, we collaborated with Toybank -
        Development through Play to ensure children's continued learning through
        play even during COVID-19 and lockdown. This initiative also ensures
        children's socio-emotional development and mental well-being. Under this
        initiative, currently, we are supporting more than 1,000 children from
        Mirzapur (U.P) and Churu (Rajasthan).`}
      </p>
      <div className="plaincards-container">
        <PlainCardItem
          image="images/img-7.jpg"
          heading="Play2Learn"
          details="Learning through play"
        />
        <PlainCardItem
          image="images/img-2.jpg"
          heading="Fun while learning"
          details="Learning through Creative and Fun activities"
        />
        <PlainCardItem
          image="images/img-3.jpg"
          heading="Activities"
          details="Learning activities by Children"
        />
        <PlainCardItem
          image="images/img-2.jpg"
          heading="Creating artworks"
          details="Beautiful artwork by children on Independence day"
        />
      </div>
    </div>
  );
};
