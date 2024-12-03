'use client'; // Enables client-side rendering

import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './chip.module.css'; // Import CSS module
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP'; // Update path as per your structure

const Chip: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.chipsonaPotatoes}>
      <Navbar />
      <Head>
        <title>Chipsona Potatoes - Perfect for Crispy Snacks</title>
        <meta
          name="description"
          content="Explore Chipsona potatoes, ideal for making crispy snacks like chips, fries, and fried dishes. Discover recipes and more."
        />
        <meta
          name="keywords"
          content="Chipsona potatoes, potato recipes, crispy snacks, fried potatoes, potato chips, potato fries"
        />
        <meta name="author" content="Your Name or Company" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Chipsona Potatoes - Perfect for Crispy Snacks" />
        <meta
          property="og:description"
          content="Chipsona potatoes are perfect for making crispy snacks like potato chips and fries. Learn more about their texture, flavor, and best-serving methods."
        />
        <meta property="og:image" content="/assets/chipsona.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/chipsona-potatoes" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chipsona Potatoes - Perfect for Crispy Snacks" />
        <meta
          name="twitter:description"
          content="Chipsona potatoes are perfect for making crispy snacks like potato chips and fries. Learn more about their texture, flavor, and best-serving methods."
        />
        <meta name="twitter:image" content="/assets/chipsona.jpg" />
      </Head>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Chipsona Potatoes</h1>
          <h2 className={styles.subtitle}>Perfect for Crispy Snacks</h2>
          <p className={styles.tagline}>High in starch, low in sugar, ideal for chips.</p>
          <p className={styles.description}>
            Chipsona potatoes are bred for producing high-quality potato chips and fries. With their pale yellow skin and
            firm texture, these potatoes ensure a crispy and delicious snacking experience.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/chipsona.jpg"
            alt="Chipsona Potato"
            width={350}
            height={350}
            className={styles.potatoImage}
            priority
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-appearance`}>👀</div>
          <h2 className={styles.detailsTitle}>Appearance</h2>
          <p className={styles.detailsText}>
            Chipsona potatoes have pale yellow skin and white flesh, perfect for crispy fried snacks.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-texture`}>✨</div>
          <h2 className={styles.detailsTitle}>Texture</h2>
          <p className={styles.detailsText}>
            Firm and dense; holds its shape well after frying.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-flavor`}>🍴</div>
          <h2 className={styles.detailsTitle}>Flavor</h2>
          <p className={styles.detailsText}>
            Neutral taste with a hint of sweetness, making it ideal for both salty and savory snacks.
          </p>
        </div>

        <div className={`${styles.detailsCard} ${styles.bestServed}`}>
          <h2 className={styles.detailsTitle}>Best Served</h2>
          <ul className={styles.bestServedList}>
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/chips.png"
                alt="Chips"
                width={50}
                height={50}
                className={styles.bestServedImage}
              />
              <span>Chips</span>
            </li>
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/crispy_fries.png"
                alt="Crispy Fries"
                width={50}
                height={50}
                className={styles.bestServedImage}
              />
              <span>Crispy Fries</span>
            </li>
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/fried56.png"
                alt="Fried Snacks"
                width={50}
                height={50}
                className={styles.bestServedImage}
              />
              <span>Fried Snacks</span>
            </li>
          </ul>
          <div className={styles.tipBox}>
            <p>Tip: Pair with your favorite dipping sauce for an extra burst of flavor!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chip;
