import "../../App.css";
import "./Services.css"
export const Services = () =>{
    return(
        <>
        <h1 className="services">Donate</h1>
        <section>
        <p className="donation-about">
          Imagine a world where every child has the opportunity to embrace a happy childhood and build a bright future.
          Since 2019, the Premanu Foundation has been tirelessly working across multiple states in India, dedicated to making
          this vision a reality. With our ongoing presence in 5 states, we have already touched the lives of over 29,000 children,
          providing them with much-needed support and hope.
        </p>
        <p className="donation-about">
          We urge you to join us in this incredible journey of transforming lives. Together, we can give underprivileged children
          the gift of a meaningful childhood. Your contribution holds the power to extend our reach even further, enabling us to make
          a significant difference in the lives of more children and women from the poorest and most marginalized communities.
        </p>
        <p className="donation-about">
          By donating to the Premanu Foundation, you become a catalyst for change. Your generosity can provide specific interventions
          that address the unique needs of these vulnerable communities, offering them a chance to overcome adversity and thrive.
        </p>
        <p className="donation-about">
          Together, let's rewrite the future for these children and create a world where their dreams can flourish.
        </p>
        <div className="donation-details">
        <button className="donate-button">DONATE TODAY AND BE A PART OF THIS TRANSFORMATIVE MOVEMENT</button>
        <div className="bank-details">
          <h2>Bank A/C Details</h2>
          <p>A/C N0. 5612992354</p>
          <p>IFSC Code - KKBK0004591</p>
          <p>Bank Name - Kotak</p>
          <p>UPI ID - premanu@kotak</p>
        </div>
        </div>
        </section>
        </>
    )
}