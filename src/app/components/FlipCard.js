import React from "react";
import '../styless/flipcard.css'

const FlipCard = ({ frontText, frontImage, backText }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="front">
          <img src={frontImage} />
          <p>{frontText}</p>
        </div>
        <div className="back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
