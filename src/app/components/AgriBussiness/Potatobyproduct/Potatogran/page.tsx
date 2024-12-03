"use client";

import Head from 'next/head';
import Link from 'next/link';


import React, { useEffect, useMemo } from 'react';
import styles from './Potatogran.module.css';
import Footer from '../../../../Footer/Footer';
import Nav from '../../../../Navbar/NavbarTYP';

import Image from 'next/image';

const Potatoflour: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);


  // Nutritional data is static, memoized to avoid re-creation
  const nutritionData = useMemo(
    () => [
        { label: 'Calories', value: '360 kcal' },
        { label: 'Fat', value: '0.5g' },
        { label: 'Sodium', value: '25mg' },
        { label: 'Carbohydrates', value: '81g' },
        { label: 'Fiber', value: '6g' },
        { label: 'Sugars', value: '1g' },
        { label: 'Protein', value: '8g' },
        { label: 'Potassium', value: '1100mg' },
    ],
    []
  );

  return (
    <section>
        <Nav/>
      {/* SEO Meta Tags */}
      <Head>
        <title>Potato Flour: Benefits, Nutrition & Uses | Gluten-Free Baking</title>
        <meta
                    name="description"
                    content="Explore the benefits and uses of potato granules, a versatile dehydrated potato product perfect for cooking, soups, sauces, and snacks. Learn how to prepare and store them effectively."
                />
                <meta
                    name="keywords"
                    content="potato granules, dehydrated potatoes, instant mashed potatoes, potato snacks, potato nutrition, cooking with potato granules"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Content Section */}
      <div>
        <h2 className={styles.floSectionTitle}>Potato Granules</h2>
        <div className={styles.floProductInfo}>
          <Image
            src="/assets/gra.webp"
            alt="Potato Granuales"
            className={styles.floProductImage}
            width={600}
            height={400}
            loading="lazy"
          />
          <p className={styles.floProductDescription}>
            <br></br><br></br>
            Potato granules are a dehydrated potato product widely used in food manufacturing and home cooking. 
                            These granules are made by cooking, mashing, and drying potatoes into fine particles, which can be 
                            rehydrated and used in a variety of dishes.            <br />
            <br />
            They are a versatile ingredient, ideal for soups, sauces, snacks, and instant mashed potatoes. 
            With a long shelf life and convenience, potato granules are perfect for both industrial use and home kitchens.          </p>
        </div>



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
POTATO BY PRODUCTS , like potato flour, have revolutionized my baking. It gives gluten-free breads and cakes a great texture and is packed with fiber and potassium. Potato starch is perfect for thickening, and potato protein is a great addition to plant-based products. These by-products are not only nutritious but also eco-friendly, reducing food waste while enhancing meals.    </p>
<Link href="/components/AgriBussiness/Potatobyproduct/">
  <button className={styles.testimonialButton}>Know More About Potato By-Products</button>
</Link>
    </div>
  </div>
</section>

        <div className={styles.nutritionBox}>
  <h2 className={styles.nutritionTitle}>Nutritional Information (Per 100g Serving)</h2>
  <div className={styles.nutritionGrid}>
    {nutritionData.map((nutrient, index) => (
      <div className={`${styles.nutrientCard} animate__animated animate__fadeInUp`} key={index} style={{ animationDelay: `${index * 0.1}s` }}>
        <div className={styles.nutrientIcon}>🍽️</div>
        <p className={styles.nutrientText}>
          <strong>{nutrient.label}:</strong> {nutrient.value}
        </p>
      </div>
    ))}
  </div>
</div>


       {/* Health Benefits Section */}
<div className={styles.floHealthBenefits}>
  <h2 className={styles.floSectionTitle}>Health Benefits of Potato Granules</h2>
  <div className={styles.floBenefitsContainer}>
    {[
      { text: 'Gluten-free and ideal for people with celiac disease', icon: '✅' },
      { text: 'Rich in fiber, supporting a healthy digestive system', icon: '🥗' },
      { text: 'Low in fat and naturally cholesterol-free', icon: '🛡️' },
      { text: 'High potassium content, beneficial for heart health and blood pressure', icon: '💓' },
      { text: 'Packed with essential vitamins like B6 and C, along with minerals', icon: '🌟' },
      { text: 'Provides a quick energy boost through complex carbohydrates', icon: '⚡' },
    ].map((benefit, index) => (
      <div className={styles.floBenefitCard} key={index}>
        <div className={styles.floBenefitIcon}>{benefit.icon}</div>
        <p className={styles.floBenefitText}>{benefit.text}</p>
      </div>
    ))}
  </div>
</div>

        {/* Usage and Preparation */}
<h2 className={styles.floSectionTitle}>How to Use Potato Granules</h2>
<div className={styles.floUsageSection}>
  <Image
    src="/assets/cooking.png"
    alt="Potato Granules Icon"
    className={styles.floUsageIcon}
    width={50}
    height={50}
    loading="lazy"
  />
  <p className={styles.floUsageText}>
    Potato granules are versatile and easy to use. Rehydrate them with hot water or milk to create smooth mashed potatoes in minutes. They also work well as a thickener for soups, stews, and sauces, adding a creamy texture without lumps. Use potato granules as a binding agent in recipes like meatballs or veggie patties. For baked goods, incorporate a small amount for added moisture and flavor. Experiment by replacing some flour in recipes with potato granules to enhance softness and richness.
  </p>
</div>


        
      </div>

     
      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default Potatoflour;