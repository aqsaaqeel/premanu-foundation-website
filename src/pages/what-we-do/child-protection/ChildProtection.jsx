import "./ChildProtection.css";

export const ChildProtection = () => {
  return (
    <div className="education-container">
      <h1>Child Protection</h1>
      <h2>Educate the child, do not beat</h2>
      <div className="image-container">
        <img className="work-image" alt="child" src="images/img-5.jpg" />
        {/* <div className="image-text">No child is born to die</div> */}
      </div>

      <p className="education-content clear-float">
        According to the Ministry of Women and Child Development 2007 reports,
        69% of children are physically abused, 53% face sexual abuse, and 49%
        face emotional abuse. Further, 1 in 11 children are child labour
        (census, 2011) and approximately 150 children go missing every day in
        India (NCRB, 2016). These statistics show the severity of the problem
        and seek us to ensure the protection of every child.
      </p>
      <ul className="education-ul">
        ​
        <li className="education-li">
          <h3 education-card-heading>Building Awareness</h3>
          <div>
            We create awareness around different forms of violence, possible
            risk and its impact on health, learning, and behaviour{" "}
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Eliminating Societal Abuse</h3>
          <div>
          We work to eliminate societal abuse like child marriage, child labour, child trafficking etc
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Children’s Groups and Committees</h3>
          <div>
          We create children’s groups and committees at local level to ensure the protection of children. It is based on the concept of children led approach
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Empowering Children</h3>
          <div>
          Through various sessions we help empower children, encourage child participation and motivate them to discuss and find the solution of their problems
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Training</h3>
          <div>
          We conduct training of professionals and concerned stakeholders to build their capacity and enhance their skills to deal with children effectively
          </div>{" "}
        </li>
        <li className="education-li">
          <h3 education-card-heading>Co-ordination with District & State level Child Protection Unit</h3>
          <div>
          We co-ordinate with child protection units to effectively implement the child protection policies and programmes{" "}
          </div>{" "}
        </li>
      </ul>
    </div>
  );
};
