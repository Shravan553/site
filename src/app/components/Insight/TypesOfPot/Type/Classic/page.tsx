'use client'; // Enables client-side rendering

import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './russet.module.css'; // Import CSS module
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP'; // Update path as per your structure

const Russet: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.russetPotatoes}>
      <Navbar />
      <Head>
        <title>Classic 2001 Russet Potatoes - Quality & Versatility</title>
        <meta
          name="description"
          content="Classic 2001 Russet Potatoes are perfect for baking, frying, mashing, and sautéing. Renowned for their quality, texture, and flavor."
        />
        <meta
          name="keywords"
          content="Russet potatoes, Classic 2001 potatoes, baked russet potatoes, mashed russet potatoes, fried russet potatoes, sautéed russet potatoes, best potatoes for cooking"
        />
        <meta name="author" content="Your Name or Company" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Classic 2001 Russet Potatoes - Quality & Versatility" />
        <meta
          property="og:description"
          content="Classic 2001 Russet Potatoes are perfect for baking, frying, mashing, and sautéing. Renowned for their quality, texture, and flavor."
        />
        <meta property="og:image" content="/assets/2001.webp" />
        <meta property="og:url" content="https://yourwebsite.com/classic-2001-russet-potatoes" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Classic 2001 Russet Potatoes - Quality & Versatility" />
        <meta
          name="twitter:description"
          content="Classic 2001 Russet Potatoes are perfect for baking, frying, mashing, and sautéing. Renowned for their quality, texture, and flavor."
        />
        <meta name="twitter:image" content="/assets/2001.webp" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>{/* Add your logo here */}</div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Classic 2001 Russet Potatoes</h1>
          <h2 className={styles.subtitle}>Quality & Versatility</h2>
          <p className={styles.tagline}>Time-tested quality in every bite.</p>
          <p className={styles.description}>
            Classic 2001 Russet Potatoes are celebrated for their consistent quality and exceptional taste. Their balanced
            texture and classic flavor make them a top choice for traditional recipes.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/2001.webp"
            alt="Classic 2001 Russet Potato"
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
            Medium to large size, round to oval shape, with a lightly textured tan skin and creamy white flesh.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-texture`}>✨</div>
          <h2 className={styles.detailsTitle}>Texture</h2>
          <p className={styles.detailsText}>
            Smooth, slightly firm; holds shape well during cooking, making it versatile for various dishes.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-flavor`}>🍴</div>
          <h2 className={styles.detailsTitle}>Flavor</h2>
          <p className={styles.detailsText}>
            Rich, earthy, and mildly sweet; an ideal choice for bringing out comforting flavors.
          </p>
        </div>

        <div className={`${styles.detailsCard} ${styles.bestServed}`}>
          <h2 className={styles.detailsTitle}>Best Served</h2>
          <ul className={styles.bestServedList}>
            {/* <li className={styles.bestServedItem}>
              <Image
                src="/assets/baked.png"
                alt="Baked Potato"
                width={60}
                height={60}
                className={styles.bestServedImage}
              />
              <span>Baked or Roasted</span>
            </li> */}
            <li className={styles.bestServedItem}>
              <Image
                src="/assets/sauted.png"
                alt="Sautéed Potato"
                width={60}
                height={60}
                className={styles.bestServedImage}
              />
              <span>Pan Fried or Sautéed</span>
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
            <p>Tip: Perfect with a touch of seasoning and fresh herbs!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Russet;
