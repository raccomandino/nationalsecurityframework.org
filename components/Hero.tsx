import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="app-hero">
      <div className="app-width-container">
        <div className="app-hero__container">
          <div className="app-hero__content">
            <h1 className="govuk-heading-xl">Welcome to our service</h1>
            <p className="govuk-body-l">
              We're here to help you access government services and information quickly and easily.
              Our platform provides a streamlined way to find what you need and complete your tasks.
            </p>
            <p className="govuk-body">
              Whether you're looking to apply for a permit, find local services, or learn about 
              government programs, we've got you covered with clear guidance and support every step of the way.
            </p>
            <Link href="/services" role="button" draggable="false" className="govuk-button govuk-button--start" data-module="govuk-button">
              Get started
              <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
              </svg>
            </Link>
          </div>
          <div className="app-hero__image-container">
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image
                src="/api/placeholder/500/400"
                alt="People using government services"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;