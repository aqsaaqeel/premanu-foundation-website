import "./PlainCards.css";
import { PlainCardItem } from "../plaincarditem/PlainCardItem";
export const PlainCards = () => {
  return (
    <div className="plaincards">
      <h1>Our impact since 2019</h1>
      <div className="plaincards-container">
        <PlainCardItem
          image="images/img-7.jpg"
          heading="29000+"
          details="CHILDREN BENEFITTED OVERALL"
        />
        <PlainCardItem
          image="images/img-2.jpg"
          heading="12000+"
          details="CHILDREN BENEFITTED FORM EDUCATION PROJECT"
        />
        <PlainCardItem
          image="images/img-3.jpg"
          heading="11000+"
          details="CHILDREN BENEFITTED FROM HEALTH & NUTRITION PROJECT"
        />
        <PlainCardItem
          image="images/img-2.jpg"
          heading="6000+"
          details="CHILDREN BENEFITTED FROM CHILD PROTECTION PROJECT"
        />
        <PlainCardItem
          image="images/img-5.jpg"
          heading="6000+"
          details="CHILDREN BENEFITTED FROM CHILD PROTECTION PROJECT"
        />
      </div>
    </div>
  );
};
