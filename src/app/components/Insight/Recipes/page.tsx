'use client';

import React, { useEffect } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Link from 'next/link';
import styles from './PotatoRecipes.module.css'; // Importing CSS module for styles
import Navbar from '../../../Navbar/NavbarTYP';
import Footer from '../../../Footer/Footer';
import Image from 'next/image'; // Import Image from next/image for optimization

const PotatoRecipes: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define images directly in the code
  const Gimage13 = '/assets/1.jpg'; // Main image
  const Gimage14 = '/assets/2.jpg'; // Image 2
  const Gimage15 = '/assets/3.jpg'; // Image 3
  const Gimage16 = '/assets/5.jpg'; // Image 4
  const Gimage17 = '/assets/4.jpg'; // Image 5
  const Gimage18 = '/assets/6.jpg'; // Image 6
  const Gimage20 = '/assets/reci.jpg'; // Image 6 for the hero section

  // Array of images with titles and corresponding routes
  const images = [
    { src: Gimage13, title: 'Roasted Potatoes', route: '/components/Insight/Recipes/Food/Rost', description: "A delicious roasted potatoes." },
    { src: Gimage14, title: 'Mashed Potatoes', route: '/components/Insight/Recipes/Food/Mash', description: "Creamy and buttery mashed potatoes." },
    { src: Gimage15, title: 'French Fries', route: '/components/Insight/Recipes/Food/Fries', description: "Crispy golden fries, a perfect snack." },
    { src: Gimage16, title: 'Potato Salad', route: '/components/Insight/Recipes/Food/Salad', description: "A refreshing potato salad with a tangy dressing." },
    { src: Gimage17, title: 'Potato Soup', route: '/components/Insight/Recipes/Food/Soup', description: "Hearty and comforting potato soup." },
    { src: Gimage18, title: 'Potato Garlic Dish', route: '/components/Insight/Recipes/Food/Gar', description: "Flavorful potato garlic dish with rich aromas." }
  ];

  return (
    <section className={styles.recipesSection}>
      <Navbar />
      {/* Hero Section */}
      <div className={styles.recheroSection}>
        <div className={styles.recheroImageSection}>
          <Image
            src={Gimage20}
            alt="Potato Recipes"
            className={styles.recheroImage}
            width={1200} // Add width and height for optimization
            height={600}
          />
        </div>
        <div className={styles.recheroTextSection}>
          <h1>Potato Recipes</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className={styles.recdesSection}>
        <div className={styles.recdesContent}>
          <h1 className={styles.sourcingSection}>Introduction to Potato Recipes</h1>
          <p>
            Potatoes are one of the most versatile and widely consumed vegetables worldwide. From simple mashed potatoes to elaborate baked dishes, the humble potato can be transformed into a variety of mouth-watering recipes. Whether you&apos;re craving crispy fries, creamy soups, or hearty casseroles, potatoes can be the star of any meal. Their mild flavor and starchy texture allow them to complement any cuisine, making them a staple in many households.
          </p>
          <p>
            Here, we share some of the most delicious and popular potato recipes that are sure to please any palate. With endless cooking methods—from roasting and boiling to frying and grilling—there&apos;s no limit to the number of ways you can enjoy potatoes.
          </p>
        </div>
      </div>

      {/* Explore Recipes Section */}
      <div className={styles.webrecSection}>
        <h2>Explore Our Delicious Potato Recipes!</h2>
      </div>

      {/* Recipes Images Row */}
      <MDBRow className={styles.webrecImages}>
        {images.map((image, index) => (
          <MDBCol key={index} md="3" className={styles.webrecImage}>
            <div className={styles.imageContainer}>
              <Image
                src={image.src}
                alt={`Recipe ${index + 1}`}
                width={400} // Specify width and height for image optimization
                height={300}
              />
              <div className={styles.imageOverlay}>
                <h3>{image.title}</h3>
                <Link href={image.route} className={styles.viewRecipeButton}>View Recipe</Link>
              </div>
            </div>

            {/* Textbox for Description Below Image */}
            <div className={styles.descriptionBox}>
              <p>{image.description}</p>
            </div>
          </MDBCol>
        ))}
      </MDBRow>

      <Footer />
    </section>
  );
};

export default PotatoRecipes;
