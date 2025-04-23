'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="govuk-footer" role="contentinfo">
      <div className="govuk-width-container">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow" style={{ textAlign: 'center' }}>
            <p className="govuk-footer__copyright-text">
              © {currentYear} National Security Framework of the Polar Regions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;