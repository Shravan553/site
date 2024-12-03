"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./LogoSlider.module.css";

const LogoSlider: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isVisible to true when the section comes into view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger the animation when 50% of the section is in view
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className={styles.imageSliderLog}>
      <Head>
        <title>Our Clients - Trusted Partners</title>
        <meta
          name="description"
          content="Discover the brands we work with. Our trusted clients include Blink, DUNZO, Swiggy, Flipkart, and many more."
        />
        <meta
          name="keywords"
          content="client logos, business partners, Blink, DUNZO, BigBasket, Swiggy, Reliance, Zepto, More, client brands"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section
        ref={sectionRef}
        className={`${styles.logoSliders} ${isVisible ? styles.visible : ""}`}
      >
        <div className={styles.logoRows}>
          <div className={styles.logoTracks}>
            {[
              { src: "/assets/Blink.png", alt: "Blink logo" },
              { src: "/assets/buddha.png", alt: "Buddha logo" },
              { src: "/assets/DUNZO.png", alt: "DUNZO logo" },
              { src: "/assets/BigBasket.png", alt: "BigBasket logo" },
              { src: "/assets/flip.png", alt: "Flipkart logo" },
              { src: "/assets/Reliance.png", alt: "Reliance logo" },
              { src: "/assets/swiggy.jpg", alt: "Swiggy logo" },
              { src: "/assets/Zepto.png", alt: "Zepto logo" },
              { src: "/assets/More.jpg", alt: "More logo" },
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={styles.logos}
                loading="lazy"
                width={100} // Add appropriate width for each image
                height={100} // Add appropriate height for each image
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSlider;
