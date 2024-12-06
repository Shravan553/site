'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Scroll: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#04D939',
    color: 'white',
    width: 'auto',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#03C829',
  };

  const whatsappButtonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '90px', // Adjusted to position above the Scroll button
    right: '30px',
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
  };

  const iconStyle: React.CSSProperties = {
    marginRight: '8px', // Space between icon and text
  };

  return (
    <>
      {showButton && (
        <>
          <button
            onClick={scrollToTop}
            style={buttonStyle}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = buttonHoverStyle.backgroundColor!;
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = buttonStyle.backgroundColor!;
            }}
          >
            Scroll to Top
          </button>
          {/* WhatsApp Chat Button */}
          <a
            href="https://wa.me/9353237885?text=Hello,%20I%20need%20help!" // Your phone number added here
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={whatsappButtonStyle}>
            <Image
  src="/assets/WhatsApp.svg"
  alt="WhatsApp"
  width={20}
  height={20}
  style={{ width: '20px', height: '20px', ...iconStyle }}
/>
                Need Help? Chat with Us
              </button>
          </a>
        </>
      )}
    </>
  );
};

export default Scroll;
