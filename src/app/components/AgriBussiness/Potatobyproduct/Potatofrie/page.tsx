"use client";

import React, { useEffect, useMemo } from "react";
import Head from "next/head";
import Footer from "../../../../Footer/Footer";
import Nav from "../../../../Navbar/NavbarTYP";
import styles from "./Potatofrie.module.css";
import Image from "next/image"; // Import Image from next/image
import Link from 'next/link';


const Fri: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  // Nutritional data and benefits memoization
  const nutritionalData = useMemo(
    () => [
      { name: "Calories", value: "196 kcal" },
      { name: "Fat", value: "13.1g" },
      { name: "Sodium", value: "141mg" },
      { name: "Carbohydrates", value: "18.5g" },
      { name: "Fiber", value: "1.6g" },
      { name: "Sugars", value: "1.3g" },
      { name: "Protein", value: "1.9g" },
      { name: "Vitamin C", value: "9.7mg" },
    ],
    []
  );

  const friesBenefits = useMemo(
    () => [
      { text: "May support healthy immune function" },
      { text: "May improve early brain development" },
      { text: "May reduce oxidative stress" },
      { text: "May promote weight maintenance" },
      { text: "Low-cost source of nutrients" },
    ],
    []
  );

  const friesVarieties = useMemo(
    () => [
      {
        name: "Frozen French Fries",
        info: "224 calories, 15g fat, 295mg sodium",
      },
      {
        name: "McDonald's French Fries",
        info: "323 calories, 15.5g fat, 189mg sodium",
      },
      {
        name: "Burger King French Fries",
        info: "280 calories, 12.5g fat, 279mg sodium",
      },
      {
        name: "Restaurant French Fries",
        info: "289 calories, 14g fat, 357mg sodium",
      },
    ],
    []
  );

  return (
    <section>
      <Nav />
      {/* SEO Meta Tags */}
      <Head>
        <title>French Fries: Nutrition Facts, Benefits & Preparation Tips</title>
        <meta
          name="description"
          content="Explore the nutritional value, health benefits, varieties, and preparation methods of French fries. Learn how to make healthier versions at home!"
        />
        <meta
          name="keywords"
          content="French fries nutrition, health benefits of fries, French fries varieties, homemade French fries, low-fat fries recipe, French fries calories, fries for brain development, fries and immune health, baked fries preparation, air-fried French fries"
        />
      </Head>

      {/* French Fries Nutrition Facts Section */}
      <div>
        <br />
        <br />
        <h1 className={styles.friesTitle}>French Fries Nutrition Facts</h1>
        <div className={styles.friesImageInfo}>
          <Image
            src="/assets/fri2.png"
            alt="French Fries"
            className={styles.friesImage}
            width={600}
            height={400}
            loading="lazy"
          />
          <div className={styles.friesTextContainer}>
            <p className={styles.friesText}>
              <br />
              <br />
              French fries are a beloved side dish enjoyed worldwide, from fast-food restaurants to home kitchens. Made from potatoes, they are crispy, delicious, and versatile. However, their nutritional profile depends on how they are prepared.
            </p>
            <p className={styles.friesText}>
              While fresh potatoes are a low-calorie, nutrient-rich food, French fries can be high in fat, calories, and sodium due to frying. To enjoy fries as part of a healthy diet, opt for oven-baked or air-fried alternatives with less oil.
            </p>
          </div>
        </div>

        <h2 className={styles.friesSubtitle}>
          Nutritional Information (Per 100g Serving)
        </h2>
        <div className={styles.friesNutritionInfo}>
          {nutritionalData.map((item, index) => (
            <div className={styles.friesNutrient} key={index}>
              <p>
                <strong>{item.name}:</strong> {item.value}
              </p>
            </div>
          ))}
        </div>

        <h2 className={styles.friesSubtitle}>Varieties of French Fries</h2>
        <ul className={styles.friesBenefitsList}>
          {friesVarieties.map((variety, index) => (
            <li key={index}>
              <strong>{variety.name}:</strong> {variety.info}
            </li>
          ))}
        </ul>

        <section className={styles.testimonialsSection}>
  <div className={styles.testimonialContainer}>
    <div className={styles.testimonialImage}>
      <Image
        src="/assets/byproductimage.webp" // Update with the correct image path
        alt="Potato Flour Benefits"
        width={300}
        height={300}
        className={styles.testimonialImg}
        loading="lazy"
      />
    </div>
    <div className={styles.testimonialContent}>
      <h3 className={styles.testimonialTitle}>Why People Love Potato By-Products</h3>
      <p className={styles.testimonialText}>
POTATO BY PRODUCTS , like potato flour, have revolutionized my baking. It gives gluten-free breads and cakes a great texture and is packed with fiber and potassium. Potato starch is perfect for thickening, and potato protein is a great addition to plant-based products. These by-products are not only nutritious but also eco-friendly, reducing food waste while enhancing meals.     </p>
<Link href="/components/AgriBussiness/Potatobyproduct/">
  <button className={styles.testimonialButton}>Know More About Potato By-Products</button>
</Link>
    </div>
  </div>
</section>

        <h2 className={styles.friesSubtitle}>Health Benefits of Fries</h2>
        <ul className={styles.friesBenefitsList}>
          {friesBenefits.map((benefit, index) => (
            <li key={index}>{benefit.text}</li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default Fri;
