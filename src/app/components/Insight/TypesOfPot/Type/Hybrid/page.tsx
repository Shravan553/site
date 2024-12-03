'use client'; // Enables client-side rendering

import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Red.module.css'; // Updated CSS module import
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP'; // Ensure the path matches your file structure

const Red: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.redPotatoes}>
      <Navbar />
      <Head>
        <title>Hybrid 302 Potatoes - Flavorful & Resilient</title>
        <meta
          name="description"
          content="Hybrid 302 Potatoes, offering the best of flavor and resilience for a variety of dishes. Ideal for roasting, sautéing, mashing, and frying."
        />
        <meta
          name="keywords"
          content="Hybrid 302, potatoes, culinary, resilient potatoes, roasted potatoes, sautéed potatoes, mashed potatoes, fried potatoes, versatile potatoes"
        />
        <meta name="author" content="Your Name or Company" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hybrid 302 Potatoes - Flavorful & Resilient" />
        <meta
          property="og:description"
          content="Discover Hybrid 302 Potatoes, a perfect balance of flavor and durability for all your cooking needs."
        />
        <meta property="og:image" content="/assets/hybrid.jpeg" />
        <meta property="og:url" content="http://yourwebsite.com/hybrid-302" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hybrid 302 Potatoes - Flavorful & Resilient" />
        <meta
          name="twitter:description"
          content="Hybrid 302 Potatoes are versatile and perfect for a range of dishes. Discover their flavor, texture, and best-served methods."
        />
        <meta name="twitter:image" content="/assets/hybrid.jpeg" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>{/* Optional logo element */}</div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Hybrid 302 Potatoes</h1>
          <h2 className={styles.subtitle}>Flavorful & Resilient</h2>
          <p className={styles.tagline}>The best of flavor and resilience.</p>
          <p className={styles.description}>
            Hybrid 302 potatoes are cultivated for their enhanced durability and consistent texture. They perform well in various dishes, making them ideal for culinary experimentation.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/hybrid.jpeg"
            alt="Hybrid 302 Potato"
            width={800}
            height={600}
            className={styles.potatoImage}
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-appearance`}>👀</div>
          <h2 className={styles.detailsTitle}>Appearance</h2>
          <p className={styles.detailsText}>
            Smooth skin with a light tan color and firm, creamy white flesh.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-texture`}>✨</div>
          <h2 className={styles.detailsTitle}>Texture</h2>
          <p className={styles.detailsText}>
            Slightly firm; versatile texture suitable for multiple cooking styles.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-flavor`}>🍴</div>
          <h2 className={styles.detailsTitle}>Flavor</h2>
          <p className={styles.detailsText}>
            Mild and earthy with a subtle hint of sweetness.
          </p>
        </div>

        <div className={`${styles.detailsCard} ${styles.bestServed}`}>
          <h2 className={styles.detailsTitle}>Best Served</h2>
          <ul className={styles.bestServedList}>
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/roasted12.png"
                alt="Roasted Potato"
                width={60}
                height={60}
                className={styles.bestServedImage}
              />
              <span>Roasted or Grilled</span>
            </li>
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/sauted.png"
                alt="Sautéed Potato"
                width={60}
                height={60}
                className={styles.bestServedImage}
              />
              <span>Sautéed</span>
            </li>
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/mashed.png"
                alt="Mashed Potato"
                width={60}
                height={60}
                className={styles.bestServedImage}
              />
              <span>Mashed</span>
            </li>
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/fried.png"
                alt="Fried Potato"
                width={60}
                height={60}
                className={styles.bestServedImage}
              />
              <span>Fried</span>
            </li>
          </ul>
          <div className={styles.tipBox}>
            <p>Tip: Add a touch of seasoning and herbs to elevate flavors!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Red;
