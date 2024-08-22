import React, { useState } from "react";
import './Question.css';
import '../../fonts.css';

const Questions = () => {
    const [openCardIndex, setOpenCardIndex] = useState(null);
  
    const cardsData = [
      {
        question: "What countries and universities does Accademium support?",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        question: "Is Accademium suitable for undergraduate and graduate students?",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        question: "Can Accademium provide guidance on financial aid and scholarships?",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        question: "Does Accademium offer support from finding accomodation abroad?",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        question: "How does Accademium store my personal information?",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      },
      {
        question: "How can I get in touch with Accademium's support team?",
        description: "Explore universities and programs tailored to your preferences with our comprehensive search feature. Filter universities based on location, tuition fees, available scholarships, and explore detailed program information, admission requirements, and scholarship opportunities."
      }
      
    ];
  
    const toggleCard = (index) => {
      setOpenCardIndex(openCardIndex === index ? null : index);
    };
  
    return (
      <div className="container">
        <h1 className="title">
            Frequently asked questions
        </h1>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            question={card.question}
            description={card.description}
            isOpen={openCardIndex === index}
            onClick={() => toggleCard(index)}
          />
        ))}
        {/* <div className="img-container">
        <img src={BlankImg} alt="" ></img>
        </div> */}
      </div>
    );
  };
  
  const Card = ({ question, description, isOpen, onClick }) => {
    return (
      <div className={`panel ${isOpen ? 'open' : ''}`} onClick={onClick}>
        <div className="question" onClick={onClick}>
          <span className="question">{question}</span>
          <span className="plus-minus">{isOpen ? '−' : '+'}</span>
        </div>  
        {isOpen && (
          <div className="answer">
            {description}
          </div>
        )}
      </div>
    );
  };
 export default Questions;