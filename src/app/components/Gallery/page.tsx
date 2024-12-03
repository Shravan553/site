"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "../../Footer/Footer"; // Adjust path as per your directory structure
import styles from "./Gallery.module.css";
import NavbarTYP from "../../Navbar/NavbarTYP";
import Image from 'next/image';
// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Gallery: React.FC = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scrollToTop();
  }, []);
  return (
    <div>
                <NavbarTYP/>
    <div className={styles.galleryBody}>
      <Head>
        <meta charSet="utf-8" />
        <title>Potato Gallery | AGPotato</title>
        <meta
          name="description"
          content="Explore our gallery showcasing the journey of potatoes, from local farms to global exports. See the hard work of our farming community and our collaborations with industry leaders."
        />
        <meta
          name="keywords"
          content="potatoes, farming, potato industry, agriculture, potato export, AGPotato, farming community"
        />
        <meta property="og:title" content="Potato Gallery | AGPotato" />
        <meta
          property="og:description"
          content="Explore our gallery showcasing the journey of potatoes, from local farms to global exports. See the hard work of our farming community and our collaborations with industry leaders."
        />
        <meta
          property="og:image"
          content="/assets/Farmer2.jpeg" // Provide the relative path for the OG image
        />
        <meta property="og:url" content="https://your-website-url.com/gallery" />
        <meta name="twitter:title" content="Potato Gallery | AGPotato" />
        <meta
          name="twitter:description"
          content="Explore our gallery showcasing the journey of potatoes, from local farms to global exports. See the hard work of our farming community and our collaborations with industry leaders."
        />
        <meta name="twitter:image" content="/assets/Farmer2.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.galleryEntry}>
      <Image
  className={styles.gridItem}
  src="/assets/Farmer2.jpeg"
  alt="Gallery Entry"
  layout="responsive"
  width={750} // Provide the width of the image
  height={200} // Provide the height of the image
  priority={true} // Optional: Use if the image is important to be loaded earlier
/>
        <div className={styles.entryOverlay}>
          <h2 className={styles.entryTitle}>Gallery Images</h2>
        </div>
      </div>
      <h1 className={styles.heading}>Potato Chronicles in Pictures</h1>
      <p className={styles.sectionDescription}>
        Dive into the journey of potatoes, from planting to harvesting. These images capture the essence of potato farming, showcasing hard work, dedication, and the joy of reaping a bountiful harvest.
      </p>
      <div className={styles.gridContainer}>
       
<Image
  className={styles.gridItem}
  src="/assets/Gimage7.jpeg"
  alt="Potato-on-floor"
  layout="responsive"
  width={800} // Provide the width of the image
  height={600} // Provide the height of the image
  priority={true} // Optional: Use if the image is important to be loaded earlier
/>
     
        <Image
  className={styles.gridItem}
  src="/assets/Gimage13.jpeg"
          alt="Grown-Potatoes"
  layout="responsive"
  width={800} // Provide the width of the image
  height={600} // Provide the height of the image
  priority={true} // Optional: Use if the image is important to be loaded earlier
/>
        <Image
        className={styles.gridItem}
        src="/assets/Gimage14.jpeg"
          alt="Potato-Image"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
      </div>
      <h1 className={styles.heading1}>Exported Potato Chronicles</h1>
      <p className={styles.sectionDescription}>
        Tracing the journey of potatoes from local farms to distant foreign markets, uncovering the processes involved in harvesting, packaging, and global distribution.
      </p>
      <div className={styles.gridContainer}>
        
        <Image
        className={styles.gridItem}
        src="/assets/Gimage10.jpeg"
          alt="Exportation-of-Potatoes"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
       
         <Image
        className={styles.gridItem}
       src="/assets/Gimage12.jpeg"
          alt="Potato-Export"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
       
        <Image
        className={styles.gridItem}
      src="/assets/Gimage8.jpeg"
          alt="Potato-Transport"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
      </div>
      <h1 className={styles.heading1}>Potato Industry in the Spotlight</h1>
      <p className={styles.sectionDescription}>
        The potato industry plays a crucial role in global agriculture, with its presence expanding across news, trade magazines, and social media platforms.
      </p>
      <div className={styles.gridContainer}>
       
        <Image
        className={styles.gridItem}
       src="/assets/Gimage4.jpeg"
          alt="AGpotato-on-news1"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
       
         <Image
        className={styles.gridItem}
       src="/assets/Gimage6.jpeg"
          alt="AGpotato-on-news2"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
       
        <Image
        className={styles.gridItem}
        src="/assets/Gimage17.jpeg"
          alt="AGpotato-on-news3"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
      </div>
      <h1 className={styles.heading1}>Potato Cold Storage: Preserving Freshness</h1>
      <p className={styles.sectionDescription}>
        Cold storage plays a vital role in preserving the quality and freshness of potatoes, ensuring their availability throughout the year. It is an essential part of the potato industry to maintain supply and reduce waste.
      </p>
      <div className={styles.gridContainer}>
        
        <Image
        className={styles.gridItem}
       src="/assets/gallerycold1.jpeg"
          alt="Potato-cold-storage1"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
      <Image
        className={styles.gridItem}
       src="/assets/gallerycold2.jpeg"
          alt="Potato-cold-storage2"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
<Image
        className={styles.gridItem}
       src="/assets/gallerycold3.jpeg"
          alt="Potato-cold-storage3"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
       
        
      </div>
      <h1 className={styles.heading1}>Memorable Moments with Industry Leaders</h1>
      <p className={styles.sectionDescription}>
        In our journey towards excellence, we have had the privilege of collaborating with some of the most esteemed figures in the industry.
      </p>
      <div className={styles.gridContainer}>
      <Image
        className={styles.gridItem}
       src="/assets/Gimage5.jpeg"
          alt="Industry-Leaders2"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
<Image
        className={styles.gridItem}
      src="/assets/Gimage1.jpeg"
          alt="International-buyerseller-meet"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
<Image
        className={styles.gridItem}
      src="/assets/Gimage3.jpeg"
          alt="Industry-Leaders1"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
       
        
      </div>
      <h1 className={styles.heading1}>Our Farming Community</h1>
      <p className={styles.sectionDescription}>
        Our agricultural heroes are the dedicated farmers who work tirelessly to cultivate the land and bring food to our tables.
      </p>
      <div className={styles.gridContainer}>
      <Image
        className={styles.gridItem}
       src="/assets/Gimage11.jpeg"
          alt="Potato-Leaders"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
        
       
        <Image
        className={styles.gridItem}
      src="/assets/Gimage9.jpeg"
          alt="Potatoes-after-grown"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
        
        
        <Image
        className={styles.gridItem}
 src="/assets/Gimage18.jpeg"
          alt="Potatoes-Farm"
      
        layout="responsive"
        width={800} // Provide the width of the image
        height={600} // Provide the height of the image
        priority={true} // Optional: Use if the image is important to be loaded earlier
      />
      </div>
      <button onClick={scrollToTop} className={styles.scrollToTop}>
        Scroll to Top
      </button>
      <Footer />
    </div>
    </div>
  );
};
export default Gallery;
