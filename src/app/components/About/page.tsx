"use client";

import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import Footer from "../../Footer/Footer";
import NavbarTYP from "../../Navbar/NavbarTYP";
import Head from "next/head";
import Image from "next/image";  // Import Image component
import Scroll from "@/app/Scroll/Scroll";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const About: React.FC = () => {
  const quotes = [
    "Potatoes are the perfect comfort food.",
    "A balanced diet is a potato in each hand.",
    "Life is too short to skip potato day.",
    "Potatoes make everything better.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    scrollToTop();
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes.length]);  // Added quotes.length as a dependency

  return (
    <div>
      <div className={styles.aboutUsContainer}>
        <Head>
          <title>About AGPOTATO - Excellence in Potato Supply Chain</title>
          <meta
            name="description"
            content="Discover AGPOTATO, a leader in the potato industry, delivering high-quality products like potato fries, flour, and milk. Trusted since 2014."
          />
          <meta
            name="keywords"
            content="potato, AGPOTATO, potato supply chain, potato industry, potato fries, potato milk, potato products, sustainable agriculture, potato solutions"
          />
          <meta name="author" content="AGPOTATO Team" />
        </Head>

        <NavbarTYP />

        <section className={styles.aboutUsHero}>
          <Image
            src="/assets/imageforabout1.jpg"
            alt="About Anand Group"
            className={styles.aboutUsHeroImg}
            width={1200}
            height={600}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroText}>About AGPOTATO</h1>
            <p>Your trusted partner in the potato supply chain.</p>
          </div>
        </section>

        <section className={styles.aboutUsAgpotato}>
          <div className={styles.aboutUsAgpotatoContent}>
            <h2>About Agpotato</h2>
            <p>
              Founded in 2014, Agpotato set out with a bold vision to revolutionize the potato industry by offering a diverse range of high-quality potato products. From staple potatoes to potato fries, flour, and even potato milk, we are committed to delivering innovative solutions that meet evolving consumer needs.
            </p>
            <p>
  Over the last decade, our dedication to research, sustainability, and refining our processes has shaped Agpotato&apos;s position as a trusted name in the market. Today, we take pride in seeing our &quot;Agpotato&quot; brand thrive, reflecting our passion for excellence and innovation in every product we offer.
</p>

          </div>
        </section>

        <div className={styles.achievements}>
          <div className={styles.achievementItem}>
            <h3>10+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className={styles.achievementItem}>
            <h3>100+</h3>
            <p>Innovative Products</p>
          </div>
          <div className={styles.achievementItem}>
            <h3>1M+</h3>
            <p>Happy Customers</p>
          </div>
        </div>

        <section className={styles.marketLeaders}>
          <div className={styles.marketLeadersContent}>
            <div className={styles.textSection}>
              <h2>What We Deliver</h2>
              <p>
                As market leaders in institutional supplies, we specialize in workplace food solutions, serving factories, malls, modern retail, general retail, the skincare industry, retail, and wholesalers. Our solutions play a vital role in driving the nation economic growth by supporting key sectors.
              </p>
              <p>
                At Agpotato, we pride ourselves on being a trusted source for premium potatoes, delivering fresh, nutritious produce to our valued customers. With a focus on variety and quality, we handle the entire process from sourcing to distribution, ensuring every product meets the highest standards. Our dedication to sustainability and healthy living drives our efforts to build a strong, reliable supply chain that benefits both consumers and the environment.
              </p>
            </div>
            <div className={styles.imageSection}>
              <Image
                src="/assets/about2.png"
                alt="Agpotato Delivery"
                className={styles.marketLeadersImg}
                width={800}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className={styles.quoteSlider}>
          <div className={styles.quoteContainer}>
            <blockquote className={styles.blockquote}>
              <span>&quot;</span>
              {quotes[currentQuoteIndex]}
              <span>&quot;</span>
            </blockquote>
          </div>
        </section>

        <section className={styles.logoSliders}>
          <h2>Our Clients</h2>
          <div className={styles.logoRows}>
            <div className={styles.logoTracks}>
              {[ 
                "Blink.png",
                "buddha.png",
                "DUNZO.png",
                "BigBasket.png",
                "flip.png",
                "Reliance.png",
                "swiggy.jpg",
                "Zepto.png",
                "More.jpg",
              ].map((logo, index) => (
                <Image
                  key={index}
                  src={`/assets/${logo}`}
                  alt={`Client ${index + 1}`}
                  className={styles.logos}
                  width={100}  // Adjust width and height as needed
                  height={50}
                />
              ))}
            </div>
          </div>
        </section>
        <button onClick={scrollToTop} className={styles.scrollToTop}>
        Scroll to Top
      </button>
      <Scroll/>
        <Footer />
      </div>
    </div>
  );
};

export default About;
