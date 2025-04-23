'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Farming() {
  return (
    <div className="govuk-template__body govuk-body">
    < Header/>

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
                    Farming & Facilities in the Polar Regions
                  </h1>
                  <p className="govuk-body-l" style={{ color: 'white', marginBottom: '2rem' }}>
                    Next-Generation Agriculture Meets Digital Infrastructure
                  </p>
                  <a href="#learn-more" className="govuk-button govuk-button--start" data-module="govuk-button" style={{ marginRight: '1rem' }}>
                    Learn more
                    <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
                    </svg>
                  </a>
                  <a href="#investment" className="govuk-button" data-module="govuk-button">
                    Investment Opportunities
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
                  In the heart of Antarctica, far from regulation-heavy borders and overexploited lands, we've pioneered a new frontier: <strong>strategic farming under extreme conditions</strong>. Our mission combines <strong>high-value crop cultivation</strong> with <strong>cutting-edge digital farming infrastructure</strong> to fuel both <strong>pharmaceutical innovation</strong> and <strong>data sovereignty</strong>.
                </p>
              </section>

              <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible" />
            </div>

            <div className="govuk-grid-column-one-third">
              <aside className="app-related-items" role="complementary">
                <h2 className="govuk-heading-m">Key facilities</h2>
                <nav role="navigation" aria-labelledby="subsection-title">
                  <ul className="govuk-list govuk-list--bullet">
                    <li>
                      <a href="#cropping" className="govuk-link">Cropping Farming Facilities</a>
                    </li>
                    <li>
                      <a href="#digital" className="govuk-link">Digital Farming Facilities</a>
                    </li>
                  </ul>
                </nav>

                <div className="govuk-inset-text">
                  <p>
                    <strong>Pioneer the future</strong> by investing in our revolutionary polar farming facilities.
                  </p>
                  <a href="#investment" className="govuk-button" data-module="govuk-button">
                    View Opportunities
                  </a>
                </div>
              </aside>
            </div>
          </div>

          {/* Cropping Farming Facilities section */}
          <div className="govuk-grid-row" id="cropping">
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
                  <img src="/farming-crops.jpg" alt="Polar Region Cropping Facilities" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-third desktop-image">
                    <img src="/farming-crops.jpg" alt="Polar Region Cropping Facilities" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
                  </div>
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">🌱 Cropping Farming Facilities</h2>
                    <p className="govuk-heading-m" style={{ marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
                      Grow the Future. Invest in Tomorrow's Yield.
                    </p>
                    <p className="govuk-body">
                      Our cropping facilities are designed within <strong>sealed geo-dome environments</strong> powered by <strong>geothermal and solar energy</strong>, engineered for year-round production. These facilities allow us to cultivate some of the <strong>most profitable and rarest plants in the world</strong>—securely and sustainably.
                    </p>
                    
                    <h3 className="govuk-heading-m">Available Investment Opportunities:</h3>
                    
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-full">
                        <ul className="govuk-list">
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>1. Opium Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                High-security poppy farms for morphine, codeine, and thebaine extraction.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>2. Marijuana Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Controlled cannabis cultivation for pharmaceutical-grade CBD, THC, and medical research applications.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>3. Coca Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Legal research-grade coca farming for anesthetic development and stimulant-based medication.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>4. Black Truffle Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Precision climate-controlled mycological environments for one of the most expensive fungi on Earth.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>5. Grape & Wine Cultivation Facilities</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Antarctic vineyards producing <strong>Red, White, and Rosé wines</strong>, including <strong>regular and sparkling varieties</strong>. This project combines elite oenology with sustainability for global luxury export.
                              </div>
                            </details>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="govuk-heading-m">Apply to Invest in Cropping Facilities</h3>
                    <p className="govuk-body">
                      Interested in growing the rarest, most profitable crops in the world under controlled scientific conditions?
                    </p>
                    <a href="#" className="govuk-button" data-module="govuk-button" id="investment">
                      Apply Now to Cropping Farming Investment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Farming Facilities section */}
          <div className="govuk-grid-row" id="digital">
            <div className="govuk-grid-column-full">
              <div className="app-card" style={{
                backgroundColor: '#f3f2f1',
                padding: '2rem',
                borderRadius: '5px',
                marginTop: '2rem',
                marginBottom: '2rem'
              }}>
                {/* Mobile-only image (top) */}
                <div className="mobile-only-top-image" style={{ 
                  display: 'none', 
                  textAlign: 'center',
                  marginBottom: '1.5rem' 
                }}>
                  <img src="/digital-farm.jpg" alt="Digital Farming Infrastructure" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">💻 Digital Farming Facilities</h2>
                    <p className="govuk-heading-m" style={{ marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
                      Power the Data Future From the Coldest Edge of the Earth
                    </p>
                    <p className="govuk-body">
                      In tandem with our agricultural strategy, our <strong>Digital Farming Facilities</strong> transform the Antarctic cold into <strong>computational efficiency</strong>, reducing energy costs and maximizing uptime.
                    </p>
                    
                    <h3 className="govuk-heading-m">Available Digital Infrastructure:</h3>
                    
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-full">
                        <ul className="govuk-list">
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>1. Internet Networking Hubs</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                High-bandwidth, low-latency satellite internet networks for ultra-remote data centers.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>2. Data Storage & Sovereign Backup Systems</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Encrypted storage units with triple-contingency power for ultra-resilient data sovereignty.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>3. Cryptocurrency Mining Operations</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Cold-region ASIC & GPU mining clusters for reduced cooling costs and optimal uptime. Directly powered by geothermal sources.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>4. AI & Machine Learning Racks</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                High-performance compute (HPC) farms dedicated to deep learning, medical research, predictive analytics, and autonomous systems development.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>5. Quantum & Blockchain Research Nodes</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Emerging technology zones for quantum simulation, ledger experiments, and decentralized network governance.
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
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <div className="app-cta" style={{
                backgroundColor: '#00703c',
                color: 'white',
                padding: '2rem',
                borderRadius: '5px',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <h2 className="govuk-heading-l" style={{ color: 'white' }}>Apply to Invest in Digital Farming Facilities</h2>
                <p className="govuk-body-l" style={{ color: 'white' }}>
                Lead the global charge in secure digital sovereignty, AI infrastructure, and crypto innovation from the world's most strategic continent.
                </p>
                <a href="#" className="govuk-button govuk-button--start govuk-button--inverse" data-module="govuk-button">
                Apply Now to Digital Farming Investment
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