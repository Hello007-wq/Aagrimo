import React from "react";
import "./servcard.css";

const ServCard = ({ serv }) => (
  <div className="serv-card">
    {/* White background image */}
    <img src="/stats-card.png" alt="" className="stats-bg" />

    {/* Main top image */}
    <img src={serv.img} alt={serv.title} className="serv-main-img" />

    {/* Card content */}
    <div className="serv-card-content">
      <h5>
        <span className="serv-dot" /> {serv.label}
      </h5>
      <h3>{serv.title}</h3>
      <hr className="serv-divider" />
      <p>{serv.desc}</p>
    </div>

    {/* Decorative arrow circle */}
    <div className="serv-card-arrow-circle">
      <svg width="50" height="50" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#EDDD5E" />
        <path
          d="M9 19l10-10m0 0h-7m7 0v7"
          stroke="#404a3d"
          strokeWidth="1"
          strokeLinecap="round"
          height="50"
          width="50"
        />
      </svg>
    </div>
  </div>
);

export default ServCard;
