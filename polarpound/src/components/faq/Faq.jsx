import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "1. What is Lighter Ledger Pound (LLP)?",
      answer: "LLP (also known as Polar Pound) is the official digital currency of the National Security Framework of the Polar Regions. It is designed for secure, efficient, and transparent transactions, powered by the Tron Network blockchain."
    },
    {
      question: "2. What is the purpose of LLP?",
      answer: "LLP serves as both a currency and a financial infrastructure to facilitate:\n✔ Government-backed transactions\n✔ Merchant trade and liquidity\n✔ Security and authentication\n✔ Political and public service funding\n✔ Decentralized economic stability"
    },
    {
      question: "3. How does LLP ensure transaction security?",
      answer: "LLP utilizes Democratic Authentication, a multi-step verification system ensuring that:\n✔ Transactions are traceable and tamper-proof.\n✔ All trade complies with national security policies.\n✔ Authentication is required for major purchases over £10,000."
    },
    {
      question: "4. Is LLP backed by a government or private entity?",
      answer: "LLP is the official digital currency under the National Security Framework of the Polar Regions, operating within government policies, trade networks, and digital sovereignty regulations."
    },
    {
      question: "5. How is LLP different from other cryptocurrencies?",
      answer: "✔ Government-integrated: Unlike private cryptocurrencies, LLP operates within regulatory frameworks.\n✔ Merchant & Political Utility: LLP is designed for real-world trade, governance, and security, not just speculation.\n✔ Hybrid Online/Offline Transactions: Payments under £10,000 can be authenticated offline, increasing accessibility."
    },
    {
      question: "6. What blockchain is LLP built on?",
      answer: "LLP operates on the Tron Network, a high-speed, low-cost, and scalable blockchain, ensuring instant transactions and global trade compatibility."
    },
    {
      question: "7. Can I mine LLP?",
      answer: "No. Instead of traditional mining, LLP uses Algorithm Process Units (APUs), which function as:\n✔ Transaction validators\n✔ Merchant authenticators\n✔ Security processors\nThis system supports a circular economy, ensuring sustainability."
    },
    {
      question: "8. What is the total supply of LLP?",
      answer: "The total LLP supply is pre-allocated based on the usufruct model, ensuring stability and avoiding uncontrolled inflation."
    },
    {
      question: "9. How is LLP distributed?",
      answer: "LLP is distributed across 7 strategic areas:\n1. National Security & Reserve Fund (25%)\n2. Liquidity & Trade Facilitation (20%)\n3. Merchant Adoption & Infrastructure (15%)\n4. Public Infrastructure & Construction (15%)\n5. Core Team & Governance (10%)\n6. Ecosystem Development & Smart Contracts (10%)\n7. Marketing & Public Engagement (5%)"
    },
    {
      question: "10. How can merchants accept LLP?",
      answer: "Merchants can integrate LLP by:\n✔ Using LLP merchant hardware for transactions.\n✔ Registering under the Democratic Authentication system.\n✔ Accepting offline or online LLP payments."
    },
    {
      question: "11. How does LLP support global trade?",
      answer: "✔ Liquidity pools ensure smooth transactions across borders.\n✔ Smart contracts automate trade agreements.\n✔ Seamless merchant adoption supports international payments."
    },
    {
      question: "12. Can LLP be used for public services?",
      answer: "Yes. LLP can be used for:\n✔ Tax payments\n✔ Government services\n✔ Public infrastructure projects"
    },
    {
      question: "13. How does LLP handle large transactions?",
      answer: "✔ Purchases under £10,000 can be authenticated offline.\n✔ Transactions above £10,000 require internet authentication for security compliance."
    },
    {
      question: "14. Does LLP support staking or passive income?",
      answer: "Unlike traditional staking, LLP offers governance-based incentives, where users participating in governance decisions receive rewards."
    },
    {
      question: "15. How does LLP integrate with politics?",
      answer: "✔ LLP is a key financial tool for governance and policy implementation.\n✔ Supports funding of infrastructure and national security.\n✔ Used for political campaigns, public service payments, and digital voting systems."
    },
    {
      question: "16. Is LLP environmentally friendly?",
      answer: "Yes. Instead of energy-intensive mining, LLP uses APU processing, which is:\n✔ Energy-efficient\n✔ Hardware upgradeable, reducing e-waste\n✔ Sustainably integrated into trade and commerce"
    },
    {
      question: "17. Can individuals buy LLP?",
      answer: "✔ LLP can be acquired through Flash Crypto Finance, the official exchange.\n✔ Businesses and individuals can trade LLP within authorized platforms."
    },
    {
      question: "18. What makes LLP resilient against cyber threats?",
      answer: "✔ Blockchain immutability prevents tampering.\n✔ Democratic Authentication layers verify every transaction.\n✔ APUs serve as network validators, ensuring constant monitoring."
    },
    {
      question: "19. What is LLP's long-term vision?",
      answer: "✔ Become the leading digital currency for the Polar Regions & beyond.\n✔ Establish a fully autonomous, AI-governed economy.\n✔ Support global trade and financial sovereignty.\n✔ Expand into space-based financial systems for interplanetary trade."
    },
    {
      question: "20. Where can I learn more or get involved?",
      answer: "✔ Visit the official LLP platform (soon to be launched).\n✔ Join strategic partnerships and government-backed initiatives.\n✔ Follow our roadmap milestones to see upcoming developments."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section-header section-header--center section-header--medium-margin">
            <h2>Lighter Ledger Pound (LLP) – Frequently Asked Questions (FAQ)</h2>
            <span>
              Below are 20 frequently asked questions about Lighter Ledger Pound (LLP) and how it
              integrates with governance, security, and trade in the Polar Regions.
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <ul className="accordion">
            {faqs.map((faq, index) => (
              <li 
                key={index} 
                className={activeIndex === index ? 'active' : ''}
                onClick={() => toggleAccordion(index)}
              >
                <a>{faq.question}</a>
                <p style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;