'use client';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import Font Awesome WhatsApp icon

const Scroll: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowButton(window.scrollY > 200);
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
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  const whatsappButtonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '90px', // Positioned above the Scroll button
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
    marginRight: '8px', // Space between the icon and text
  };

  return (
    <>
      {showButton && (
        <>
          {/* Scroll to Top Button */}
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#03C829'
            }
            onMouseLeave={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#04D939'
            }
            onClick={scrollToTop}
          >
            Scroll to Top
          </button>

          {/* WhatsApp Chat Button */}
          <button
            style={whatsappButtonStyle}
            onMouseEnter={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#1DA855'
            }
            onMouseLeave={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#25D366'
            }
            onClick={() => {
              window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
            }}
          >
            <FaWhatsapp style={iconStyle} />
            Need Help? Chat with Us
          </button>
        </>
      )}
    </>
  );
};

export default Scroll;
