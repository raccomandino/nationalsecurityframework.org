'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="govuk-template__body govuk-body">
      <Header isHomepage={true} />

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
                    Welcome to the National Security Framework of the Polar Region
                  </h1>
                  <p className="govuk-body-l" style={{ color: 'white', marginBottom: '2rem' }}>
                    Protecting the Future of the Polar Regions
                  </p>
                  <a href="#learn-more" className="govuk-button govuk-button--start" data-module="govuk-button" style={{ marginRight: '1rem' }}>
                    Learn more
                    <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
                    </svg>
                  </a>
                  <a href="https://scorenet.nationalsecurityframework.org/" className="govuk-button" data-module="govuk-button">
                    Score Search Engine
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="govuk-grid-row" id="learn-more">
            <div className="govuk-grid-column-two-thirds">
              <section className="govuk-section">
                <h2 className="govuk-heading-l">Our Mission</h2>
                <p className="govuk-body">
                  The <strong>National Security Framework of the Polar Region</strong> is a global political initiative dedicated to establishing advanced security, sustainability, and sovereignty across the Arctic and Antarctic territories. As the climate crisis and geopolitical interests intensify, the polar regions face unprecedented industrial, environmental, and strategic challenges. We are here to face them head-on.
                </p>
                <p className="govuk-body">
                  Our mission is to secure these vulnerable frontiers—both physically and digitally—through strong governance, innovation, and international cooperation. We work to ensure that the polar regions remain protected, regulated, and developed for peaceful, scientific, and secure purposes.
                </p>
              </section>

              <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible" />

              <section className="govuk-section">
                <h2 className="govuk-heading-l">A Political Party-Based Army</h2>
                
                {/* Mobile-only image (top) */}
                <div className="mobile-only-top-image" style={{ 
                  display: 'none', 
                  textAlign: 'center',
                  marginBottom: '1.5rem' 
                }}>
                  <img src="/nsf.jpg" alt="National Security Framework Shield" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-two-thirds">
                    <p className="govuk-body">
                      We are not just a policy group—we are a <strong>political party-led army</strong> headquartered in <strong>London, United Kingdom</strong>. Our structure blends political vision with military discipline to implement swift and effective legislation, digital governance, and on-the-ground operations in critical regions of the globe.
                    </p>
                    <p className="govuk-body">
                      Our party structure is designed to deliver real-time solutions across a wide range of national and transnational issues, from cyber and energy security to environmental defense and infrastructure control.
                    </p>
                  </div>
                  <div className="govuk-grid-column-one-third desktop-image">
                    <div className="app-image-container" style={{ textAlign: 'center' }}>
                      <img src="/nsf.jpg" alt="National Security Framework Shield" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
                    </div>
                  </div>
                </div>
              </section>

              <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible" />
            </div>

            <div className="govuk-grid-column-one-third">
              <aside className="app-related-items" role="complementary">
                <h2 className="govuk-heading-m">Key initiatives</h2>
                <nav role="navigation" aria-labelledby="subsection-title">
                  <ul className="govuk-list govuk-list--bullet">
                    <li>
                      <a href="#score" className="govuk-link">Score Search Engine</a>
                    </li>
                    <li>
                      <a href="#polar-pound" className="govuk-link">The Polar Pound (LLP)</a>
                    </li>
                    <li>
                      <a href="#financialism" className="govuk-link">Financialism</a>
                    </li>
                    <li>
                      <a href="#" className="govuk-link">Environmental Protection</a>
                    </li>
                  </ul>
                </nav>

                <div className="govuk-inset-text">
                  <p>
                    <strong>Join our mission</strong> to secure the polar frontiers for generations to come.
                  </p>
                  <a href="#" className="govuk-button" data-module="govuk-button">
                    Get involved
                  </a>
                </div>
              </aside>
            </div>
          </div>

          {/* Score Search Engine section */}
          <div className="govuk-grid-row" id="score">
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
                  <img src="/scorenet.png" alt="Score Search Engine Logo" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-third desktop-image">
                    <img src="/scorenet.png" alt="Score Search Engine Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">Score Search Engine: Transparent Democratic Authentication</h2>
                    <p className="govuk-body">
                      One of our core tools is the <strong>Score Search Engine</strong>—a revolutionary platform built on <strong>Democratic Authentication</strong>. It serves as the official gateway for verifying identities, accessing services, and connecting civilians, businesses, public services, and governments.
                    </p>
                    <p className="govuk-body">
                      Score enables secure interaction in a world of rising data threats. It replaces traditional centralised identity verification with a <strong>multi-layered, privacy-first approach</strong> that protects citizens while maintaining public transparency and compliance.
                    </p>
                    <a href="https://scorenet.nationalsecurityframework.org/" className="govuk-button" data-module="govuk-button">
                      Learn more about Score
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Polar Pound section with updated content */}
          <div className="govuk-grid-row" id="polar-pound">
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
                  <img src="/polarpound.png" alt="Polar Pound Currency Symbol" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">The Polar Pound - Lighter Ledger Pound (LLP)</h2>
                    <p className="govuk-body">
                      Our official digital currency, the <strong>Polar Pound</strong>, sold under the <strong>Lighter Ledger Pound (LLP)</strong> brand, is the economic backbone of our framework.
                    </p>
                    <p className="govuk-body">
                      LLP is more than just a currency—it's a fully compliant, ledger-based economic system designed for <strong>traceability, offline authentication (under £10,000), and government-integrated taxation</strong>. It supports autonomous trade across international borders and ensures funds are allocated efficiently through public sector transparency and accountability.
                    </p>
                    <p className="govuk-body">
                      Whether it's used for defense funding, scientific exploration, or smart infrastructure deployment, the Polar Pound ensures that every transaction is a building block for a more secure polar future.
                    </p>
                    <a href="https://polarpound.nationalsecurityframework.org" className="govuk-button" data-module="govuk-button">
                      Learn more about the Polar Pound
                    </a>
                  </div>
                  <div className="govuk-grid-column-one-third desktop-image">
                    <img src="/polarpound.png" alt="Polar Pound Currency Symbol" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financialism section */}
          <div className="govuk-grid-row" id="financialism">
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
                  <img src="/gov.jpg" alt="Financialism Movement Logo" style={{ 
                    maxWidth: '80%', 
                    height: 'auto', 
                    borderRadius: '5px' 
                  }} />
                </div>

                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-third desktop-image">
                    <img src="/gov.jpg" alt="Financialism Movement Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-heading-l">Financialism—Join the Movement</h2>
                    <p className="govuk-body">
                      At the heart of our mission is <strong>Financialism</strong>—a new ideology focused on <strong>economic security, digital autonomy, and strategic finance</strong>. It's more than a currency or a system. It's a movement. One that empowers governments, strengthens public trust, and builds a new era of sovereign technology and political innovation.
                    </p>
                    <a href="https://financialism.nationalsecurityframework.org" className="govuk-button" data-module="govuk-button">
                      Learn more about Financialism
                    </a>
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
                <h2 className="govuk-heading-l" style={{ color: 'white' }}>Join the National Security Framework</h2>
                <p className="govuk-body-l" style={{ color: 'white' }}>
                  Help us secure the polar frontiers for generations to come
                </p>
                <a href="#" className="govuk-button govuk-button--start govuk-button--inverse" data-module="govuk-button">
                  Apply now
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