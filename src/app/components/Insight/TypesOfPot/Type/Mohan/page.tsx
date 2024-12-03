"use client";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./yellow.module.css"; // Importing CSS module
import Footer from "../../../../../Footer/Footer";
import Navbar from "../../../../../Navbar/NavbarTYP"; // Assuming Footer is in the same structure

const Yellow: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.mohanSpecialPotatoes}>
      <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Mohan Special Potatoes, yellow potatoes, roasted potatoes, sautéed potatoes, mashed potatoes, fried potatoes, unique potatoes, flavor-rich potatoes"
        />
        <meta
          name="description"
          content="Mohan Special Potatoes offer a rich, earthy flavor with a smooth texture, perfect for roasting, mashing, and frying. Discover the versatility of these unique potatoes."
        />
        <meta name="author" content="Your Name or Company" />
        <title>Mohan Special Potatoes - Unique and Flavorful</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>{/* Add your logo here */}</div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Mohan Special Potatoes</h1>
          <h2 className={styles.subtitle}>Unique and Flavorful</h2>
          <p className={styles.tagline}>Perfectly balanced for taste and texture.</p>
          <p className={styles.description}>
            Mohan Special Potatoes are known for their robust, earthy flavor and smooth texture. This variety excels in versatility, making it ideal for roasting, mashing, and frying. They bring a special touch to any meal with their balanced taste and creamy finish.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/mohan.png"
            alt="Mohan Special Potato"
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
            These potatoes have smooth, light-colored skin with a creamy flesh that complements any dish visually and in flavor.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-texture`}>✨</div>
          <h2 className={styles.detailsTitle}>Texture</h2>
          <p className={styles.detailsText}>
            With a medium firmness, they maintain their structure during cooking, providing a satisfying bite in any recipe.
          </p>
        </div>

        <div className={styles.detailsCard}>
          <div className={`${styles.detailsIcon} icon-flavor`}>🍴</div>
          <h2 className={styles.detailsTitle}>Flavor</h2>
          <p className={styles.detailsText}>
            Known for a rich, earthy taste with subtle nutty notes, Mohan Special Potatoes offer a perfect blend of flavor depth.
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
            <p>Tip: Pair with fresh herbs and a drizzle of olive oil for enhanced flavor!</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Yellow;
