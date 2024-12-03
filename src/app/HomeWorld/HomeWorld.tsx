import React from 'react';
import Image from 'next/image';
 // Ensure the path points to public folder
import styles from './HomeWorld.module.css'; // Import the CSS Module

const WorldMap: React.FC = () => {
  return (
    <div className={styles.mapMapMap}>
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <h1 className={styles.mapName}>
          Expanding Horizons: The Journey of Our Potatoes Abroad
        </h1>

        {/* Image with Next.js Image Component for optimization */}
        <Image
          src="/assets/websiteimage9.png"
                  alt="World Map of potato Export"
          layout="responsive"
          width={1200} // Adjust width as per your design
          height={800} // Adjust height to maintain aspect ratio
        />

        {/* Markers */}
        <div className={`${styles.marker} ${styles.usa}`}>
          <span className={styles.markerText}>USA-1.12 million</span>
        </div>
        <div className={`${styles.marker} ${styles.netherlands}`}>
          <span className={styles.markerText}>Netherlands-109.27 million</span>
        </div>
        <div className={`${styles.marker} ${styles.uae}`}>
          <span className={styles.markerText}>UAE-1.12 million</span>
        </div>
        <div className={`${styles.marker} ${styles.india}`}>
          <span className={styles.markerText}>India</span>
        </div>
        <div className={`${styles.marker} ${styles.australia}`}>
          <span className={styles.markerText}>Australia - 0.98 million</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
