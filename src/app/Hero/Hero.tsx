"use client";

import React, { useState, useEffect } from "react";
import styles from "../Hero/Hero.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link"; // Import Link from Next.js

const slides = [
  {
    image: "/assets/websiteimage7.png",
    heading: "AGPotato - Innovating Farming Practices",
    description:
      "Empowering farmers with cutting-edge, sustainable farming techniques for optimized yields and quality.",
    alt: "Illustration of modern farming techniques at AGPotato.",
  },
  {
    image: "/assets/potatotractor.jpg",
    heading: "AGPotato - Global Excellence in Potato Export",
    description: "Exporting the Best of Potatoes with a Focus on Sustainability.",
    alt: "Image of fresh potatoes being prepared for export.",
  },
  {
    image: "/assets/ma.png",
    heading: "AGPotato - Sustainable Potato Flour",
    description:
      "Committed to producing high-quality potato flour through sustainable practices, rich in nutrients and versatile.",
    alt: "Image showing sustainable potato flour by AGPotato.",
  },
  {
    image: "/assets/websiteimage3.jpg",
    heading: "AGPotato - Exploring the World of Potatoes",
    description:
      "Discover diverse potato varieties like Russet, Yukon Gold, Red Bliss, and Fingerlings, each with unique flavors and uses.",
    alt: "Image showing a variety of potatoes including Russet, Yukon Gold, Red Bliss, and Fingerlings.",
  },
  {
    image: "/assets/websiteimage10.png",
    heading: "AGPotato - Excellence in Prepackaging",
    description:
      "Ensuring the freshness and quality of potatoes with innovative prepackaging solutions tailored for global markets.",
    alt: "Image showing prepackaged potatoes in eco-friendly packaging, ready for distribution.",
  },
];

const WebHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Slide transition logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle window resize logic
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial mobile state on mount

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up resize listener
    };
  }, []);

  return (
    <div className={styles.webHero}>
      <Head>
        <title>AGPotato - Excellence in Sustainable Potato Products</title>
        <meta
          name="description"
          content="AGPotato leads in sustainable potato farming, producing nutrient-rich potato flour. Our eco-friendly farming techniques and global export services ensure the highest quality products. Explore our commitment to sustainability in agriculture."
        />
        <meta
          name="keywords"
          content="Potato, Sustainable Farming, AGPotato, Potato Flour, Agriculture Innovation, Sustainable Agriculture, Eco-Friendly Farming, Potato Products, Export, Nutrient-Rich Potato Flour, Sustainable Practices"
        />
      </Head>

      <div className={styles.webHeroSlider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.webHeroSlide} ${
              index === currentIndex ? styles.webActive : ""
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className={styles.slideImage}
            />
            <div className={styles.webHeroText}>
              {/* Apply animation dynamically to the active slide */}
              <h1
                className={`${styles.h1} ${
                  index === currentIndex ? styles.slideInFromLeftToRight : ""
                }`}
              >
                {slide.heading}
              </h1>
              {!isMobile && <p>{slide.description}</p>}
            </div>
            <Link href="/components/About/">
              <button className={styles.discoverButton}>Discover More</button>
            </Link>
          </div>
        ))}
        <div className={styles.webSliderControls}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.webSliderDot} ${
                index === currentIndex ? styles.webActive : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebHero;
