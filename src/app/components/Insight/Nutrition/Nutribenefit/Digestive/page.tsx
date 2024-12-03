'use client'; // This line ensures the component is client-side rendered

import React, { useEffect } from 'react';
import Image from 'next/image'; // Use Next.js's Image component for optimized images
import styles from './digestive.module.css'; // Scoped styles import
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP';

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Digestive = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.digestiveContainer}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.digestiveHero}>
        <div className={styles.heroImage}>
          <Image
            src="/assets/digestive1.jpg" // Use relative path or public folder path
            alt="Digestive System"
            width={800} // Adjust width and height as per your design
            height={400}
            className={styles.digestiveHeroImg}
          />
          <div className={styles.overlay}>
            <div className={styles.heroText}>
              <h1>Potatoes Help the Human Digestive System</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className={styles.cardSection}>
        <h2>How Potatoes Help the Digestive System</h2>
        <div className={styles.cardContainers}>
          {[
            { title: 'High in Fiber', description: 'Potatoes are a great source of dietary fiber, promoting healthy digestion.' },
            { title: 'Prebiotic Benefits', description: 'Resistant starch in potatoes nourishes beneficial gut bacteria.' },
            { title: 'Gut Health', description: 'Regular consumption of potatoes can help maintain a balanced digestive tract.' },
            { title: 'Hydration', description: 'The high water content in potatoes supports overall digestive hydration.' },
            { title: 'Weight Management', description: 'Potatoes are filling yet low in calories, aiding in weight control.' },
            { title: 'Vitamins and Minerals', description: 'Rich in vitamin C and B6, potatoes support digestive health and function.' },
            { title: 'Digestive Comfort', description: 'Eating potatoes can help soothe an upset stomach and reduce bloating.' },
            { title: 'Gut Motility', description: 'The fiber in potatoes enhances gut motility, helping with regular bowel movements.' },
          ].map((card, index) => (
            <div key={index} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aiding Digestion Section */}
      <section className={styles.aidingDigestion}>
        <div className={styles.digestiveBox}>
          <h2 className={styles.digestiveTitle}>Aiding the Digestive System with Potatoes</h2>
          <p className={styles.digestiveInfo}>
            Potatoes are packed with essential nutrients and dietary fiber that support a healthy digestive system. 
            The fiber helps regulate bowel movements, prevent constipation, and improve gut health. 
            Additionally, the resistant starch found in potatoes acts as a prebiotic, feeding good bacteria in the gut and promoting a balanced microbiome, 
            which is crucial for efficient digestion and nutrient absorption.
          </p>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className={styles.scrollToTop}>
        Scroll to Top
      </button>

      <Footer />
    </div>
  );
};

export default Digestive;
