import React from "react";
import "./Fellowship.css";
export const Fellowship = () => {
  return (
    <div className="fellowship-container">
      <h1 className="centered-heading">PREMANU FELLOWSHIP</h1>
      <div className="content">
        <p>
          Do you envision creating a fearless, inclusive, creative and fun space
          for children? If yes, apply for our fellowship programme.
        </p>
        <h2 className="fellowship-subheading">About the Fellowship</h2>
        <p>
          {" "}
          The Premanu Fellowship provides a platform for changemakers that would
          like to contribute to educational equity through community and school
          leadership development programmes. The fellows get an opportunity to
          work with the school committee, principals, teachers, and community
          people to bring systematic change in education. The fellows will work
          at schools while getting regular training, mentoring, and support from
          the Premanu Foundation.
        </p>
        <div className="fellowship-subcontainer">
          <h3 className="fellowship-h3">School Intervention</h3>
          <ul>
            <li>Onsite support</li>
            <li>Teacher's training and workshop</li>
            <li>Building as Learning Aid (BaLA)</li>
            <li>Library</li>
            <li>Smart Classes</li>
            <li>Playground</li>
            <li>Play to Learn Activities</li>
          </ul>
          <h3 className="fellowship-h3">Community Intervention</h3>
          <ul>
            <li>Community Learning Centres</li>
            <li>Remedial Classes</li>
            <li>Play to Learn Activities</li>
          </ul>
          <h3 className="fellowship-h3">Who can Apply</h3>
          <ol>
            <li>Passionate about working with Children</li>
            <li>Passionate about bringing about a change in Education</li>
            <li>Critical thinkers with an aptitude to solve problems</li>
            <li>Able to bring innovative ideas and take the leadership role</li>
            <li>
              Able to build relationships and strengthen partnerships with
              stakeholders
            </li>
          </ol>
          <h3 className="fellowship-h3">Selection Process</h3>
          <ol>
            <li>Stage 1: CV shortlisting</li>
            <li>Stage 2: Interview</li>
            <li>Stage 3: Final Selection and Offer Letter</li>
          </ol>
          <h3 className="fellowship-h3">Current Opening (Location)</h3>
          Churu District, Rajasthan
          <h3 className="fellowship-h3">Benefits</h3>
          <ul>
            <li>Stipend - 10,000 and Fooding</li>
            <li>Opportunity to explore a new region</li>
            <li>Learning Exchange Programme</li>
            <li>Mentorship from thematic Experts</li>
          </ul>
          <h3 className="fellowship-h3">How to Apply</h3>
          E-mail your CV and a cover letter to{" "}
          <a href="mailto:info@premanufoundation.org">
            info@premanufoundation.org
          </a>
        </div>
      </div>
    </div>
  );
};
