import React from "react";
import "./stats.css";

const StatsCard = ({ stats }) => (
  <div className="stats-card">
    {/* Background image */}
    <img src="/stats-card.png" alt="Stats background" className="stats-bg" />

    {/* Overlay content */}
    <div className="pf-card">
      <div className="pf-card-header">
        <div className="pf-card-icon-wrapper">
          <img src={stats.icon}  className="stats-icon" />
        </div>
        <span className="pf-card-title">{stats.title}</span>
      </div>

      <hr className="pf-card-divider" />

      <div className="pf-card-desc">
        {stats.desc}
      </div>
    </div>

    {/* Arrow icon in bottom-left decorative circle */}
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="14" fill="#fff" />
        <path
          d="M9 19l10-10m0 0h-7m7 0v7"
          stroke="#404a3d"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
  </div>
);

export default StatsCard;
