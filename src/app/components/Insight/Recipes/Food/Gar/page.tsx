'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Garlic.module.css';
import Link from 'next/link';

const Garlic = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.recipePageContainer1}>
      <Head>
        <title>Garlic Chopped Potato Recipe | Delicious Potato Dish</title>
        <meta
          name="description"
          content="Learn how to make a simple and flavorful Garlic Chopped Potato recipe. A perfect side dish with butter, garlic, and parsley."
        />
        <meta
          name="keywords"
          content="garlic chopped potatoes, potato recipe, garlic potato recipe, easy garlic potatoes, homemade garlic potatoes"
        />
        <meta property="og:title" content="Garlic Chopped Potato Recipe" />
        <meta
          property="og:description"
          content="A step-by-step guide to making a delicious Garlic Chopped Potato recipe with butter, garlic, and parsley."
        />
        <meta property="og:image" content="/images/garlic1.png" />
        <meta property="og:url" content="https://www.yourwebsite.com/garlic-potato-recipe" />
        <meta name="twitter:title" content="Garlic Chopped Potato Recipe" />
        <meta
          name="twitter:description"
          content="A simple and delicious Garlic Chopped Potato recipe for a perfect side dish."
        />
        <meta name="twitter:image" content="/images/garlic1.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
      <section className={styles.heroSection1}>
        <motion.div
          className={styles.heroContent1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/garlic1.png"
            alt="Garlic Chopped Potato"
            className={styles.heroImage1}
            width={800}
            height={450}
            priority
          />
        </motion.div>
      </section>

      <section className={styles.videoSection1}>
        <motion.video
          src="/assets/video1.mp4"
          controls
          className={styles.recipeVideo1}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className={styles.videoDescription1}>
          <h2>Watch How to Make It</h2>
          <p>Follow this step-by-step video tutorial to create a delicious garlic chopped potato dish.</p>
        </div>
      </section>

      <section className={styles.ingredientsSection1}>
        <h2>Ingredients</h2>
        <div className={styles.ingredientGrid1}>
          {[
            { src: '/assets/potato.png', text: 'Medium size boiled potato - 500 gms' },
            { src: '/assets/but.png', text: 'Butter - 125 gms' },
            { src: '/assets/chop gar.png', text: 'Chopped garlic - 1/4 cup' },
            { src: '/assets/par.png', text: 'Chopped fresh parsley - a palmful' },
            { src: '/assets/salt.png', text: 'Salt - to taste' },
          ].map((ingredient, index) => (
            <motion.div
              className={styles.ingredientCard1}
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Image src={ingredient.src} alt={ingredient.text} width={80} height={80} />
              <p>{ingredient.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.stepsSection1}>
        <h2>Steps to Make Garlic Chopped Potato</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Heat butter in a pot over medium heat.</li>
          <li>Add chopped garlic and sauté until fragrant.</li>
          <li>Add boiled potatoes and mash them slightly.</li>
          <li>Pour in vegetable broth, bring to a boil, then reduce heat and simmer.</li>
          <li>Stir in chopped parsley, season with salt to taste, and serve hot.</li>
        </motion.ol>
      </section>
    </div>
  );
};

export default Garlic;
