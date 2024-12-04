"use client";

import Head from 'next/head';
import React, { useEffect } from 'react';

import Image from 'next/image';
import Footer from '../../../Footer/Footer';
import NavbarTYP from '../../../Navbar/NavbarTYP';

import styles from './Supplychain.module.css';
import { FaTruck, FaUsers, FaClock } from 'react-icons/fa';
import Scroll from '@/app/Scroll/Scroll';

const SupplyChain: React.FC = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.supplyChainWrapper}>
      <Head>
        <title>Potato Supply Chain | AGPotato</title>
        <meta
          name="description"
          content="Explore the Potato Supply Chain from farm to table, including sourcing, sorting, packaging, and logistics, ensuring quality at every stage."
        />
        <meta
          name="keywords"
          content="Potato supply chain, agriculture, potato farming, logistics, packaging, cold storage, distribution, sustainable farming"
        />
        <meta name="author" content="AGPotato" />
        <meta property="og:title" content="Potato Supply Chain | AGPotato" />
        <meta
          property="og:description"
          content="Learn about the complete process of potato supply from farm to consumer, including our sustainable practices, quality control, and efficient logistics."
        />
        <meta property="og:image" content="/supplychainwebsiteimage1.png" />
        <meta property="og:url" content="https://www.agpotato.com/supplychain" />
        <meta name="twitter:title" content="Potato Supply Chain | AGPotato" />
        <meta
          name="twitter:description"
          content="Discover the full potato supply chain, from farming to consumer, with a focus on quality and sustainability."
        />
        <meta name="twitter:image" content="/supplychainwebsiteimage1.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <NavbarTYP />

      <section className={styles.supplyChainHeader}>
        <Image
          src="/assets/supplychainwebsiteimage1.png"
          alt="Potato Supply Chain Header"
          width={1200}
          height={800}
          className={styles.headerImages}
        />
        <h1 className={styles.headerTitles}>Potato Supply Chain</h1>
        <button
          className={styles.contactButton}
          onClick={() => (window.location.href = '/components/Contact/')}
        >
          Get in Touch with Us
        </button>
      </section>

      {/* Supply Chain Meaning Section */}
      <section className={styles.supplyChainMeaning}>
        <h2>Supply Chain</h2>
        <p>
          The <strong>potato supply chain</strong> encompasses all the processes involved in
          growing, harvesting, storing, processing, distributing, and delivering potatoes
          from farms to consumers. It ensures that potatoes maintain their quality through
          every stage, from cultivation to consumption, with a focus on efficient
          transportation and meeting customer demands year-round.
        </p>
      </section>

      {/* Statistics Section */}
      <section className={styles.statisticsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statBox}>
            <FaTruck className={styles.statIcon} />
            <p>Exports</p>
            <h2>150+</h2>
          </div>
          <div className={styles.statBox}>
            <FaUsers className={styles.statIcon} />
            <p>Users Visited</p>
            <h2>20,000+</h2>
          </div>
          <div className={styles.statBox}>
            <FaClock className={styles.statIcon} />
            <p>Times Accessed</p>
            <h2>500+</h2>
          </div>
        </div>
        <Image
          src="/assets/potatotractor.jpg"
          alt="Landscape"
          width={1200}
          height={800}
          className={styles.landscapeImage}
        />
      </section>

      {/* Sustainability & Business Opportunities Section */}
      <section className={styles.agpotatoInfo}>
        <div className={`${styles.infoBox} ${styles.missionBox}`}>
          <h3><b>Sustainability Efforts</b></h3>
          <p>
            We prioritize eco-friendly practices in every stage, from water conservation
            and soil health to waste reduction. Our goal is to cultivate potatoes in a way
            that enhances the environment.
          </p>
        </div>
        <div className={`${styles.infoBox} ${styles.opportunitiesBox}`}>
          <h3><b>Business Opportunities</b></h3>
          <p>
            We offer flexible supply options tailored to meet diverse needs, ensuring
            competitive pricing and high-quality products for food manufacturers, retailers,
            and wholesalers.
          </p>
        </div>
      </section>

      {/* Other Sections */}
      {[
        {
          title: 'Potato Sourcing',
          content:
            'We proudly source our potatoes directly from local farmers, ensuring that each batch is not only fresh but also of the highest quality.',
          image: '/assets/Gimage13.jpeg',
        },
        {
          title: 'Cold Storage',
          content:
            'Our advanced cold storage facilities ensure that the quality and freshness of our potatoes are preserved at their peak.',
          image: '/assets/Gimage9.jpeg',
        },
        {
          title: 'Prepackaging',
          content:
            'Our potatoes are meticulously pre-packaged to meet the specific needs and requirements of our customers.',
          image: '/assets/yellow.jpg',
        },
        {
          title: 'Retail & Consumption',
          content:
            'Potatoes are sold in stores and served in a variety of delicious dishes at restaurants, ensuring fresh quality.',
          image: '/assets/slice.jpg',
        },
      ].map((section, index) => (
        <section className={styles.csSection} key={index}>
          <div className={styles.csImage}>
            <Image src={section.image} alt={section.title} width={800} height={600} />
          </div>
          <div className={styles.csContent}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        </section>
      ))}

      {/* Logistics Section */}
      <section className={styles.csSection}>
        <div className={styles.csImage}>
          <Image src="/assets/logistic11.png" alt="Logistics & Transportation" width={800} height={600} />
        </div>
        <div className={styles.csContent}>
          <h2>Logistics & Transportation</h2>
          <p>
            Our logistics and transportation services ensure the seamless and efficient movement of potatoes.
          </p>
        </div>
      </section>

  <Scroll/>

      <Footer />
    </div>
  );
};

export default SupplyChain;
