import React from "react";
import "./Humanitarian.css"; // Make sure to import your styles
import { ContentCard } from "../../../components/content-card/ContentCard";
export const Humanitarian = () => {
  const content = [
    {
      heading: "Health",
      smallHeading: "The Challenge:",
      paragraph:
        "Although we all are affected by the global pandemic Covid-19, people from marginalized sections face the brunt of it. Due to the non-accessibility to health care infrastructures and preventive measures, they are more prone to get infected from Covid-19. As of 12th July 2021, India has more than three crores confirmed cases, more than four lakh active cases, and more than four lakh individuals who died from covid-19.",
      smallHeadingTwo: "Our Response:",
      response: [
        "Distribute N95 masks and handwashing soap among people from rural areas",
        "Distribute necessary medicines among people from marginalized sections",
        "Build awareness about the preventive measures among people",
        "Build awareness and motivating people to take the covid-19 vaccine",
      ],
      endPara:
        "So far, Premanu Foundation has distributed more than thousands of N95 masks and soap, along with necessary medicines",
      color: "yellow"
      },
    {
      heading: "Hunger",
      smallHeading: "The Challenge:",
      paragraph:
        "The value of good nutrition is well recognized during the global pandemic COVID-19 and was considered as the best way to keep the immune system strong and protect from Covid-19. However, with the closure of economic activities owing lockdown amidst the global pandemic Covid-19, millions of people lost their job and business. This resulted in a huge hunger crisis. The Global Hunger Index 2020 ranks India 94th among 107 countries. The global pandemic Covid-19 has exacerbated hunger and poverty worldwide especially in India. The World Bank estimates that 71 million people will be pushed into extreme poverty across the globe as a result of the global pandemic Covid-19. ",
      smallHeadingTwo: "Our Response:",
      response: [
        "Premanu Foundation took the initiative to reach at least a thousand families to help them to fight against hunger",
        "by providing essential groceries.",
        "by supporting families to start their businesses such as dairy businesses, small general stores, and so on.",
      ],
      endPara: "",
      color: "red"
    },
    {
      heading: "Education",
      smallHeading: "The Challenge:",
      paragraph:`As all the educational institutions are shut down due to the lockdown owing to the global pandemic, children have lost all space to play, explore, and express their feelings. A new phenomenon, that of the ‘digital divide’ was also observed due to the shift towards the online mode of education. The less privileged children could not get access to their online classes as they did not have the luxury to have a good internet connection and smartphones. Due to the pandemic, over 1.5 million schools across India are closed, impacting approximately 286 million students (UNICEF, May 2021).`,
      smallHeadingTwo: "Our Response:",
      response: [
        "To bridge the digital divide and ensure continuity of education, we took the initiative to support children from marginalized sections by providing –",
        "Education at their doorstep through distributing learning kits.",
        "House-to-house visits to assist children in their education.",
        "Remote mentoring."
      ],
      endPara: "",
      color: "green"
    },
    {
      heading: "Child Protection",
      smallHeading: "The Challenge:",
      paragraph:`There was a huge spike in the cases of violence against children. The magnitude of the issue can be understood from the fact that during lockdown amidst the first wave of COVID-19, the Childline India helpline received more than 92,000 SOS calls in just 11 days (between March 20-31) asking for protection from abuse and violence (The Hindu, 2020). Another report titled “Child Sexual Abuse Material in India", released by The India Child Protection Fund (ICPF) set up in January 2020, documented the disturbing reality of our society showing a 95% increase in child porn search between March 24- March 26 amidst lockdown (Times of India, 2020b). These statistics are extremely worrying because studies have shown that the majority of child abuse perpetrators are known family members or those in close relationships. `,
      smallHeadingTwo: "Our Response:",
      response: [
        "Premanu Foundation is continuously working to ensure a safe and nurturing space for children to grow and develop by creating awareness about child violence and its adverse consequences and available existing support services such as ChildLine toll-free number.",
        "Providing counseling services."
      ],
      endPara: "",
      color: "blue"
    }
    
  ];

  return (
    <div className="about-container">
      <h1>Humanitarian Response during Disasters</h1>
      <p>
        India is one of the most disaster-prone countries, often hit by natural
        disasters such as earthquakes, cyclones, floods, and droughts.
        Currently, we are going through an unprecedented and massive health and
        humanitarian crisis amidst the global pandemic Covid-19.
      </p>

      <h2>Our Initiatives in Times of Disaster</h2>
      <ul className="about-ul-plain">
        <li className="about-li-plain">
          We provide basic supplies, hygiene kits, and groceries to children and
          families.
        </li>
        <li className="about-li-plain">
          We ensure child-friendly spaces so that children are protected at all
          times and are also able to learn and play.
        </li>
        <li className="about-li-plain">
          We also provide teaching and learning support to children in
          disaster-stricken communities so that continuity in their education is
          maintained.
        </li>
        <li className="about-li-plain">
          We ensure the complete protection of children from harm and/or abuse,
          especially in such vulnerable situations.
        </li>
        <li className="about-li-plain">
          We closely work with communities affected by a disaster to help them
          rehabilitate and rebuild their lives.
        </li>
      </ul>

      <p>
        Amidst the current crisis due to the global pandemic, Premanu Foundation
        has supported more than 100 families with groceries, N95 masks,
        sanitizers, and learning kits for children. Please extend your support
        to our humanitarian work so that we can reach every child and their
        family from marginalized sections.
      </p>
      <div className="cards-in-humanitarian">
      {content.map((item) => (
        <ContentCard
          heading={item.heading}
          smallHeading={item.smallHeading}
          paragraph={item.paragraph}
          smallHeadingTwo={item.smallHeadingTwo}
          response={item.response}
          endPara={item.endPara}
          color={item.color}
        />
      ))}
      </div>

    </div>
  );
};
