"use client";

import Head from 'next/head';
import React, { useEffect, useMemo } from 'react';
import styles from './Potatoflour.module.css';
import Footer from '../../../../Footer/Footer';
import Nav from '../../../../Navbar/NavbarTYP';
import Image from 'next/image';
import Link from 'next/link';


const Potatoflour: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Nutritional data is static, memoized to avoid re-creation
  const nutritionData = useMemo(
    () => [
      { label: 'Calories', value: '357 kcal' },
      { label: 'Fat', value: '0.3g' },
      { label: 'Sodium', value: '55mg' },
      { label: 'Carbohydrates', value: '83g' },
      { label: 'Fiber', value: '5.9g' },
      { label: 'Sugars', value: '3.5g' },
      { label: 'Protein', value: '6.9g' },
      { label: 'Potassium', value: '1460mg' },
    ],
    []
  );

  return (
    <section>
      <Nav />
      {/* SEO Meta Tags */}
      <Head>
        <title>Potato Flour: Benefits, Nutrition & Uses | Gluten-Free Baking</title>
        <meta
          name="description"
          content="Learn about Potato Flour: its benefits, nutritional value, uses, and drawbacks. A versatile, gluten-free flour perfect for baking, thickening, and more!"
        />
        <meta
          name="keywords"
          content="Potato Flour, gluten-free flour, potato flour benefits, potato flour nutrition, uses of potato flour, gluten-free baking, healthy flour alternatives, potato starch vs potato flour, baking with potato flour, potato flour recipes, high-fiber flour, potassium-rich flour"
        />
        <meta name="author" content="Jestina James" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Content Section */}
      <div>
        <h2 className={styles.floSectionTitle}>What is Potato Flour?</h2>
        <div className={styles.floProductInfo}>
          <Image
            src="/assets/flo.webp"
            alt="Potato Flour"
            className={styles.floProductImage}
            width={600}
            height={400}
            loading="lazy"
          />
          <p className={styles.floProductDescription}>
            <br />
            <br />
            Potato flour is made from whole peeled potatoes that are cooked, dried, and ground into a fine powder. It is a versatile ingredient widely used in gluten-free baking, offering a unique texture and flavor that enhances various recipes. Unlike potato starch, which is more refined and often used for thickening, potato flour retains more of the potatos nutrients and fiber, making it a healthier choice.
            <br />
            <br />
            In gluten-free baking, potato flour acts as a binding agent, helping to improve the structure of baked goods. It provides moisture, structure, and a soft texture, making it an excellent addition to breads, muffins, pancakes, and cakes. When combined with other gluten-free flours, such as almond or rice flour, it can help achieve a better rise and crumb.
          </p>
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
POTATO BY PRODUCTS , like potato flour, have revolutionized my baking. It gives gluten-free breads and cakes a great texture and is packed with fiber and potassium. Potato starch is perfect for thickening, and potato protein is a great addition to plant-based products. These by-products are not only nutritious but also eco-friendly, reducing food waste while enhancing meals.     </p>
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
              <div
                className={`${styles.nutrientCard} animate__animated animate__fadeInUp`}
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
          <h2 className={styles.floSectionTitle}>Health Benefits</h2>
          <div className={styles.floBenefitsContainer}>
            {[
              { text: 'Gluten-free and suitable for people with celiac disease', icon: '🌾' },
              { text: 'Rich in fiber, promoting digestive health', icon: '🩺' },
              { text: 'Low in fat and calories', icon: '⚖️' },
              { text: 'Contains high amounts of potassium for heart health', icon: '❤️' },
              { text: 'Great source of vitamins and minerals', icon: '🍎' },
              { text: 'Improves energy levels with complex carbohydrates', icon: '⚡' },
            ].map((benefit, index) => (
              <div className={styles.floBenefitCard} key={index}>
                <div className={styles.floBenefitIcon}>{benefit.icon}</div>
                <p className={styles.floBenefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage and Preparation */}
        <h2 className={styles.floSectionTitle}>How to Use Potato Flour</h2>
        <div className={styles.floUsageSection}>
          <Image
            src="/assets/cooking.png"
            alt="Cooking Icon"
            className={styles.floUsageIcon}
            width={50}
            height={50}
            loading="lazy"
          />
          <p className={styles.floUsageText}>
            Potato flour is excellent for adding moisture to baked goods like breads, muffins, and pancakes. It can also be used as a thickening agent for soups, sauces, and gravies. Use it in combination with other gluten-free flours for the best results. Try adding 1-2 tablespoons to your favorite recipes for a smooth, soft texture.
          </p>
        </div>

        {/* Potential Drawbacks */}
        <h2 className={styles.floSectionTitle}>Potential Drawbacks</h2>
        <div className={styles.floDrawbacks}>
          <div className={styles.floDrawbacksIcon}>⚠️</div>
          <p className={styles.floDrawbacksText}>
            While potato flour is a nutritious and versatile ingredient, it is high in carbohydrates, which may not be suitable for low-carb diets. Additionally, it absorbs a lot of liquid, so overuse as a thickener can result in a gummy texture in your dishes.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default Potatoflour;
