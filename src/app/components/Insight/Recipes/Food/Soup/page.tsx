'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Soup.module.css';
import Navbar from '../../../../../Navbar/NavbarTYP';
import Footer from '../../../../../Footer/Footer';
import Link from 'next/link';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Soup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.recipePageContainer3}>
        <Navbar/>
      <Head>
        <meta charSet="utf-8" />
        <title>Potato4 - Delicious and Versatile Potato Recipes</title>
        <meta
          name="description"
          content="Discover a variety of potato recipes in Potato4. From mashed potatoes to fries, find delicious ways to prepare your favorite vegetable."
        />
        <meta
          name="keywords"
          content="potato recipes, mashed potatoes, fries, potato4, vegetable recipes, healthy potato dishes"
        />
        <meta
          property="og:title"
          content="Potato4 - Delicious and Versatile Potato Recipes"
        />
        <meta
          property="og:description"
          content="Explore a wide range of delicious potato recipes, from crispy fries to creamy mashed potatoes, perfect for any meal."
        />
        <meta
          property="og:image"
          content="/path/to/your/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/potato4"
        />
        <meta
          name="twitter:title"
          content="Potato4 - Delicious and Versatile Potato Recipes"
        />
        <meta
          name="twitter:description"
          content="Explore a wide range of delicious potato recipes, from crispy fries to creamy mashed potatoes, perfect for any meal."
        />
        <meta
          name="twitter:image"
          content="/path/to/your/twitter-image.jpg"
        />
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

      <section className={styles.heroSection3}>
        <div className={styles.heroContent3}>
          <Image
            src="/assets/soup.png"
            alt="Potato Soup"
            width={600}
            height={400}
            className={styles.heroImage3}
          />
          <div className={styles.heroText3}>
            {/* <p>
              Warm up with this comforting, creamy potato soup recipe that's
              perfect for any day.
            </p> */}
          </div>
        </div>
      </section>

      <section className={styles.videoSection3}>
        <video
          src="/assets/video.mp4"
          controls
          className={styles.recipeVideo}
        />
        <div className={styles.videoDescription3}>
          <h2>Watch How to Make It</h2>
          <p>
            Follow this step-by-step video tutorial to create a delicious bowl
            of potato soup.
          </p>
        </div>
      </section>

      <section className={styles.ingredientsSection3}>
        <h2>Ingredients</h2>
        <div className={styles.ingredientGrid3}>
          <div className={styles.ingredientCard3}>
            <Image
              src="/assets/potato.png"
              alt="Potato"
              width={100}
              height={100}
              className={styles.ingredientImg3}
            />
            <p>Potatoes - 5 medium</p>
          </div>
          <div className={styles.ingredientCard3}>
            <Image
              src="/assets/onion.png"
              alt="Onion"
              width={100}
              height={100}
              className={styles.ingredientImg3}
            />
            <p>Onion - 1 large, chopped</p>
          </div>
          <div className={styles.ingredientCard3}>
            <Image
              src="/assets/garlic.png"
              alt="Garlic"
              width={100}
              height={100}
              className={styles.ingredientImg3}
            />
            <p>Garlic - 2 cloves, minced</p>
          </div>
          <div className={styles.ingredientCard3}>
            <Image
              src="/assets/mix.png"
              alt="Mix"
              width={100}
              height={100}
              className={styles.ingredientImg3}
            />
            <p>Mix - as needed</p>
          </div>
          <div className={styles.ingredientCard3}>
            <Image
              src="/assets/carrot.png"
              alt="Carrot"
              width={100}
              height={100}
              className={styles.ingredientImg3}
            />
            <p>2 Carrots - Chopped in Small</p>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection3}>
        <h2>Steps to Make Potato Soup</h2>
        <ol>
          <li>Heat some oil in a pot and sauté onions and garlic until soft.</li>
          <li>Add chopped potatoes and vegetable broth, then bring to a boil.</li>
          <li>Lower the heat and simmer until the potatoes are tender.</li>
          <li>
            Blend the soup until smooth, season with salt and pepper, and serve
            hot.
          </li>
        </ol>
      </section>

      <button onClick={scrollToTop} className={styles.scrollToTop}>
        Scroll to Top
      </button>
      <Footer/>
    </div>
  );
};

export default Soup;
