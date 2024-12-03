"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Homepotatotype.module.css"; // Importing the CSS module
import Link from "next/link";
import Image from "next/image";

const Homepotatotype: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        } else {
          setIsVisible(false); // Optional: remove animation when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Capture the current value of aboutSectionRef in a variable
    const currentAboutSection = aboutSectionRef.current;

    if (currentAboutSection) {
      observer.observe(currentAboutSection);
    }

    return () => {
      if (currentAboutSection) {
        observer.unobserve(currentAboutSection);
      }
    };
  }, []); // Empty dependency array to only run once when component mounts

  return (
    <div
      className={`${styles.about} ${isVisible ? styles.visible : ""}`}
      ref={aboutSectionRef}
    >
      <div
        className={`${styles.aboutLeft} ${isVisible ? styles.visible : ""}`}
      >
        <Image
          src="/assets/tyimage1.jpg"
          alt="Types of Potatoes"
          className={styles.aboutImg}
          width={500}
          height={300}
        />
      </div>
      <div
        className={`${styles.aboutRight} ${isVisible ? styles.visible : ""}`}
      >
        <h3 className={styles.aboutTitle}>TYPES OF POTATOES</h3>
        <h2 className={styles.aboutSubtitle}>
          Explore Our Premium Potato Varieties
        </h2>
        <p className={styles.aboutText}>
          AGPotato offers a variety of premium potato types suited for all
          needs. Our <strong>3797</strong> variety is prized for its high yield
          and adaptability across regions. The <strong>302 Hybrid</strong> is
          known for its disease resistance and ideal chip-making quality.{" "}
          <strong>Chipsona 2001</strong> is specially cultivated for producing
          crispy, golden chips with minimal oil absorption. The{" "}
          <strong>Mohan</strong> and <strong>Kyathi</strong> varieties are
          versatile, with excellent texture for boiling, frying, or baking.{" "}
          <strong>Jyothi</strong> and <strong>Hasan Potatoes</strong> are
          favored for their smooth texture and delicious flavor, perfect for a
          range of culinary applications.
        </p>
        <Link href="/components/Insight/TypesOfPot/" className={styles.knowMoreBtn}>
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Homepotatotype;
