import "./ScholarshipProgram.css";
import { Link } from "react-router-dom";
export const ScholarshipProgram = () => {
  return (
    <div className="education-container">
      <h1>Premanu Scholrship Program</h1>
      <p className="italic-blue">
        {`
        The Premanu Scholarship Program is a heartfelt initiative aimed at supporting underprivileged students in their educational journey. Through this program, we provide crucial assistance to students in need, offering study materials, covering tuition fees, and providing valuable mentorship. Our mission is to ensure that financial constraints do not hinder a student's access to quality education. By supplying necessary study resources and alleviating the burden of educational expenses, we empower these students to focus on their academic pursuits without worry. Moreover, the mentorship component of the program plays a pivotal role in guiding and inspiring the students towards their goals. We believe that education is a powerful tool for uplifting individuals and communities, and with the Premanu Scholarship Program, we aim to create a positive and lasting impact on the lives of deserving students, opening doors to a brighter future filled with opportunities and possibilities.`}
      </p>
      <Link to ="/">Click here to apply</Link>
    </div>
  );
};
