import React from "react";
import "./testcard.css";

const TestCard = ({test}) => {
  return (
    <div className="testcard" style={{ backgroundImage: `url(${test.bgImage})` }}>
      {/* top-right quote badge (separate element so it overflows the card like in reference) */}
      <div className="quote-badge">
        <img src={test.quoteIcon} alt="quote" />
      </div>

      <div className="testcard-inner">
        <div className="testcard-stars" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < test.rating ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>

        <p className="testcard-text">“{test.text}”</p>

        <div className="testcard-user">
          <img src={test.image} alt={test.name} className="testcard-avatar" />
          <div className="testcard-user-meta">
            <div className="testcard-name">{test.name}</div>
            <div className="testcard-role">{test.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;