"use client";
import Head from 'next/head';

import React from "react";
import styles from "./Campus.module.css"; // Import styles as a module
import Image from "next/image"; // Use Next.js Image component for optimization
import Link from "next/link";

const imagePaths = [
  "/assets/Gimage1.jpeg",
  "/assets/Gimage2.jpeg",
  "/assets/Gimage3.jpeg",
  "/assets/Gimage4.jpeg",
  "/assets/Gimage5.jpeg",
  "/assets/Gimage6.jpeg",
  "/assets/Gimage7.jpeg",
  "/assets/Gimage8.jpeg",
  "/assets/Gimage9.jpeg",
  "/assets/Gimage10.jpeg",
  "/assets/Gimage11.jpeg",
  "/assets/Gimage12.jpeg",
  "/assets/Gimage13.jpeg",
  "/assets/Gimage14.jpeg",
  "/assets/Gimage15.jpeg",
  "/assets/Gimage16.jpeg",
];

const Campus: React.FC = () => {
  return (
    <div className={styles.campus}>
      <Head>
        <title>Potato Gallery - A Journey Through the World of Potatoes</title>
        <meta
          name="description"
          content="Explore the world of potatoes through our gallery. See the beauty of potato cultivation, harvesting, and its global journey."
        />
        <meta
          name="keywords"
          content="potato gallery, potato cultivation, potato farming, global potatoes, potato images, agriculture gallery, potato harvest, potato industry"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={styles.gallery}>
        {imagePaths.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Potato Gallery Image ${index + 1}`}
            width={400} // Adjust width to your layout
            height={300} // Adjust height to your layout
            loading="lazy"
            className={styles.image}
          />
        ))}
      </div>

      
      <Link href="/components/Gallery/" className={styles.knowMoreBtn}>
        Know More
          </Link>
    </div>
  );
};

export default Campus;
