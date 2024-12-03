"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "./salad.module.css";
import Navbar from '../../../../../Navbar/NavbarTYP';
import Footer from '../../../../../Footer/Footer';
import Link from "next/link";

 // Use module styles

const Salad: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.recipePageContainer5}>
        <Navbar/>
      <Head>
        <title>Potato Salad Recipe | Refreshing and Delicious</title>
        <meta
          name="description"
          content="Learn how to make a refreshing and delicious potato salad. Perfect for any occasion with simple ingredients like potatoes, celery, mustard, and pickles."
        />
        <meta
          name="keywords"
          content="potato salad, potato recipe, salad recipe, healthy salad, vegan potato salad, refreshing potato salad, easy potato salad, summer salad, side dish, dill pickles"
        />
        <meta
          property="og:title"
          content="Potato Salad Recipe | Refreshing and Delicious"
        />
        <meta
          property="og:description"
          content="Discover the best potato salad recipe that is perfect for any occasion. Enjoy a healthy, vegan-friendly salad with a delightful taste."
        />
        <meta property="og:image" content="/assets/salad.png" />
        <meta name="twitter:title" content="Potato Salad Recipe | Refreshing and Delicious" />
        <meta
          name="twitter:description"
          content="A delicious and easy-to-make potato salad recipe with simple ingredients like potatoes, mustard, pickles, and celery."
        />
        <meta name="twitter:image" content="/assets/salad.png" />
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
      <section className={styles.heroSection5}>
        <motion.div
          className={styles.heroContent5}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/salad.png"
            alt="Potato Salad"
            className={styles.heroImage5}
            width={1920}
            height={1080}
            priority
          />
        </motion.div>
      </section>

      <section className={styles.videoSection5}>
        <motion.video
          src="/assets/video2.mp4"
          controls
          className={styles.recipeVideo5}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className={styles.videoDescription5}>
          <h2>Watch How to Make It</h2>
          <p>Follow this step-by-step video tutorial to create a delightful potato salad.</p>
        </div>
      </section>

      <section className={styles.ingredientsSection5}>
        <h2>Ingredients</h2>
        <div className={styles.ingredientGrid5}>
          {[
            {
              src: "/assets/potato.png",
              alt: "Potato",
              text: "Potatoes - 4 medium, boiled and chopped",
            },
            {
              src: "/assets/onion.png",
              alt: "Onion",
              text: "Onion - 1 small, diced",
            },
            {
              src: "/assets/pickles.png",
              alt: "Pickles",
              text: "Dill Pickles - 1 cup, chopped",
            },
            {
              src: "/assets/mustard.png",
              alt: "Mustard",
              text: "Mustard - 3 tbsp",
            },
            {
              src: "/assets/celery.png",
              alt: "Celery",
              text: "Celery - 1 cup, diced",
            },
          ].map((ingredient, index) => (
            <motion.div
              className={styles.ingredientCard5}
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={ingredient.src}
                alt={ingredient.alt}
                className={styles.ingredientImg5}
                width={100}
                height={100}
              />
              <p>{ingredient.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.stepsSection5}>
        <h2>Steps to Make Potato Salad</h2>
        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[
            "Boil the potatoes until tender, then let them cool and chop them.",
            "In a large bowl, combine the chopped potatoes, pickles, celery, mustard, and diced onion.",
            "Mix in vegan mayo, salt, and pepper to taste.",
            "Refrigerate for at least 30 minutes before serving.",
          ].map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </motion.ol>
      </section>
      <Footer/>
    </div>
  );
};

export default Salad;
