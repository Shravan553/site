'use client';

import React, { useEffect } from 'react';
import Image from 'next/image'; // Import Image from Next.js
import styles from './skin.module.css'; // CSS module for styles
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP';

const Skin = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.skinPageContainer}>
      <Navbar />
      {/* Background Image */}
      <div className={styles.backgroundImageContainer}>
        <Image 
          src="/assets/skincare1.jpg" 
          alt="Potato benefits for skin" 
          className={styles.backgroundImage} 
          width={1920} 
          height={1080} 
        />
      </div>

      {/* Text Overlay */}
      <div className={styles.overlayTextContainer}>
        <h1 className={styles.overlayHeading}>Potatoes on Skin</h1>
        <p className={styles.overlayDescription}>
          Unlock the natural glow with the skin-enhancing power of potatoes.
        </p>
      </div>

      {/* New Section Below the Image */}
      <div className={styles.infoSection}>
        <h2 className={styles.infoHeading}>Why Potatoes are Important for the Skin</h2>
        <p className={styles.infoDescription}>
          Potatoes are rich in vitamins and minerals like vitamin C and B-complex, which promote skin rejuvenation...
        </p>
      </div>

      {/* Home Remedies Section - 1 */}
      <div className={styles.homeRemedySection}>
        <h2 className={styles.remedyHeading}>Home Remedies with Potatoes - 1</h2>
        <div className={styles.remedyContent}>
          <Image 
            src="/assets/honey.png" 
            alt="Home Remedy" 
            className={styles.remedyImage} 
            width={300} 
            height={300} 
          />
          <h3 className={styles.remedyTitle}>Potato and Honey Face Mask</h3>
          <h4>Ingredients:</h4>
          <ul className={styles.ingredientsList}>
            <li>1 medium potato</li>
            <li>1 tablespoon honey</li>
            <li>1 tablespoon yogurt (optional)</li>
          </ul>
          <p className={styles.remedyDescription}>
            Mix the grated potato with honey and yogurt to form a paste. Apply it to your face and leave it on for 15-20 minutes.
          </p>
        </div>
      </div>

      {/* Home Remedies Section - 2 */}
      <div className={styles.homeRemedySection}>
        <h2 className={styles.remedyHeading}>Home Remedies with Potatoes - 2</h2>
        <div className={styles.remedyContent}>
          <Image 
            src="/assets/curd.jpg" 
            alt="Home Remedy" 
            className={styles.remedyImage} 
            width={300} 
            height={300} 
          />
          <h3 className={styles.remedyTitle}>Potato and Yogurt Mask</h3>
          <h4>Ingredients:</h4>
          <ul className={styles.ingredientsList}>
            <li>1 medium potato</li>
            <li>2 tablespoons yogurt</li>
          </ul>
          <p className={styles.remedyDescription}>
            Apply the mixture on your face and leave it for 20 minutes. Rinse with water for nourished skin.
          </p>
        </div>
      </div>

      {/* Home Remedies Section - 3 */}
      <div className={styles.homeRemedySection}>
        <h2 className={styles.remedyHeading}>Home Remedies with Potatoes - 3</h2>
        <div className={styles.remedyContent}>
          <Image 
            src="/assets/slice.jpg" 
            alt="Home Remedy" 
            className={styles.remedyImage} 
            width={300} 
            height={300} 
          />
          <h3 className={styles.remedyTitle}>Potato Slices for Puffy Eyes</h3>
          <h4>Ingredients:</h4>
          <ul className={styles.ingredientsList}>
            <li>1 medium potato</li>
          </ul>
          <p className={styles.remedyDescription}>
            Cut the potato into slices and place them over your eyes for 15-20 minutes to reduce puffiness.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className={styles.scrollToTop}>
        Scroll to Top
      </button>

      <Footer />
    </div>
  );
};

export default Skin;
