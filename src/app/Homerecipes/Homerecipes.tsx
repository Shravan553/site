"use client";

import React from "react";
import styles from "./Homerecipes.module.css"; // Import CSS module
import Link from "next/link"; // Next.js Link component
import Image from "next/image"; // Next.js Image component

const Homerecipes: React.FC = () => {
  const images = [
    { src: "/assets/1.jpg", title: "Roasted Potatoes", route: "/components/Insight/Recipes/Food/Rost/" },
    { src: "/assets/2.jpg", title: "Mashed Potatoes", route: "/components/Insight/Recipes/Food/Mash/" },
    { src: "/assets/3.jpg", title: "French Fries", route: "/components/Insight/Recipes/Food/Fries/" },
    { src: "/assets/5.jpg", title: "Potato Salad", route: "/components/Insight/Recipes/Food/Salad/" },
    { src: "/assets/4.jpg", title: "Potato Soup", route: "/components/Insight/Recipes/Food/Soup/" },
    { src: "/assets/6.jpg", title: "Potato Garlic Dish", route: "/components/Insight/Recipes/Food/Gar/" },
  ];

  return (
    <section className={styles.webrecSection}>
      {/* <h1 className={styles.potatoTitle}>Explore Our Delicious Potato Recipes!</h1> */}
      <div className={styles.webrecImages}>
        {images.map((image, index) => (
          <div key={index} className={styles.webrecImage}>
            <div className={styles.imageContainer}>
              <Image 
                src={image.src} 
                alt={`Recipe of Potatoes ${index + 1}`} 
                className={styles.image} 
                width={300} 
                height={200} 
              />
              <div className={styles.imageOverlay}>
                <h3>{image.title}</h3>
                <Link href={image.route} className={styles.viewRecipeButton}>
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homerecipes;
