"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Homenutrition.module.css";

const Homenutrition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible); // Optional if you want animations to repeat
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`${styles.potatoSection} ${styles.hidden}`}>
      <div className={`${styles.potatoImageContainer}`}>
        <Image
          src="/assets/f.png"
          alt="Nutritional Facts of Potatoes"
          className={styles.potatoMainImage}
          width={500}
          height={400}
        />
      </div>

      {/* Mobile Content */}
      <div className={styles.mobileContent}>
        Potatoes: A Nutrient-Rich Superfood
        <div className={styles.mobileButtonContainer}>
          <Link href="/components/About/" className={styles.mobileButton}>
            Know More
          </Link>
          <Link href="/components/Insight/Nutrition/" className={styles.mobileButton}>
            Facts
          </Link>
        </div>
      </div>

      {/* Desktop Content */}
      <div className={styles.potatoContentWrapper}>
        <h2 className={styles.potatoTitle}>Potato Nutrition</h2>
        <div className={styles.potatoGradientBar}></div>
        <h4 className={styles.potatoSubtitle}>Fueling Performance</h4>
        <p className={styles.potatoParagraph}>
          Potatoes are a nutrient-dense powerhouse that provides the energy, potassium, and vitamin C you need to fuel your day.
        </p>
        <h4 className={styles.potatoSubtitle}>Get the Facts</h4>
        <p className={styles.potatoParagraph}>
          Potatoes are more energy-packed than any other popular vegetable, are an excellent source of vitamin C, and have more potassium than a banana.
        </p>
        <h4 className={styles.potatoSubtitle}>In Your Diet</h4>
        <p className={styles.potatoParagraph}>
          Potatoes are naturally fat-free, cholesterol-free, and sodium-free, with only 110 calories per 5.3-ounce serving.
        </p>
        <div className={styles.potatoButtonContainer}>
          <Link href="/components/About/" className={styles.potatoButton}>
            ABOUT US
          </Link>
          <Link href="/components/Insight/Nutrition/" className={styles.potatoButton}>
            FACTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homenutrition;
