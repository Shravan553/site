"use client";

import Head from 'next/head';

import React, { useEffect } from 'react';
import styles from './Coldstorage.module.css';
import { motion } from 'framer-motion';
import Footer from '../../../Footer/Footer';
import Image from "next/image";  // Import Image component

import NavbarTYP1 from '../../../Navbar/NavbarTYP';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Coldstorage: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
<div>
<NavbarTYP1/>
    
    <section
      className={styles.webcscoldstorage}
      
     
    >
      <div className={styles.webcscoldstoragewrapper}>
        {/* Header Section */}
        <div className={styles.webcscoldstorageheader}>
        <Image
  src="/assets/Coldstorageimage1.jpg"
  alt="Cold Storage Header"
  className={styles.webcsheaderimage}
  width={1200} 
  height={800}
/>

          <h1 className={styles.webcsheadertitle}>Cold Storage</h1>
          <button
            className={styles.contactButton}
            onClick={() => (window.location.href = '/components/Contact/')}
          >
            Get in Touch with Us
          </button>
        </div>


        <Head>
          <title>Cold Storage | AGPotato</title>
          <meta
            name="description"
            content="Explore AGPotato's state-of-the-art cold storage facilities engineered to preserve the quality and freshness of potatoes year-round."
          />
          <meta
            name="keywords"
            content="cold storage, potato storage, AGPotato, potato quality, fresh produce"
          />
          <meta name="author" content="AGPotato" />
        </Head>

        {/* Facilities Section */}
        <section className={styles.webcscoldstore}>
          <h2 className={styles.webcscoldstoretitle}>AGPotato Cold Storage Facilities</h2>
          <p className={styles.webcscoldstoredescription}>
            At AGPotato, our state-of-the-art cold storage facilities are meticulously engineered to preserve the quality, freshness, and nutritional value of potatoes year-round.
            Equipped with precision temperature and humidity control systems, each facility ensures ideal conditions, reducing spoilage and extending shelf life to deliver the best produce to customers.
          </p>
        </section>

        {/* Gallery Section */}
        <div className={styles.webcscoldstoragegallery1}>
          <h2>Cold Storage Facilities Gallery</h2>
          <br></br>
          <div className={styles.webcsgallerygrid1}>
          <Image
  src="/assets/coldstorage2.jpeg"
  alt="Interior view of cold storage facility with temperature-controlled storage"
  className={styles.webcsgalleryimage1}
  width={800}
  height={600}
/>
<Image
  src="/assets/coldstorage3.jpeg"
  alt="Cold storage chamber preserving potatoes in optimal conditions"
  className={styles.webcsgalleryimage1}
  width={800}
  height={600}
/>
<Image
  src="/assets/coldstorage2.jpeg"
  alt="State-of-the-art technology for potato preservation in cold storage"
  className={styles.webcsgalleryimage1}
  width={800}
  height={600}
/>
<Image
  src="/assets/coldstorage3.jpeg"
  alt="Well-maintained cold storage showcasing large capacity for potatoes"
  className={styles.webcsgalleryimage1}
  width={800}
  height={600}
/>

          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.webcscoldstoragebenefits}>
          <h2 className={styles.webcsbenefitstitle}>Benefits of Cold Storage</h2>
          <div className={styles.webcsbenefitslist}>
            {[
              { icon: '🌡️', text: 'Maintains potato quality for extended periods.' },
              { icon: '❄️', text: 'Prevents spoilage and reduces post-harvest losses.' },
              { icon: '📆', text: 'Ensures year-round supply of fresh potatoes.' },
              { icon: '📈', text: 'Helps stabilize prices in the market by controlling supply.' },
              { icon: '🌍', text: 'Supports the export of potatoes to international markets.' },
              { icon: '🔋', text: 'Enhances energy efficiency by maintaining optimal storage conditions.' },
              { icon: '🌱', text: 'Promotes sustainable practices by reducing waste and extending shelf life.' },
              { icon: '🥔', text: 'Preserves nutritional value, ensuring potatoes remain rich in vitamins and minerals.' },
              { icon: '🔒', text: 'Enhances food safety by reducing contamination risks during storage.' },
              { icon: '🚚', text: 'Facilitates efficient distribution, improving market availability and reducing delays.' },
              { icon: '🛡️', text: 'Minimizes the impact of seasonal shortages, ensuring consistent supply.' },
              { icon: '👷‍♂️', text: 'Generates employment opportunities in storage, logistics, and distribution sectors.' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.webcsbenefititem}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.icon}>{benefit.icon}</span>
                <p>{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Importance Section */}
        <div className={styles.webcscoldstoragesection}>
          <h2 className={styles.webcsimportancetitle}>Importance of Cold Storage in the Potato Supply Chain</h2>
          <p className={styles.webcsimportancedescription}>
            Cold storage plays a crucial role in preserving the quality of potatoes post-harvest. By maintaining an optimal temperature and humidity level, 
            cold storage facilities help extend the shelf life of potatoes, prevent spoilage, and reduce losses during transportation and storage. 
            This process ensures that the potatoes remain fresh, retain their nutritional value, and meet market demands year-round.
          </p>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </section>
    </div>
  );
};

export default Coldstorage;
