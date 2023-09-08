// Interns.js

import '../../App.css';
import './Interns.css';

export const Interns = () => {
  const cardsData = [
    {
      title: 'Naman Loomba <Nirma University>',
      description:
        'My experience while working with the Premanu Foundation was thought-provoking, and it helped me understand the importance of social work in bringing about change. It also taught me that change, although a slow process, can surely be achieved with the help of constant efforts by a community, something that the Premanu Foundation excels at. On a personal level, I had the opportunity to learn about the mindset of adaptability and the aspects of critical thinking that should be used to solve any problem with ease. Overall, I am grateful to the Premanu Foundation team for mentoring me during this internship and helping me grow both personally and professionally.',
      imageUrl: 'images/intern-1.png', // Replace with your image URL
    },
    {
      title: 'Vaishnavi Ratilal Deshmukh <TiSS, Mumbai>',
      description:
        'I had the incredible opportunity to intern with the Premanu Foundation, and I can confidently say that it was one of the most rewarding experiences of my life. The foundations unwavering commitment to improving the lives of every child truly inspired me, and it ignited a passion within me to address even the smallest issues in effective and sustainable ways. During my time in Meghsar village, located in the Churu district of Rajasthan, I had the privilege of immersing myself in the socio-economic and cultural realities of the community. With the valuable support of the Premanu Foundation and the collaboration of various stakeholders, we successfully transformed the local Anganwadi into a nurturing and enriching environment for children. It was a transformative journey that taught me how to navigate challenges and work towards increasing regular attendance among the children, as well as encouraging girls to actively participate in their own development through sports, creative skills, and more. Throughout my internship, the Premanu Foundation provided exceptional mentorship, fostering my personal and professional growth. Moreover, the love and cooperation I received from the community in Meghsar village were truly blessings. I wholeheartedly express my gratitude to the Premanu Foundation for affording me this life-changing opportunity. I am honored to have been a part of their mission, and I will cherish the bonds I formed during my time with them.',
      imageUrl: 'images/intern-2.png', // Replace with your image URL
    },
    // Add more card data as needed
  ];

  return (
    <div className="interns">
      <h1>What our interns say?</h1>
      {cardsData.map((card, index) => (
        <div className="intern-card" key={index}>
          <img src={card.imageUrl} alt={card.title} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Interns;
