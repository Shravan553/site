// 'use client' is used for enabling client-side rendering

'use client';

import React, { useEffect } from 'react';
import Head from 'next/head'; // Importing Next.js Head component for managing meta tags
import Footer from '../../../Footer/Footer';
import Image from 'next/image';

import Navbar from '../../../Navbar/NavbarTYP';
import styles from './PotatoHistory.module.css'; // Updated CSS import to Next.js module
import Scroll from '@/app/Scroll/Scroll';


const History = () => {
  useEffect(() => {

  }, []);

  // Define images directly in the code
  const historyImage = '/assets/HoHis.png';
  const glimps1 = '/assets/potatohistoryglimps1.jpg';
  const glimps2 = '/assets/potatohistoryglimps2.jpg';
  const glimps3 = '/assets/potatohistoryglimps3.jpg';

  // Scroll to the top function
 

  return (
    <div className={styles.historyContainer}>
      <Navbar />
      <Head>
        <title>The History of Potatoes</title>
        <meta
          name="description"
          content="Explore the fascinating history of potatoes, from their origins in South America to their global significance today."
        />
        <meta
          name="keywords"
          content="Potato history, Potato origins, South America, European cultivation, Global food history"
        />
        <meta property="og:title" content="The History of Potatoes" />
        <meta
          property="og:description"
          content="Explore the fascinating history of potatoes, from their origins in South America to their global significance today."
        />
        <meta property="og:image" content={historyImage} />
        <meta property="og:url" content="https://www.yoursite.com/potato-history" />
        <meta name="twitter:title" content="The History of Potatoes" />
        <meta
          name="twitter:description"
          content="Explore the fascinating history of potatoes, from their origins in South America to their global significance today."
        />
        <meta name="twitter:image" content={historyImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className={styles.historyHero}>
        <div className={styles.heroImage}>
          <Image
            src={historyImage}
            alt="Olden History"
            className={styles.historyHeroImg}
            layout="responsive"
            width={500}
            height={300}
          />
          <div className={styles.overlay}>
            <div className={styles.heroText}></div>
          </div>
        </div>
      </section>
      <br />
      <br />

      {/* History Info Section */}
      <section className={styles.potatoHistoryInfos}>
        <div className={styles.infoCard}>
          <h2>A Rich Journey Through Time</h2>
          <p>
            Potatoes have an ancient legacy that dates back to around 8,000 years ago in the Andean region of South
            America. Indigenous farmers first cultivated these humble tubers in the mountains of Peru and Bolivia,
            recognizing their nutritional value and versatility. In the 16th century, Spanish explorers brought potatoes
            to Europe, where they quickly spread, transforming into a staple food that fueled population growth. Today,
            potatoes are cherished worldwide, a testament to their rich history and essential role in global agriculture
            and cuisine.
          </p>
        </div>
      </section>

      <section className={styles.movableImagesSection}>
        <div>
          <center>
            <b>Potato Glimpse</b>
          </center>
          <br />
          <div className={styles.movableImagesGrid}>
            <div className={styles.movableImageWrapper}>
              <Image
                src={glimps1}
                alt="Potato History 1"
                className={styles.movableImage}
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div className={styles.movableImageWrapper}>
              <Image
                src={glimps2}
                alt="Potato History 2"
                className={styles.movableImage}
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div className={styles.movableImageWrapper}>
              <Image
                src={glimps3}
                alt="Potato History 3"
                className={styles.movableImage}
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Potato History Detailed Section */}
      <section className={styles.potatoHistoryDetails}>
      <div className={styles.historyContent}>
          <h2>The Journey of Potatoes: From Ancient Cultivation to Global Staple</h2>
          
          <p>
            The potato, a humble tuber, boasts a rich history that dates back approximately 8,000 years in the Andean region of South America. Indigenous peoples were the first to cultivate these nutrient-rich tubers in the high-altitude regions, primarily in present-day Peru and Bolivia. The potatos adaptability and versatility made it a staple food for these ancient communities.
          </p>

          <h3>Origins of Cultivation</h3>
          <p>
            The cultivation of potatoes was crucial for local populations, providing a stable food source essential for survival. Key factors contributing to the potatos significance include:
          </p>
          <ul>
            <li><strong>Nutritional Value:</strong> Potatoes are rich in carbohydrates, vitamins, and minerals, making them an ideal food source.</li>
            <li><strong>Versatility:</strong> They can be prepared in numerous ways, including boiling, baking, and frying.</li>
            <li><strong>Adaptability:</strong> Potatoes can grow in diverse climates and altitudes, making them suitable for various agricultural practices.</li>
          </ul>

          <h3>Inca Civilization and Agriculture</h3>
          <p>
            The Incas were pioneers in potato cultivation, employing advanced agricultural techniques to maximize yields. They developed methods such as:
          </p>
          <ul>
            <li><strong>Terracing:</strong> Utilizing steep mountainous terrain for planting potatoes, which helped reduce soil erosion.</li>
            <li><strong>Crop Rotation:</strong> Alternating crops to maintain soil fertility and prevent pests.</li>
            <li><strong>Storage Techniques:</strong> Using freeze-drying methods to preserve potatoes, allowing them to store food for long periods.</li>
          </ul>

          <h3>Introduction to Europe</h3>
          <p>
            In the 16th century, Spanish explorers encountered the potato during their conquests in South America. They recognized its potential and brought it back to Europe. The initial reception of potatoes in Europe was met with skepticism due to:
          </p>
          <ul>
            <li><strong>Fear of Poison:</strong> Many Europeans believed potatoes were toxic because they belonged to the nightshade family.</li>
            <li><strong>Resistance to Change:</strong> Traditional foods were deeply ingrained in European diets, making people hesitant to adopt new foods.</li>
            <li><strong>Initial Cultivation Challenges:</strong> Early attempts at cultivation faced issues like poor soil conditions and lack of knowledge about proper agricultural practices.</li>
          </ul>

          <h3>Acceptance and Rise to Popularity</h3>
          <p>
            Over time, potatoes gained acceptance, especially in countries like Ireland and France. Factors that contributed to their rise in popularity include:
          </p>
          <ul>
            <li><strong>Caloric Density:</strong> Potatoes provide high energy content, making them a vital food source during times of famine.</li>
            <li><strong>Culinary Versatility:</strong> They became integral in various dishes, from French fries to shepherds pie, showcasing their adaptability.</li>
            <li><strong>Support from Authorities:</strong> Leaders like Frederick the Great of Prussia promoted potato cultivation to combat famine.</li>
          </ul>

          <h3>Global Expansion and Modern Era</h3>
          <p>
            By the 18th century, the potato was firmly established in European agriculture, helping to sustain growing populations. Its global expansion led to:
          </p>
          <ul>
            <li><strong>Trade and Transportation:</strong> Improved trade routes facilitated the movement of potatoes to Asia, Africa, and North America.</li>
            <li><strong>Diverse Varieties:</strong> Selective breeding resulted in numerous potato varieties adapted to different climates and culinary uses.</li>
            <li><strong>Food Security:</strong> The potato became a staple crop, significantly contributing to food security in many countries.</li>
          </ul>

          <h3>Conclusion</h3>
          <p>
            From humble beginnings in the Andes to becoming a global staple, the potatos journey is a testament to its significance in human history. Today, potatoes continue to play an essential role in global food security and culinary traditions, demonstrating their lasting impact on societies worldwide.
          </p>
        </div>
      
        {/* Your detailed history content remains the same */}
      </section>

      {/* Scroll to Top Button */}
  <Scroll/>
      <Footer />
    </div>
  );
};

export default History;
