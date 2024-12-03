'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '../../../../../Footer/Footer';
import styles from './Fries.module.css';
import Navbar from '../../../../../Navbar/NavbarTYP';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image from Next.js

const Fries: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  // Define images and video directly in code
  const heroImage = '/assets/friesHeroImage.jpg';
  const videoFile = '/assets/video3.mp4';
  const rustImage = '/assets/rust.png';
  const oilImage = '/assets/oil.png';
  const saltImage = '/assets/salt.png';
  const ketchupImage = '/assets/ket.png';
  const mayoImage = '/assets/mo.png';

  return (
    <div className={styles.frirecipePageContainer}>
      <Navbar />
      <Head>
        <title>French Fries Recipe - Mohan Special Potatoes</title>
        <meta
          name="description"
          content="Learn how to make delicious homemade French fries with our step-by-step recipe using Mohan Special Potatoes."
        />
        <meta name="keywords" content="French Fries, recipe, homemade, potatoes, Mohan Special Potatoes, crispy fries" />
        <meta property="og:title" content="French Fries Recipe - Mohan Special Potatoes" />
        <meta
          property="og:description"
          content="Learn how to make delicious homemade French fries with our step-by-step recipe using Mohan Special Potatoes."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://www.yourwebsite.com/fries" />
        <meta name="twitter:title" content="French Fries Recipe - Mohan Special Potatoes" />
        <meta
          name="twitter:description"
          content="Learn how to make delicious homemade French fries with our step-by-step recipe using Mohan Special Potatoes."
        />
        <meta name="twitter:image" content={heroImage} />
      </Head>

      <section className={styles.friNav}>
        <div className={styles.friNavTitle}>Potato Recipes</div>
        <ul className={styles.friNavList}>
          <li>
            <Link href="/components/Insight/Recipes/Food/Fries" className={styles.friNavItem}>
              French Fries
            </Link>
          </li>
          <li>
            <Link href="/components/Insight/Recipes/Food/Rost" className={styles.friNavItem}>
              Roasted Potato
            </Link>
          </li>
          <li>
            <Link href="/components/Insight/Recipes/Food/Gar" className={styles.friNavItem}>
              Potato Garlic
            </Link>
          </li>
          <li>
            <Link href="/components/Insight/Recipes/Food/Mash" className={styles.friNavItem}>
              Mashed Potato
            </Link>
          </li>
          <li>
            <Link href="/components/Insight/Recipes/Food/Salad" className={styles.friNavItem}>
              Potato Salad
            </Link>
          </li>
          <li>
            <Link href="/components/Insight/Recipes/Food/Soup" className={styles.friNavItem}>
              Potato Soup
            </Link>
          </li>
        </ul>
      </section>

      {/* Hero Section */}
      <section className={styles.friheroSection}>
        <motion.div
          className={styles.friheroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={heroImage}
            alt="French Fries"
            className={styles.friheroImage}
            width={1200} // Add width and height for optimization
            height={600}
          />
        </motion.div>
      </section>

      {/* Video Section */}
      <section className={styles.frivideoSection}>
        <motion.video
          src={videoFile}
          controls
          className={styles.frirecipeVideo}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className={styles.frivideoDescription}>
          <h2>Watch How to Make It</h2>
          <p>Follow this step-by-step video tutorial to create delicious homemade French fries.</p>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className={styles.friingredientsSection}>
        <h2>Ingredients for French Fries</h2>
        <div className={styles.friingredientGrid}>
          {[{ img: rustImage, text: '4 large Russet potatoes' },
            { img: oilImage, text: 'Oil for frying' },
            { img: saltImage, text: 'Salt and pepper for seasoning' },
            { img: ketchupImage, text: 'Ketchup (optional for serving)' },
            { img: mayoImage, text: 'Mayonnaise (optional for serving)' }]
            .map((item, index) => (
              <motion.div
                key={index}
                className={styles.friingredientCard}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={item.img}
                  alt={item.text}
                  className={styles.friingredientImg}
                  width={300} // Specify width and height for image optimization
                  height={200}
                />
                <p>{item.text}</p>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.fristepsSection}>
        <h2>Steps to Make French Fries</h2>
        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <li>Wash and peel the potatoes, then cut them into thin strips.</li>
          <li>Soak the potato strips in cold water for at least 30 minutes.</li>
          <li>Heat oil in a deep pan over medium-high heat.</li>
          <li>Drain the potatoes and pat them dry with a towel.</li>
          <li>Fry the potatoes in batches until golden brown and crispy.</li>
          <li>Remove from oil, drain on paper towels, and season with salt and pepper.</li>
          <li>Serve hot with ketchup or mayonnaise.</li>
        </motion.ol>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Fries;
