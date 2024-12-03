'use client'; // Enables client-side rendering in Next.js

import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP';

// Import CSS module
import styles from './Finger.module.css';

const Finger: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.primePotatoes}>
      <Navbar/>
      <Head>
        <title>Prime 3797 Potatoes | Best for Roasting, Mashing, and More</title>
        <meta
          name="description"
          content="Prime 3797 potatoes are perfect for various culinary uses, such as roasting, mashing, and baking. Their fluffy texture and mild flavor make them a favorite for diverse potato dishes."
        />
        <meta
          name="keywords"
          content="Prime 3797 potatoes, roasted potatoes, mashed potatoes, baked potatoes, cooking potatoes, culinary potatoes"
        />
        <meta name="author" content="Shravan" />
        <meta
          property="og:title"
          content="Prime 3797 Potatoes | Best for Roasting, Mashing, and More"
        />
        <meta
          property="og:description"
          content="Prime 3797 potatoes are known for their fluffy texture, perfect for a variety of cooking methods like roasting, mashing, and baking. Learn how to prepare them!"
        />
        <meta property="og:image" content="/assets/prime.jpg" />
        <meta property="og:url" content="http://yourwebsite.com/prime-3797-potatoes" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>{/* Add your logo here */}</div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Prime 3797</h1>
          <h2 className={styles.subtitle}>Potatoes</h2>
          <p className={styles.tagline}>A premium choice for top culinary experiences.</p>
          <p className={styles.description}>
             Prime 3797 potatoes are known for their fluffy texture, making them ideal for
            baking and mashing. With their robust flavor and versatility, they’re a favorite
            for various dishes in the kitchen.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/prime.jpg"
            alt="Prime 3797 Potato"
            className={styles.potatoImage}
            width={400}
            height={300}
            priority
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
  {/* Appearance Section */}
  <div className={styles.detailsCard}>
    <div className={`${styles.detailsIcon} icon-appearance`}>👀</div>
    <h2 className={styles.detailsTitle}>Appearance</h2>
    <p className={styles.detailsText}>
      Large, oval, and smooth-skinned with a light brown hue; great for a variety of cooking methods.
    </p>
  </div>

  {/* Texture Section */}
  <div className={styles.detailsCard}>
    <div className={`${styles.detailsIcon} icon-texture`}>✨</div>
    <h2 className={styles.detailsTitle}>Texture</h2>
    <p className={styles.detailsText}>
      Fluffy; light; becomes soft when cooked, ideal for mashing and baking.
    </p>
  </div>

  {/* Flavor Section */}
  <div className={styles.detailsCard}>
    <div className={`${styles.detailsIcon} icon-flavor`}>🍴</div>
    <h2 className={styles.detailsTitle}>Flavor</h2>
    <p className={styles.detailsText}>
      Mild and earthy; a subtle, rich flavor perfect for diverse recipes.
    </p>
  </div>

  {/* Best Served Section */}
  <div className={`${styles.detailsCard} ${styles.bestServed}`}>
    <h2 className={styles.detailsTitle}>Best Served</h2>
    <ul className={styles.bestServedList}>
      <li className={styles.bestServedItem}>
        <Image
          src="/assets/roasted12.png"
          alt="Roasted Potatoes"
          className={styles.bestServedImage}
          width={100}
          height={100}
        />{' '}
        <span>Baked or Roasted</span>
      </li>
      <li className={styles.bestServedItem}>
        <Image
          src="/assets/sauted.png"
          alt="Sautéed Potatoes"
          className={styles.bestServedImage}
          width={100}
          height={100}
        />{' '}
        <span>Sautéed</span>
      </li>
      <li className={styles.bestServedItem}>
        <Image
          src="/assets/mashed.png"
          alt="Mashed Potatoes"
          className={styles.bestServedImage}
          width={100}
          height={100}
        />{' '}
        <span>Mashed</span>
      </li>
      <li className={styles.bestServedItem}>
        <Image
          src="/assets/fried.png"
          alt="Fried Potatoes"
          className={styles.bestServedImage}
          width={100}
          height={100}
        />{' '}
        <span>Fried</span>
      </li>
    </ul>
    <div className={styles.tipBox}>
      <p>Tip: Pair with a tangy sauce or spices for an extra kick!</p>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Finger;
