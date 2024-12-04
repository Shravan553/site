

"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from "../../../Footer/Footer";
import NavbarTYP from "../../../Navbar/NavbarTYP";
import Image from 'next/image'; // Importing Image from next/image
import styles from './Meetthefarmer.module.css';
import Scroll from '@/app/Scroll/Scroll';

const Meetfarmer: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
  }, []);


  return (
    <div className={styles.supplyChainWrapper}>
      <Head>
        <title>Meet the Farmer | AGPotato</title>
        <meta name="description" content="Meet the dedicated farmers behind AGPotato. Learn about their contributions, sustainability practices, and their passion for growing high-quality potatoes." />
        <meta name="keywords" content="farmers, AGPotato, sustainability, potato farming, agricultural community" />
        <meta name="author" content="AGPotato" />
        <meta property="og:title" content="Meet the Farmer | AGPotato" />
        <meta property="og:description" content="Discover the faces behind AGPotato&apos;s premium potatoes. Meet the farmers, learn about their sustainable practices, and their impact on global agriculture." />
        <meta property="og:image" content="/assets/Meetfarmer1.jpg" />
        <meta property="og:url" content="https://www.agpotato.com/meet-the-farmer" />
      </Head>
      <NavbarTYP/>
      {/* Header Section with Image */}
      <div className={styles.supply1ChainHeader}>
        <Image
          src="/assets/Meetfarmer1.jpg"
          alt="Potato Supply Chain Header"
          className={styles.meetHeaderImage}
          width={1920}
          height={1080}
        />
        <h1 className={styles.headerTitle1}>Meet The Farmer</h1>
      </div>

      {/* Meet the Farmer Section */}
      <section className={styles.meetFarmerInfo}>
        <h2 className={styles.meetFarmerHeading}>Our Farmers, Our Heroes</h2>
        <p className={styles.meetFarmerParagraph}>
          At the heart of our supply chain are dedicated farmers who nurture the land and cultivate the finest potatoes. 
          Their passion, expertise, and hard work ensure that only the best produce reaches your table. We take pride in 
          building strong relationships with our farmers, supporting sustainable practices, and celebrating their invaluable 
          contributions to the community. Meet the people who grow with care and harvest with purpose – they are the lifeblood 
          of our mission to bring quality produce from the farm to your kitchen.
        </p>
      </section>

      {/* Farmer Gallery */}
      <section className={styles.farmerGallery}>
        <h2 className={styles.galleryHeading}>Farmer Stories Gallery</h2>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Farmer1.jpeg"
              alt="Farmer 1"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Farmer2.jpeg"
              alt="Farmer 2"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Gimage7.jpeg"
              alt="Farmer 3"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Gimage13.jpeg"
              alt="Farmer 4"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
        </div>
      </section>

  <Scroll/>
      <Footer />
    </div>
  );
};

export default Meetfarmer;
