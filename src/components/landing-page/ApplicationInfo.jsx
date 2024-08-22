import React, { useState } from "react";
import './ApplicationInfo.css';
import BlankImg from '../../images/imageee.png';
import '../../fonts.css';

const CardList = () => {
    const [openCardIndex, setOpenCardIndex] = useState(null);
  
    const cardsData = [
      {
        title: "University Search and Program Matching",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        title: "Application Assistance",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        title: "Document Management",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        title: "Application Submission and Progress Tracking",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        title: "Pre-Departure and Post-Arrival Support",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      
    ];
  
    const toggleCard = (index) => {
      setOpenCardIndex(openCardIndex === index ? null : index);
    };
  
    return (
      <div className="applic-container">
        
        <h1 className="section-title">
            Everything you need for a successful application <br></br>
            in one place
        </h1>
        <div>
        <img src={BlankImg} alt="" className="img-container"/>
        </div>
        <div className="cards-containers">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              isOpen={openCardIndex === index}
              onClick={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  const Card = ({ title, description, isOpen, onClick }) => {
    return (
        <div className={`card ${isOpen ? 'open' : ''}`} onClick={onClick}>
        <div className="info-text" onClick={onClick}>
          <span className="arrow">{isOpen ? '▼' : '►'}</span>
          <span className="card-title">{title}</span>
        </div>
        {isOpen && (
          <div className="description">
            {description}
          </div>
        )}
      </div>
    );
  };
  
  export default CardList;