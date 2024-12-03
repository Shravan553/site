"use client";

import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './HomeBuySell.module.css';

const HomeBuySell: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Capture ref's current value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the captured value
      }
    };
  }, []); // Empty dependency array: no dependencies are needed.

  const backgroundStyle = {
    backgroundImage: `url(/assets/tyimage3.jpg)`,
    backgroundSize: 'cover',
    
    backgroundPosition: 'center',
    padding: '80px 20px',
    display: 'flex',
    height: '500px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      {/* SEO Metadata */}
      <Head>
        <title>Buy and Sell Premium Potatoes - Trusted Platform</title>
        <meta
          name="description"
          content="Explore a trusted platform for buying and selling premium potatoes. Connect with vendors and customers easily."
        />
        <meta
          name="keywords"
          content="premium potatoes, buy potatoes, sell potatoes, potato vendor, potato marketplace"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div
        ref={sectionRef}
        className={`${styles.landingPageCard} ${isVisible ? styles.visible : ''}`}
      >
        <h1 className={styles.landingPageTitle}>Buy Premium Potatoes?</h1>
        <h1 className={styles.landingPageTitle}>Ready to Sell Premium Potatoes?</h1>

        <p className={styles.landingPageSubtitle}>
          Explore our platform to connect with trusted vendors and customers.
        </p>

        <div className={styles.testimonialpValues}>
          <p>We offer a wide range of potato varieties and easy transactions.</p>
          <p>Join our network to buy or sell potatoes efficiently and effectively!</p>
        </div>

        <Link href="/components/BuyandSell/">
          <button className={styles.clickHereButton} aria-label="Click to buy and sell potatoes">
            Click Here to Buy & Sell Potatoes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBuySell;
