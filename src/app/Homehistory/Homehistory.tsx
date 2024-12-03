"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Homehistory.module.css";

const Homehistory: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Capture the current ref value.

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Add the "visible" class when the section is in view
        } else {
          setIsVisible(false); // Remove the class when the section is out of view
        }
      },
      { threshold: 0.5 } // Trigger the observer when 50% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef); // Start observing the section
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup when the component unmounts
      }
    };
  }, []); // Dependency array is empty since we only use `sectionRef.current`.

  return (
    <div
      className={`${styles.historyInfoSection} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <div
        className={`${styles.historyImageSection} ${isVisible ? styles.imageVisible : ""}`}
      >
        <Image
          src="/assets/hi.png"
          alt="Potato History Image"
          className={styles.historyMainImage}
          width={500}
          height={300}
        />
      </div>
      <div
        className={`${styles.historyContentSection} ${isVisible ? styles.contentVisible : ""}`}
      >
        <h2 className={styles.historyTitle}>History of Potatoes</h2>
        <div className={styles.historyHighlightBar}></div>
        <p className={styles.historySectionText}>
          Potatoes have a long and fascinating history, stretching back over 7,000 years to the high altitudes of the Andes Mountains in South America, where indigenous communities first domesticated them. They were a staple crop for the Incas, who cultivated hundreds of varieties suited to different microclimates and altitudes.
          <br />
          <br />
          When Spanish explorers encountered the potato in the 16th century, they brought it back to Europe, marking a turning point in global agriculture. However, as they discovered its adaptability to diverse climates and recognized its high nutritional value.
          <br />
          <br />
          Today, potatoes continue to be celebrated worldwide for their versatility and nutrition, having evolved from a South American staple to a global comfort food, supporting both tradition and innovation in countless culinary applications.
        </p>
        <div className={styles.historyButtonContainer}>
          <Link href="/components/Insight/History/" className={styles.historyButtonLearnMore}>
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homehistory;
