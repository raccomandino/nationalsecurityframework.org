'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface HeaderProps {
  navItems?: NavItem[];
  isHomepage?: boolean;
}

const Header = ({ 
  navItems = [
    { label: 'Home', href: '/' , active: true},
    { label: 'Farming', href: '/farming' },
    { label: 'Pharmaceutical', href: '/pharmaceutical' },
    { label: 'Investment & Startup', href: '/investment-startup'}
  ],
  isHomepage = false
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* GOV.UK Header */}
      <header className="govuk-header" role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <Link href="/" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <span className="govuk-header__logotype-text">National Security Framework</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Service Navigation - Always rendered now */}
      <section aria-label="Service menu" className="govuk-service-navigation">
        <div className="govuk-width-container">
          <div className="govuk-service-navigation__container">
            {/* Service name (empty as per your design) */}
            <span className="govuk-service-navigation__service-name"></span>

            {/* Navigation */}
            <nav aria-label="Menu" className="govuk-service-navigation__wrapper">
              {/* Menu toggle (mobile only) */}
              <button 
                type="button"
                className="govuk-service-navigation__toggle"
                aria-controls="navigation"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                onClick={toggleMenu}
              >
                Menu
              </button>

              <ul 
                className={`govuk-service-navigation__list ${isMenuOpen ? 'is-visible' : ''}`} 
                id="navigation"
              >
                {navItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`govuk-service-navigation__item ${item.active ? 'govuk-service-navigation__item--active' : ''}`}
                  >
                    <Link 
                      className="govuk-service-navigation__link" 
                      href={item.href}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.active ? (
                        <strong className="govuk-service-navigation__active-fallback">{item.label}</strong>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;