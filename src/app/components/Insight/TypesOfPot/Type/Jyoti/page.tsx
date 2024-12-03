'use client'; // Enables client-side rendering

import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Jyoti.module.css'; // Import CSS module
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP'; // Update path as per your structure

const Jyoti: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.jyotiPotatoes}>
      <Navbar />
      <Head>
        <title>Jyoti Potatoes - Smooth, Balanced, and Flavorful</title>
        <meta
          name="description"
          content="Jyoti Potatoes are perfect for enhancing any dish with its smooth, balanced flavor and texture. Ideal for roasting, sautéing, mashing, or frying."
        />
        <meta
          name="keywords"
          content="Jyoti potatoes, smooth potatoes, balanced potatoes, flavorful potatoes, roasted potatoes, sautéed potatoes, mashed potatoes, fried potatoes"
        />
        <meta name="author" content="Your Name or Company" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jyoti Potatoes - Smooth, Balanced, and Flavorful" />
        <meta
          property="og:description"
          content="Jyoti Potatoes are perfect for enhancing any dish with its smooth, balanced flavor and texture. Ideal for roasting, sautéing, mashing, or frying."
        />
        <meta property="og:image" content="/assets/jyothi.webp" />
        <meta property="og:url" content="https://yourwebsite.com/jyoti-potatoes" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jyoti Potatoes - Smooth, Balanced, and Flavorful" />
        <meta
          name="twitter:description"
          content="Jyoti Potatoes are perfect for enhancing any dish with its smooth, balanced flavor and texture. Ideal for roasting, sautéing, mashing, or frying."
        />
        <meta name="twitter:image" content="/assets/jyothi.webp" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>{/* Add your logo here */}</div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Jyoti Potatoes</h1>
          <h2 className={styles.subtitle}>Smooth, Balanced, and Flavorful</h2>
          <p className={styles.tagline}>Perfect for enhancing any dish with its subtle flavors.</p>
          <p className={styles.description}>
            Jyoti Potatoes are celebrated for their balanced flavor and texture, making them an ideal choice for various cooking methods. They bring a rich, earthy taste that enhances any meal, whether roasted, mashed, fried, or sautéed.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/jyothi.webp"
            alt="Jyoti Potato"
            width={400}
            height={300}
            className={styles.potatoImage}
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <div className={styles.detailsCard}>
        <div className={`${styles.detailsIcon} icon-appearance`}>👀</div>
          <h2 className={styles.detailsTitle}>Appearance</h2>
          <p className={styles.detailsText}>
            Jyoti Potatoes have a smooth skin and a light, creamy interior, providing an inviting look and versatile use in dishes.
          </p>
        </div>

        <div className={styles.detailsCard}>
        <div className={`${styles.detailsIcon} icon-texture`}>✨</div>
          <h2 className={styles.detailsTitle}>Texture</h2>
          <p className={styles.detailsText}>
            Known for a balanced, slightly waxy texture, Jyoti Potatoes retain their structure well during cooking, providing an enjoyable bite in each recipe.
          </p>
        </div>

        <div className={styles.detailsCard}>
        <div className={`${styles.detailsIcon} icon-flavor`}>🍴</div>
          <h2 className={styles.detailsTitle}>Flavor</h2>
          <p className={styles.detailsText}>
            Jyoti Potatoes feature a mild, earthy flavor with a hint of natural sweetness, making them an adaptable ingredient for numerous recipes.
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
            <p>Tip: Enhance flavors with a touch of butter and herbs!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jyoti;
