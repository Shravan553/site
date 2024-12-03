"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "./rost.module.css";
import Navbar from "../../../../../Navbar/NavbarTYP";
import Footer from "../../../../../Footer/Footer";
import Link from "next/link";

const Rost: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.recipePageContainer4}>
      <Navbar/>
      <Head>
        <title>Roasted Potatoes Recipe - AgPotato</title>
        <meta
          name="description"
          content="Discover our delicious roasted potatoes recipe. Perfectly crispy on the outside and fluffy on the inside, seasoned with olive oil, salt, pepper, paprika, and Parmesan cheese. Follow our step-by-step guide for a flavorful side dish."
        />
        <meta
          name="keywords"
          content="roasted potatoes, side dish, crispy potatoes, easy recipe, delicious recipes"
        />
        <meta name="author" content="AgPotato" />
        <meta property="og:title" content="Roasted Potatoes Recipe - AgPotato" />
        <meta
          property="og:description"
          content="Discover our delicious roasted potatoes recipe. Perfectly crispy on the outside and fluffy on the inside, seasoned with olive oil, salt, pepper, paprika, and Parmesan cheese."
        />
        <meta property="og:image" content="/assets/roasted-potatoes-hero.jpg" />
        <meta property="og:url" content="https://www.agpotato.com/roasted-potatoes" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roasted Potatoes Recipe - AgPotato" />
        <meta
          name="twitter:description"
          content="Discover our delicious roasted potatoes recipe. Perfectly crispy on the outside and fluffy on the inside, seasoned with olive oil, salt, pepper, paprika, and Parmesan cheese."
        />
        <meta name="twitter:image" content="/assets/roasted-potatoes-hero.jpg" />
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
      <section className={styles.heroSection4}>
        <Image
          src="/assets/Roasted.png"
          alt="Roasted Potatoes"
          className={styles.heroImage4}
          width={1920}
          height={1080}
          priority
        />
        <motion.div
          className={styles.heroContent4}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroHeading4}>Roasted Potatoes</h1>
        </motion.div>
      </section>

      <section className={styles.videoSection4}>
        <motion.video
          src="/assets/video5.mp4"
          controls
          className={styles.recipeVideo4}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className={styles.videoDescription4}>
          <h2>Watch How to Make It</h2>
          <p>
            Follow this step-by-step video tutorial to create delicious roasted
            potatoes.
          </p>
        </div>
      </section>

      <section className={styles.ingredientsSection4}>
        <h2>Ingredients for Roasted Potatoes</h2>
        <div className={styles.ingredientGrid4}>
          {[
            {
              img: "/assets/potato.png",
              text: "2 pounds (900g) potatoes",
            },
            {
              img: "/assets/oil.png",
              text: "4 tbsp (60g) olive oil",
            },
            {
              img: "/assets/salt.png",
              text: "1 tsp (5g) salt & pepper for seasoning",
            },
            {
              img: "/assets/parmesan.png",
              text: "1/2 cup (50g) Parmesan cheese",
            },
            {
              img: "/assets/paprika.png",
              text: "1 tsp (3g) paprika",
            },
          ].map((ingredient, index) => (
            <motion.div
              className={styles.ingredientCard4}
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={ingredient.img}
                alt={ingredient.text}
                className={styles.ingredientImg4}
                width={100}
                height={100}
              />
              <p>{ingredient.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.stepsSection4}>
        <h2>Steps to Make Roasted Potatoes</h2>
        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[
            "Preheat your oven to 425°F (220°C).",
            "Wash and peel the potatoes, then cut them into evenly sized chunks.",
            "In a large bowl, toss the potatoes with olive oil, salt, pepper, and paprika.",
            "Spread the potatoes in a single layer on a baking sheet.",
            "Roast in the oven for 25-30 minutes, flipping halfway through.",
            "Sprinkle Parmesan cheese over the potatoes and roast for another 5-10 minutes until golden and crispy.",
            "Remove from the oven, season with more salt if needed, and serve hot.",
          ].map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </motion.ol>
      </section>
      <Footer/>
    </div>
  );
};

export default Rost;
