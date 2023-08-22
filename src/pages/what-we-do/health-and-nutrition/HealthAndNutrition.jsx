import "./HealthAndNutrition.css";

export const HealthAndNutrition = () => {
  return (
    <div className="education-container">
      <h1>Health and Nutrition</h1>
      <h2>No child is born to die</h2>
      <div className="image-container">
        <img className="work-image" alt="child" src="images/img-6.jpg" />
        {/* <div className="image-text">No child is born to die</div> */}
      </div>

      <p className="education-content clear-float">
        One in two children below 5 years of age is anaemic, and one in three
        children are stunted as well underweight in the country. Further, 34
        children in every 100 children die before completing their 1st birthday
        (SRS, 2018). These statistics are alarming and seek our attention to
        ensure that every child lives a healthy life.
      </p>
      <ul className="education-ul">
        ​
        <li className="education-li">
          <h3 education-card-heading>Training of frontline workers</h3>
          <div>
          Regular training cum meeting with ANM, Aanganwadi, and ASHA workers to build their capacity and enhance their skills so that they can effectively disseminate health and nutrition-related information to community members
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Community Meeting</h3>
          <div>
          Creating awareness about nutrition and health-related behaviours through community meetings
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Adolescents Girls Meeting</h3>
          <div>
          Support to ICDS and Health departments in organizing regular adolescent meetings
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Support in community level activities</h3>
          <div>
          Field level support to health and ICDS stakeholders in organizing and strengthening community-level activities such as village health, sanitation & nutrition day (VHSND), Annprashan day, and so on
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Support to Anganwadi centers</h3>
          <div>
          We ensure that children enrolled in Aanganwadi centers receive nutritious food
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Linking outreach and facility</h3>
          <div>
          For the good health and well-being of children, we ensure to establish a link between community and health facility{" "}
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Co-ordination among departments</h3>
          <div>
          We ensure to establish effective coordination among all concerned departments such as health, ICDS, education, sanitation, village panchayat etc{" "}
          </div>{" "}
        </li>
      </ul>
    </div>
  );
};
