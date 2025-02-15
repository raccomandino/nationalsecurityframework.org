import React from "react";

const Roadmap = () => {
  const phases = [
    {
      number: "PHASE 1",
      title: "Foundation & Regulatory Framework",
      period: "2024 - 2025",
      keyFocus: "Establishing the fundamental legal, security, and governance structure for LLP.",
      tasks: [
        "Development of the National Security Framework integration",
        "Creation of Democratic Authentication protocols",
        "Establishing LLP's legislation and regulatory framework within the Polar Regions",
        "Deployment of LLP on the Tron Network blockchain",
        "Partnership discussions with government agencies, financial institutions, and strategic industries"
      ]
    },
    {
      number: "PHASE 2",
      title: "Infrastructure & Merchant Adoption",
      period: "2025 - 2026",
      keyFocus: "Establishing a merchant-friendly payment system and laying down physical infrastructure.",
      tasks: [
        "Development and deployment of LLP merchant hardware for seamless transactions",
        "Implementation of APU (miner) technology to drive blockchain efficiency",
        "Launch of Liquidity & Trade Facilitation Pool to ensure financial stability",
        "Expansion of partnerships with construction, energy, and logistics sectors",
        "Pilot program for offline LLP authentication for transactions under £10,000"
      ]
    },
    {
      number: "PHASE 3",
      title: "Public Infrastructure & Political Integration",
      period: "2026 - 2027",
      keyFocus: "Strengthening LLP's role in governance, public services, and trade.",
      tasks: [
        "Allocation of LLP to infrastructure projects, including transportation and energy grids",
        "Implementation of LLP as a payment method for public services and taxation",
        "Establishment of political and economic policies to drive adoption",
        "Deployment of blockchain-based governance models for secure voting and policy implementation",
        "Strengthening LLP's role in national and international trade agreements"
      ]
    },
    {
      number: "PHASE 4",
      title: "Expansion & Economic Stabilization",
      period: "2027 - 2028",
      keyFocus: "Widening LLP's economic footprint and reinforcing security measures.",
      tasks: [
        "Scaling LLP's liquidity pool to stabilize the digital economy",
        "Expansion of global trade networks accepting LLP as a cross-border settlement currency",
        "Integration of AI-driven economic analytics for governance and security",
        "Expansion of LLP merchant adoption beyond the Polar Regions",
        "Enhancement of Democratic Authentication security layers to prevent fraud"
      ]
    },
    {
      number: "PHASE 5",
      title: "Global Recognition & Smart Governance",
      period: "2028 - 2029",
      keyFocus: "Achieving worldwide recognition and integrating automated governance.",
      tasks: [
        "Recognition of LLP as a sovereign digital currency under international financial regulations",
        "Expansion of blockchain-based identity authentication systems",
        "Deployment of self-regulating economic policies using smart contracts",
        "Strengthening cybersecurity partnerships for increased financial protection",
        "LLP integration with national and multinational digital payment networks"
      ]
    },
    {
      number: "PHASE 6",
      title: "Full Autonomy & Future-Proofing",
      period: "2029 - 2030+",
      keyFocus: "Achieving full automation and sustainability in the LLP economy.",
      tasks: [
        "Decentralized Autonomous Governance (DAG) for full ecosystem autonomy",
        "Integration of LLP with Quantum and AI-driven financial networks",
        "Sustainable energy solutions for APU (miner) operations",
        "Expansion of LLP into space-based financial systems and interplanetary trade",
        "Continued political advocacy for LLP-backed economic sovereignty"
      ]
    }
  ];

  return (
    <div className="roadmap">
      <h2>Lighter Ledger Pound (LLP) – 6-Phase Roadmap</h2>
      <h3>Building a Secure, Scalable, and Politically-Integrated Financial System for the Polar Regions</h3>
      
      <div className="roadmap-container">
        {phases.map((phase, index) => (
          <div key={index} className="roadmap-phase">
            <div className="phase-header">
              <span className="phase-number">{phase.number}</span>
              <h3>{phase.title}</h3>
              <span className="phase-period">{phase.period}</span>
            </div>
            
            <div className="key-focus">
              <p><strong>📌 Key Focus:</strong></p>
              <p>{phase.keyFocus}</p>
            </div>
            
            <ul>
              {phase.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>
                  <span className="checkmark">✅</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="roadmap-footer">
        <h3>The Future of Finance & Governance</h3>
        <span>🚀 LLP is more than just a currency. It is a global economic driver, a political tool, and a security infrastructure for the Polar Regions. With this structured 6-phase roadmap, LLP will evolve into a fully integrated, autonomous, and internationally recognized digital financial system.</span>
      </div>
    </div>
  );
};

export default Roadmap;