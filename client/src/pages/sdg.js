// Page.js
import React from 'react';
import './sdg.css';
import SDG1 from '../assets/SDG1.jpg' ;
import SDG2 from '../assets/SDG2.jpg' ;
import SDG3 from '../assets/SDG3.jpg' ;
import SDG4 from '../assets/SDG4.jpg' ;
import SDG5 from '../assets/SDG5.jpg' ;
import SDG6 from '../assets/SDG6.jpg' ;
import SDG7 from '../assets/SDG7.jpg' ;
import SDG8 from '../assets/SDG8.jpg' ;
import SDG9 from '../assets/SDG9.jpg' ;
import SDG10 from '../assets/SDG10.jpg' ;
import SDG11 from '../assets/SDG11.jpg' ;
import SDG12 from '../assets/SDG12.jpg' ;
import SDG13 from '../assets/SDG13.jpg' ;
import SDG14 from '../assets/SDG14.jpg' ;
import SDG15 from '../assets/SDG15.jpg' ;
import SDG16 from '../assets/SDG16.jpg' ;
import SDG17 from '../assets/SDG17.jpg' ;

export default function Page() {
  // Array of images for each card
  const cardData = [
    { image:SDG1 },
    { image:SDG2 },
    { image:SDG3 },
    { image:SDG4 },
    { image:SDG5 },
    { image:SDG6 },
    { image:SDG7 },
    { image:SDG8 },
    { image:SDG9 },
    { image:SDG10 },
    { image:SDG11 },
    { image:SDG12 },
    { image:SDG13 },
    { image:SDG14 },
    { image:SDG15 },
    { image:SDG16 },
    { image:SDG17 },

  ];

  const data = [
    {Title: "Goal 1: No Poverty", 
     Point1: "Aims to eradicate poverty in all forms by improving access to resources, social protections, and economic opportunities. Poverty reduction is crucial for enhancing the quality of life and promoting equality."
    },
    {Title: "Goal 2: Zero Hunger", 
     Point1: "Focuses on achieving food security, improving nutrition, and promoting sustainable agriculture. Access to sufficient, nutritious food is essential for health and well-being."
    },
    {Title: "Goal 3: Good Health and Well-being", 
     Point1: "Promotes health and well-being for all ages, aiming to reduce maternal and child mortality, combat infectious diseases, and improve mental health."
    },
    {Title: "Goal 4: Quality Education", 
     Point1: "Ensures inclusive and equitable education for all, fostering lifelong learning and skills development that empower people to contribute to society."
    },
    {Title: "Goal 5: Gender Equality", 
     Point1: "Targets the elimination of discrimination, violence, and barriers facing women and girls, empowering them to participate fully in all aspects of society."
    },
    {Title: "Goal 6: Clean Water and Sanitation", 
     Point1: "Focuses on providing access to safe and affordable drinking water, sanitation facilities, and hygiene practices while managing water resources sustainably."
    },
    {Title: "Goal 7: Affordable and Clean Energy", 
     Point1: "Aims to ensure universal access to affordable, reliable, and sustainable energy sources, reducing reliance on fossil fuels."
    },
    {Title: "Goal 8: Decent Work and Economic Growth", 
     Point1: "Encourages sustainable economic growth, fair labor practices, and full employment opportunities, fostering decent work for all."
    },
    {Title: "Goal 9: Industry, Innovation, and Infrastructure", 
     Point1: "Seeks to build resilient infrastructure, promote inclusive industrialization, and foster innovation to support sustainable development."
    },
    {Title: "Goal 10: Reduced Inequalities", 
     Point1: "Strives to reduce income inequality and eliminate discriminatory practices, ensuring equal opportunities for all."
    },
    {Title: "Goal 11: Sustainable Cities and Communities", 
     Point1: "Focuses on making urban areas inclusive, safe, resilient, and sustainable, with accessible services and green spaces."
    },
    {Title: "Goal 12: Responsible Consumption and Production", 
     Point1: "Promotes sustainable consumption and production patterns to minimize waste, reduce environmental impact, and conserve resources."
    },
    {Title: "Goal 13: Climate Action", 
     Point1: "Calls for urgent actions to combat climate change and adapt to its effects, promoting resilience and reducing emissions."
    },
    {Title: "Goal 14: Life Below Water", 
     Point1: "Protects oceans, seas, and marine ecosystems from pollution, overfishing, and acidification, essential for biodiversity and human livelihoods."
    },
    {Title: "Goal 15: Life on Land", 
     Point1: "Aims to preserve terrestrial ecosystems, combat desertification, halt biodiversity loss, and promote sustainable land use."
    },
    {Title: "Goal 16: Peace, Justice, and Strong Institutions", 
     Point1: "Advocates for peaceful societies, justice for all, and effective institutions, reducing violence and promoting human rights."
    },
    {Title: "Goal 17: Partnerships for the Goals", 
     Point1: "Encourages global partnerships, resource mobilization, and cooperation to achieve all SDGs, fostering collaboration among governments, the private sector, and civil society."
    }
];

 const colors =["red" ,"green" ,"blue"] ;
  return (
    <div className="page">
      <h1 className="page-heading">Sustainable Development Goals</h1>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="card-sdg">
            <div className="card-inner">
              <div className="card-front">
                <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
              </div>
              <div className="card-back" style={{backgroundColor:colors[index%3]}}>
                 <h2 style={{color:"white"}}>{data[index].Title}</h2>
                 <p>{data[index].Point1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
