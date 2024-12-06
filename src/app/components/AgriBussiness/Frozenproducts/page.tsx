"use client";

import Head from 'next/head';

import React from 'react';
import styles from './Frozenproducts.module.css'; // Assuming you are using CSS modules
import Footer from '../../../Footer/Footer';
import Image from 'next/image';
import NavbarTYP from "../../../Navbar/NavbarTYP"

// Defining the product type
interface Product {
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  { name: 'Potato Cheese Shotz', image: '/assets/che.jpg', description: 'Cheesy goodness in every bite.' },
  { name: 'Crinkle Cut French Fries', image: '/assets/cri.jpg', description: 'Perfectly crispy crinkle-cut fries.' },
  { name: 'Veggie Finger', image: '/assets/veggie.jpg', description: 'Crispy veggie fingers, packed with flavor.' },
  { name: 'Hash Brown', image: '/assets/hash.jpg', description: 'Golden, crispy hash browns.' },
  { name: 'Chilli Garlic Bites', image: '/assets/lic.jpg', description: 'Spicy bites with a kick of garlic.' },
  { name: 'Herb Chilli Patty', image: '/assets/patty.jpg', description: 'A flavorful herb and chili patty.' },
  { name: 'Spicy Wedges', image: '/assets/wedges.jpg', description: 'Seasoned, crispy potato wedges.' },
  { name: 'Aloo Tikki', image: '/assets/tikki.jpg', description: 'Traditional, spiced aloo tikkis.' },
  { name: 'Veg Burger Patty', image: '/assets/veg.jpg', description: 'Juicy veg patties, perfect for burgers.' },
];

const Frozenproducts = () => {
  return (
    <div>
        <NavbarTYP/>

      {/* Frozen Hero Section */}
      <div className={styles.frozenHero}>
        <Head>
          <title>AgPotato | Frozen Products</title>
          <meta name="description" content="Explore a wide variety of frozen potato products from AgPotato, including crinkle-cut fries, hash browns, veggie fingers, and more." />
          <meta name="keywords" content="frozen potatoes, crinkle-cut fries, hash browns, veggie fingers, aloo tikki, frozen snacks, AgPotato" />
          <meta name="author" content="AgPotato" />
          <meta property="og:title" content="AgPotato | Frozen Products" />
          <meta property="og:description" content="Browse our premium collection of frozen potato products perfect for any meal." />
          <meta property="og:image" content="/assets/websiteimage1.webp" />
          <meta property="og:url" content="https://www.agpotato.com/frozen-products" />
          <meta name="twitter:title" content="AgPotato | Frozen Products" />
          <meta name="twitter:description" content="Browse our premium collection of frozen potato products perfect for any meal." />
          <meta name="twitter:image" content="/assets/websiteimage1.webp" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div className={styles.frozenHeroContent}>
            
          <h1 className={styles.frozenHeroTitle}>Frozen Products</h1>
        </div>
        <div className={styles.frozenHeroImageContainer}>
          <Image src="/assets/websiteimage1.webp" alt="Frozen potato products display showcasing variety and quality" layout="responsive" width={1920} height={1080} className={styles.frozenHeroImage} />
        </div>
      </div>
<br></br>
      <section className={styles.frozenDescriptionContainer}>
        <div className={styles.frozenDescriptionContent}>
          <h2 className={styles.frozenDescriptionTitle}>Why Choose Our Frozen Potato Products?</h2>
          <p className={styles.frozenDescriptionText}>
            Our frozen potato products are carefully selected to ensure quality and taste in every bite. 
            From crispy fries to golden hash browns, each product is frozen at peak freshness to preserve its natural flavor and texture. 
            Whether you are preparing a quick meal or a special dish, our frozen potatoes offer the perfect solution for convenience without compromising on quality.
          </p>
          <p className={styles.frozenDescriptionText}>
            With a variety of options, including spiced wedges, veggie fingers, and aloo tikkis, you can easily elevate any dish. 
            Our products are made with the finest ingredients, ensuring that every meal is both delicious and nutritious.
          </p>
        </div>
      </section>

      <h1 className={styles.centeredTitle}><center>Agpotatos Commitment to Premium Frozen Supplies</center></h1>



      <div className={styles.productsContainer}>
        {products.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <Image src={product.image} alt={product.name} width={500} height={300} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productDescription}>{product.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Frozenproducts;
