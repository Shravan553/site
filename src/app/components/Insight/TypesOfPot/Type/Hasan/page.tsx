'use client'; // Enables client-side rendering

import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Hasan.module.css'; // Import CSS module
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP'; // Update path as per your structure

const Hasan: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.hasanPotatoes}>
      <Navbar />
      <Head>
        <title>Hasan Potatoes - Robust, Nutritious, and Flavorful</title>
        <meta
          name="description"
          content="Hasan Potatoes are known for their hearty flavor and dense texture, making them perfect for roasting, mashing, frying, or sautéing."
        />
        <meta
          name="keywords"
          content="Hasan potatoes, robust potatoes, nutritious potatoes, flavorful potatoes, roasted potatoes, sautéed potatoes, mashed potatoes, fried potatoes"
        />
        <meta name="author" content="Your Name or Company" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hasan Potatoes - Robust, Nutritious, and Flavorful" />
        <meta
          property="og:description"
          content="Hasan Potatoes are known for their hearty flavor and dense texture, making them perfect for roasting, mashing, frying, or sautéing."
        />
        <meta property="og:image" content="/assets/hasan.jpeg" />
        <meta property="og:url" content="https://yourwebsite.com/hasan-potatoes" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hasan Potatoes - Robust, Nutritious, and Flavorful" />
        <meta
          name="twitter:description"
          content="Hasan Potatoes are known for their hearty flavor and dense texture, making them perfect for roasting, mashing, frying, or sautéing."
        />
        <meta name="twitter:image" content="/assets/hasan.jpeg" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>{/* Add your logo here */}</div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Hasan Potatoes</h1>
          <h2 className={styles.subtitle}>Robust, Nutritious, and Flavorful</h2>
          <p className={styles.tagline}>Bringing a rich texture and bold taste to every meal.</p>
          <p className={styles.description}>
            Hasan Potatoes are renowned for their hearty flavor and dense texture, making them ideal for a variety of cooking styles. They add a robust, earthy essence to meals, whether roasted, mashed, fried, or sautéed.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/hasan.jpeg"
            alt="Hasan Potato"
            width={600}
            height={400}
            className={styles.potatoImage1}
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-appearance`}>👀</div>
          <h2 className={styles.detailsTitle}>Appearance</h2>
          <p className={styles.detailsText}>
            Hasan Potatoes have a rustic, light brown skin with a firm, creamy flesh, giving them a distinctive, inviting look in any dish.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-texture`}>✨</div>
          <h2 className={styles.detailsTitle}>Texture</h2>
          <p className={styles.detailsText}>
            Known for their dense, slightly starchy texture, Hasan Potatoes hold up well in cooking, providing a satisfying bite in each recipe.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-flavor`}>🍴</div>
          <h2 className={styles.detailsTitle}>Flavor</h2>
          <p className={styles.detailsText}>
            With a deep, earthy flavor and subtle nutty undertones, Hasan Potatoes elevate any recipe, bringing a rich and savory taste.
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
            <p>Tip: Pair with a side of roasted vegetables for a balanced meal!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hasan;
