import React from "react";
// import "./Roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h2>Our Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-phase">
          <div className="phase-header">
            <span className="phase-number">PHASE 1</span>
            <h3>Foundation</h3>
          </div>
          <ul>
            <li>Accumulate Assets</li>
            <li>Website Launch</li>
          </ul>
        </div>

        <div className="roadmap-phase">
          <div className="phase-header">
            <span className="phase-number">PHASE 2</span>
            <h3>Growth</h3>
          </div>
          <ul>
            <li>Presale Launch</li>
            <li>Marketing Blitz</li>
            <li>Dex Listing</li>
          </ul>
        </div>

        <div className="roadmap-phase">
          <div className="phase-header">
            <span className="phase-number">PHASE 3</span>
            <h3>Expansion</h3>
          </div>
          <ul>
            <li>Community Rewards</li>
            <li>Strategic Partnerships</li>
            <li>Smart Contract Platform Launch</li>
            <li>Onboard current pending projects</li>
            <li>Move currently owned assets onto Blockchain</li>
          </ul>
        </div>

        <div className="roadmap-phase">
          <div className="phase-header">
            <span className="phase-number">PHASE 4</span>
            <h3>Renewal</h3>
          </div>
          <ul>
            <li>Long Term Sustainability Plan</li>
            <li>Full Smart Contract Platform Implementation</li>
            <li>Scale project to fullest extent</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
