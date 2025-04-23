'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function InvestmentsStartups() {
  return (
    <div className="govuk-template__body govuk-body">
    <Header/>

      {/* Hero section */}
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper" id="main-content" role="main">

          {/* Hero banner */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <div className="app-hero" style={{
                padding: '3rem 0',
                backgroundColor: '#000000',
                color: 'white',
                borderRadius: '5px',
                marginBottom: '2rem',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '2rem',
                  borderRadius: '5px'
                }}>
                  <h1 className="govuk-heading-xl" style={{ color: 'white', marginBottom: '1rem' }}>
                    Apply to Farming Investments or Submit a Startup Inquiry
                  </h1>
                  <p className="govuk-body-l" style={{ color: 'white', marginBottom: '2rem' }}>
                    National Security Framework of the Polar Region
                  </p>
                  <a href="#learn-more" className="govuk-button govuk-button--start" data-module="govuk-button" style={{ marginRight: '1rem' }}>
                    Learn more
                    <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
                    </svg>
                  </a>
                  <a href="#application" className="govuk-button" data-module="govuk-button">
                    Application Process
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction section */}
          <div className="govuk-grid-row" id="learn-more">
            <div className="govuk-grid-column-two-thirds">
              <section className="govuk-section">
                <p className="govuk-body">
                  We welcome investors, entrepreneurs, and innovators to become part of the world's most ambitious agricultural and digital infrastructure project: <strong>The Polar Farming and Digital Sovereignty Initiative</strong>.
                </p>
                <p className="govuk-body">
                  Whether you're seeking to invest in our high-value cropping facilities or launching a startup within our digital zones, the journey begins here.
                </p>
              </section>

              <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible" />
            </div>

            <div className="govuk-grid-column-one-third">
              <aside className="app-related-items" role="complementary">
                <h2 className="govuk-heading-m">Investment streams</h2>
                <nav role="navigation" aria-labelledby="subsection-title">
                  <ul className="govuk-list govuk-list--bullet">
                    <li>
                      <a href="#application" className="govuk-link">Application Process</a>
                    </li>
                    <li>
                      <a href="#currencies" className="govuk-link">Accepted Currencies</a>
                    </li>
                    <li>
                      <a href="#streams" className="govuk-link">Investment Streams</a>
                    </li>
                  </ul>
                </nav>

                <div className="govuk-inset-text">
                  <p>
                    <strong>Antarctica is your launchpad</strong> for innovating in biotech, redefining agricultural yields, or leading the next wave of AI infrastructure.
                  </p>
                  <a href="#first-step" className="govuk-button" data-module="govuk-button">
                    Take the First Step
                  </a>
                </div>
              </aside>
            </div>
          </div>

          {/* Application Process section */}
          <div className="govuk-grid-row" id="application">
            <div className="govuk-grid-column-full">
              <div className="app-card" style={{
                backgroundColor: '#f3f2f1',
                padding: '2rem',
                borderRadius: '5px',
                marginTop: '2rem'
              }}>
                {/* Mobile-only image (top) */}
                <div className="mobile-only-top-image" style={{ 
                  display: 'none', 
                  textAlign: 'center',
                  marginBottom: '1.5rem' 
                }}>
                  <img src="/application.jpg" alt="Application Process" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-third desktop-image">
                    <img src="/application.jpg" alt="Application Process" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
                  </div>
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">📝 Application Process</h2>
                    <p className="govuk-body">
                      To apply for any <strong>farming investment opportunity</strong> or submit a <strong>startup inquiry</strong> under the National Security Framework, you are required to complete the official application form and submit it together with all relevant supporting documentation.
                    </p>
                    
                    <p className="govuk-body">
                      <strong>Download the official application template:</strong> 📎<br/>
                      <a href="#" className="govuk-link">Business Plan Template for Business Applications (Antarctica)</a>
                    </p>
                    
                    <h3 className="govuk-heading-m">📌 Supporting Documents Must Include:</h3>
                    
                    <ul className="govuk-list govuk-list--bullet">
                      <li>Completed <strong>business plan template</strong> (in XLSX format).</li>
                      <li>Valid <strong>identification documents</strong> (passport or national ID).</li>
                      <li>Company registration or business entity details (if applicable).</li>
                      <li>Proof of funds or capital commitment.</li>
                      <li>Any patents, intellectual property, or technical documentation (if submitting a startup idea).</li>
                    </ul>
                    
                    <p className="govuk-body">
                      Please email your full application and all attachments to: 📧<br/>
                      <strong>invest@nationalsecurityframework.org</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accepted Currencies section */}
          <div className="govuk-grid-row" id="currencies">
            <div className="govuk-grid-column-full">
              <div className="app-card" style={{
                backgroundColor: '#f3f2f1',
                padding: '2rem',
                borderRadius: '5px',
                marginTop: '2rem'
              }}>
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-full">
                    <h2 className="govuk-heading-l">💱 Our Accepted Currencies</h2>
                    <p className="govuk-body">
                      Our internal economy is governed by the <strong>Lighter Ledger Pound (LLP)</strong>—our sovereign digital currency built on ledger-based financial transparency.
                    </p>
                    
                    <p className="govuk-body">
                      However, we also accept:
                    </p>
                    
                    <ul className="govuk-list govuk-list--bullet">
                      <li><strong>United States Dollar (USD)</strong></li>
                      <li><strong>British Pound Sterling (GBP)</strong></li>
                    </ul>
                    
                    <p className="govuk-body">
                      All external investments, partnerships, and startup funding rounds can be conducted in <strong>LLP</strong>, <strong>USD</strong>, or <strong>GBP</strong>, with secure conversion available via our exchange partner, <strong>Flash Crypto Finance</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Streams section */}
          <div className="govuk-grid-row" id="streams">
            <div className="govuk-grid-column-full">
              <div className="app-card" style={{
                backgroundColor: '#f3f2f1',
                padding: '2rem',
                borderRadius: '5px',
                marginTop: '2rem',
                marginBottom: '2rem'
              }}>
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-full">
                    <h2 className="govuk-heading-l">🧭 Which Streams Can You Apply To?</h2>
                    
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-one-half">
                        <h3 className="govuk-heading-m">🌱 Cropping Farming Opportunities:</h3>
                        <ul className="govuk-list">
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Opium Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Pharmaceutical Grade
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Marijuana Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Medical Cannabis
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Coca Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Anesthetic Research
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Black Truffle Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Luxury Gastronomy
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Grape & Wine Cultivation</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Red, White, Rosé, Sparkling
                              </div>
                            </details>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="govuk-grid-column-one-half">
                        <h3 className="govuk-heading-m">💻 Digital Farming Opportunities:</h3>
                        <ul className="govuk-list">
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Internet Networking Infrastructure</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                High-bandwidth, low-latency satellite networks
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Sovereign Data Storage</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Encrypted storage with triple-contingency power
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Cryptocurrency Mining Hubs</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Cold-region ASIC & GPU mining clusters
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>AI & Machine Learning Operations</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                High-performance compute farms
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Blockchain & Quantum Tech Zones</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Emerging technology research nodes
                              </div>
                            </details>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="govuk-grid-row" id="first-step">
            <div className="govuk-grid-column-full">
              <div className="app-cta" style={{
                backgroundColor: '#00703c',
                color: 'white',
                padding: '2rem',
                borderRadius: '5px',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <h2 className="govuk-heading-l" style={{ color: 'white' }}>🚀 Take the First Step Toward the Frontier</h2>
                <p className="govuk-body-l" style={{ color: 'white' }}>
                  Whether you're innovating in biotech, redefining agricultural yields, or leading the next wave of AI infrastructure—<strong>Antarctica is your launchpad</strong>.
                </p>
                <p className="govuk-body" style={{ color: 'white' }}>
                  👉 <strong>Download, Complete, and Submit Your Application Today.</strong><br/>
                  We will respond to all qualified inquiries within 14 working days.
                </p>
                <a href="/application.xlsx" className="govuk-button govuk-button--start govuk-button--inverse" data-module="govuk-button">
                  Download Application Template
                  <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </main>
      </div>

      <Footer />

    </div>
  );
}