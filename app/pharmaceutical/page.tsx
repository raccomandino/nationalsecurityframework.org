'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Pharmaceutical() {
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
                    Pharmaceutical Research & Cultivation at the Poles
                  </h1>
                  <p className="govuk-body-l" style={{ color: 'white', marginBottom: '2rem' }}>
                    Innovating in Isolation. Healing Through Nature.
                  </p>
                  <a href="#learn-more" className="govuk-button govuk-button--start" data-module="govuk-button" style={{ marginRight: '1rem' }}>
                    Learn more
                    <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
                    </svg>
                  </a>
                  <a href="#facilities" className="govuk-button" data-module="govuk-button">
                    Research Facilities
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
                  At the National Security Framework of the Polar Region, we believe the future of pharmaceuticals lies in controlled, high-security research environments—free from national politics, trade restrictions, and legal ambiguity.
                </p>
                <p className="govuk-body">
                  That's why we've established our <strong>BioSecure Antarctic Research Facilities (BARF)</strong>—dedicated to cultivating and studying <strong>high-potential pharmaceutical plants</strong> under strict, transparent, and ethical guidelines.
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
                      <a href="#why-antarctica" className="govuk-link">Why Antarctica?</a>
                    </li>
                    <li>
                      <a href="#plants" className="govuk-link">Plants Under Research</a>
                    </li>
                    <li>
                      <a href="#facilities" className="govuk-link">Our Facilities</a>
                    </li>
                  </ul>
                </nav>

                <div className="govuk-inset-text">
                  <p>
                    <strong>The next breakthrough in medicine won't come from a city. It'll come from the cold.</strong>
                  </p>
                  <a href="#future" className="govuk-button" data-module="govuk-button">
                    Learn More
                  </a>
                </div>
              </aside>
            </div>
          </div>

          {/* Why Antarctica section */}
          <div className="govuk-grid-row" id="why-antarctica">
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
                  <img src="/antarctica.jpg" alt="Antarctica Research Location" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-third desktop-image">
                    <img src="/antarctica.jpg" alt="Antarctica Research Location" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
                  </div>
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">❄️ Why Antarctica?</h2>
                    <p className="govuk-body">
                      Antarctica offers unique advantages:
                    </p>
                    
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-full">
                        <ul className="govuk-list">
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>No sovereign ownership</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Reducing jurisdictional conflicts.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Isolation</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Ensures purity of samples and zero cross-contamination.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Controlled environments</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                With custom-built geothermal-powered bio-domes simulate optimal growing conditions year-round.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Scientific research zones</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Compliant with Antarctic Treaty protocols for peaceful, research-driven use.
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

          {/* Plants Under Research section */}
          <div className="govuk-grid-row" id="plants">
            <div className="govuk-grid-column-full">
              <div className="app-card" style={{
                backgroundColor: '#f3f2f1',
                padding: '2rem',
                borderRadius: '5px',
                marginTop: '2rem'
              }}>
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-full">
                    <h2 className="govuk-heading-l">🌱 Plants Under Research</h2>
                    <p className="govuk-body">
                      Our facilities focus on cultivating plant species that have long been recognized for their <strong>pharmaceutical value</strong>, under the guidance of medical scientists and pharmacologists. Each species is grown in <strong>sealed, classified, and encrypted agricultural systems</strong> that meet or exceed international standards for bioethics and narcotics control.
                    </p>
                    
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-full">
                        <ul className="govuk-list">
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>🌿 Cannabis sativa (Marijuana)</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                <p><strong>Products</strong>: CBD oils, THC pain management compounds, anti-nausea medication, epilepsy treatments, cancer support therapies.</p>
                                <p><strong>Key Benefits</strong>: Neurological support, pain relief, inflammation reduction.</p>
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>🌸 Papaver somniferum (Opium Poppy)</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                <p><strong>Products</strong>: Morphine, codeine, thebaine (used in oxycodone), papaverine (used for spasms and blood flow).</p>
                                <p><strong>Key Benefits</strong>: Pain management, palliative care, surgical anesthesia.</p>
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>🍃 Erythroxylum coca (Coca Plant)</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                <p><strong>Products</strong>: Cocaine hydrochloride (used legally in ENT surgery), tropane alkaloids, natural stimulant derivatives.</p>
                                <p><strong>Key Benefits</strong>: Local anesthetics, neurological stimulant research, potential ADHD and fatigue applications.</p>
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

          {/* Our Facilities section */}
          <div className="govuk-grid-row" id="facilities">
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
                  <img src="/facilities.jpg" alt="Pharmaceutical Research Facilities" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">🧪 Our Facilities</h2>
                    <p className="govuk-body">
                      We operate multiple high-tech cultivation units at our Antarctic hub:
                    </p>
                    
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-full">
                        <ul className="govuk-list">
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>CryoSecure Greenhouses</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Climate-controlled domes using geothermal and solar energy.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Enclosed Biopharma Labs</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Onsite synthesis and analysis of plant-derived compounds.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>Cold Chain Logistics</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Ensuring secure transport of research material for approved medical use.
                              </div>
                            </details>
                          </li>
                          <li>
                            <details className="govuk-details" data-module="govuk-details">
                              <summary className="govuk-details__summary">
                                <span className="govuk-details__summary-text">
                                  <strong>AI-Based Growth Monitoring</strong>
                                </span>
                              </summary>
                              <div className="govuk-details__text">
                                Real-time surveillance of plant health and yield performance using quantum-edge sensors.
                              </div>
                            </details>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="govuk-body">
                      All operations are encrypted, traceable, and transparent to medical licensing bodies, aligned with <strong>ethical bioengineering frameworks</strong> and <strong>international pharmaceutical laws</strong>.
                    </p>
                  </div>
                  <div className="govuk-grid-column-one-third desktop-image">
                    <img src="/facilities.jpg" alt="Pharmaceutical Research Facilities" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Future of Healing */}
          <div className="govuk-grid-row" id="future">
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
                    <h2 className="govuk-heading-l">🌎 The Future of Healing</h2>
                    <p className="govuk-body">
                      In a world restricted by policy and geopolitics, Antarctica stands as a beacon of scientific neutrality. Our cultivation and research aim to provide:
                    </p>
                    
                    <ul className="govuk-list govuk-list--bullet">
                      <li><strong>Life-saving medicines</strong></li>
                      <li><strong>Ethical access to alternative treatments</strong></li>
                      <li><strong>Advanced therapies where traditional pharmaceuticals fall short</strong></li>
                    </ul>
                    
                    <h3 className="govuk-heading-m">Responsible Innovation</h3>
                    <p className="govuk-body">
                      We are committed to:
                    </p>
                    
                    <ul className="govuk-list govuk-list--bullet">
                      <li>Complying with all relevant sections of the Antarctic Treaty.</li>
                      <li>Maintaining ethical research protocols under international narcotics regulations.</li>
                      <li>Supporting only pharmaceutical-grade development—<strong>never recreational use or uncontrolled distribution</strong>.</li>
                    </ul>
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
                <h2 className="govuk-heading-l" style={{ color: 'white' }}>Join the scientific frontier. Heal the world.</h2>
                <p>The next breakthrough in medicine won't come from a city. It'll come from the cold.</p>
                <a href="#" className="govuk-button govuk-button--start govuk-button--inverse" data-module="govuk-button">
                  Learn More About Our Research
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