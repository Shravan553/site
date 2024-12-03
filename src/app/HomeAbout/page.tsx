import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import Link from 'next/link'; // Import Link from Next.js
import styles from './HomeAbout.module.css'; // Import CSS Module

const HomeAbout: React.FC = () => {
  return (
    <div className={styles.webabout1}>
      <div className={styles.webaboutleft}>
        {/* Use Next.js Image for optimized image rendering */}
        <Image 
          src="/assets/agpotatoabout.jpg" // Use relative path to the image in the /public folder
          alt="About AGPOTATO's success and history" 
          className={styles.webaboutimg} 
          width={500} // Specify the width
          height={300} // Specify the height
          priority={true} // Optimize image for initial page load
        />
      </div>
      <div className={styles.webaboutright}>
        <h3 className={styles.webabouthheading}>About Us</h3>
        <h2>Bridging the Gap in the Potato Supply Chain</h2>
        <br />
        <p className={styles.webaboutdescription}>
          <strong>AGPOTATO </strong> Trading Private Limited is a leading company in the potato trade, 
          acting as a vital intermediary between potato suppliers and customers. 
          We specialize in sourcing high-quality fresh potatoes from trusted 
          potato growers and efficiently distributing them to businesses in local markets.
        </p>

        <p className={styles.webabouthighlight}>
          With our extensive knowledge of agriculture and deep understanding of the 
          potato supply chain, we effectively bridge the gap between farmers and end-users, ensuring a seamless flow of fresh produce.
        </p>

        <p className={styles.webabouthighlight}>
          Through our innovative online platform, 
          agpotato.com, we have transformed the traditional <strong>agricultural</strong> supply chain, 
          making it easier for vendors to showcase their premium potatoes and for customers to access the 
          best quality fresh potatoes and related products.
        </p>

        {/* Link for navigation */}
        <Link href="/About">
          <button className={styles.webaboutknowmorebtn}>Know More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeAbout;
