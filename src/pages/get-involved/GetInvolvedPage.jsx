import React from 'react';
import "./GetInvolvedPage.css"
const GetInvolvedPage = () => {
  return (
    <div className="container">
      <section className="donate-section">
        <h2>Donate Us</h2>
        <p>
          Imagine a world where every child has the opportunity to embrace a happy childhood and build a bright future.
          Since 2019, the Premanu Foundation has been tirelessly working across multiple states in India, dedicated to making
          this vision a reality. With our ongoing presence in 5 states, we have already touched the lives of over 29,000 children,
          providing them with much-needed support and hope.
        </p>
        <p>
          We urge you to join us in this incredible journey of transforming lives. Together, we can give underprivileged children
          the gift of a meaningful childhood. Your contribution holds the power to extend our reach even further, enabling us to make
          a significant difference in the lives of more children and women from the poorest and most marginalized communities.
        </p>
        <p>
          By donating to the Premanu Foundation, you become a catalyst for change. Your generosity can provide specific interventions
          that address the unique needs of these vulnerable communities, offering them a chance to overcome adversity and thrive.
        </p>
        <p>
          Together, let's rewrite the future for these children and create a world where their dreams can flourish.
        </p>
        <button className="donate-button">DONATE TODAY AND BE A PART OF THIS TRANSFORMATIVE MOVEMENT</button>
        <div className="bank-details">
          <h4>Bank A/C Details</h4>
          <p>A/C N0. 5612992354</p>
          <p>IFSC Code - KKBK0004591</p>
          <p>Bank Name - Kotak</p>
          <p>UPI ID - premanu@kotak</p>
        </div>
      </section>

      <section className="volunteer-section">
        <h2>Volunteer & Internship</h2>
        <p>
          Embarking on a journey with Premanu is a special opportunity for transformative growth, where you can make a profound
          impact where it matters the most. Prepare to be inspired as you contribute to creating a better world through meaningful
          work and embark on a life-changing learning adventure.
        </p>
        {/* Volunteer and internship content here */}
      </section>

      <section className="corporate-section">
        <h2>Corporate Partnership</h2>
        <p>
          We extend a special invitation to corporates to join forces with us and become our valued partners in creating an
          environment that fosters happy childhoods, where every child has the opportunity to thrive. As part of your Corporate
          Social Responsibility (CSR) initiatives, we encourage companies to collaborate with us in our mission.
        </p>
        {/* Corporate partnership content here */}
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        {/* Contact form here */}
      </section>
    </div>
  );
};

export default GetInvolvedPage;
