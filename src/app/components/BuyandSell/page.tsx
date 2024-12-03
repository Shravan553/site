"use client"; // Ensure this is at the top to enable client-side rendering


import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Image from 'next/image'; // Import Image component from Next.js
import styles from './BuyandSell.module.css'; // Ensure to import your styles properly
import NavbarTYP from "../../Navbar/NavbarTYP"; // Adjust the import as necessary

const BuyandSell: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Potato variants data
  const potatoVariants = [
    { name: '3797', description: 'A high-yield variety.', image: '/assets/3797.jpeg' },
    { name: '302 Hybrid', description: 'Resistant to diseases.', image: '/assets/302.jpeg' },
    { name: 'Chipsona', description: 'Popular for its taste.', image: '/assets/chipsona.jpeg' },
    { name: '2001', description: 'Ideal for making chips.', image: '/assets/2001.jpeg' },
    { name: 'Mohan', description: 'Known for its quality.', image: '/assets/mohan.jpeg' },
    { name: 'Kyathi', description: 'Excellent cooking variety.', image: '/assets/kyathi.jpeg' },
    { name: 'Jyothi', description: 'Great for frying.', image: '/assets/jyothi.jpeg' },
    { name: 'Hasan Potatoes', description: 'Well-suited for various recipes.', image: '/assets/hasan.jpeg' },
  ];

  // Byproducts data
  const byProducts = [
    { name: 'Potato Flour', description: 'A fine, gluten-free flour perfect for baking and thickening sauces.', image: '/assets/vandc5.jpg'},
    { name: 'Potato Milk', description: 'A dairy-free, plant-based milk alternative derived from potatoes.', image: '/assets/vandc6.png' },
    { name: 'Potato Fries', description: 'Crispy, golden fries made from fresh potatoes; perfect as a snack or side.', image: '/assets/vandc4.jpg' },
    { name: 'Potato Granules', description: 'Dehydrated potato granules, great for quick mashed potatoes or thickening soups.', image: '/assets/ingran.png' },
  ];

  // Frozen products data
  const frozenProducts = [
    { name: 'Veg Burger Patty', description: 'Juicy veg patties, perfect for burgers.', image: '/assets/Vegburger1.jpg' },
    { name: 'Crinkle Cut French Fries', description: 'Perfectly crispy crinkle-cut fries.', image: '/assets/curf.jpg' },
    { name: 'Spicy Wedges', description: 'Seasoned, crispy potato wedges.', image: '/assets/sv1.jpeg' },
    { name: 'Veggie Finger', description: 'Crispy veggie fingers, packed with flavor.', image: '/assets/sv2.jpg' },
    { name: 'Hash Brown', description: 'Golden, crispy hash browns.', image: '/assets/hash.jpg' },
    { name: 'Aloo Tikki', description: 'Traditional, spiced aloo tikkis.', image: '/assets/tikka1.png' },
    { name: 'Herb Chilli Patty', description: 'A flavorful herb and chili patty.', image: '/assets/chilli1.webp' },
    { name: 'Chilli Garlic Bites', description: 'Spicy bites with a kick of garlic.', image: '/assets/bite1.jpg' },
    { name: 'Potato Cheese Shotz', description: 'Cheesy goodness in every bite.', image: '/assets/balls1.jpg' },
  ];

  // Display items based on selected category
  const getDisplayItems = () => {
    if (expandedCategory === 'Fresh Potatoes') return potatoVariants;
    if (expandedCategory === 'Byproducts') return byProducts;
    if (expandedCategory === 'Frozen Products') return frozenProducts;
    return [];
  };

  // Category toggle handler
  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Handle navigation
  const handleNavigate = (path: string, queryParams: { [key: string]: string }) => {
    const search = new URLSearchParams(queryParams).toString();
    const url = `${path}?${search}`;
    window.location.href = url;  // Navigate to the URL with query params
  };

  return (
    <div>
        <NavbarTYP />
        <div className={styles.container}>
          <Head>
            <title>Vendor Customer Page</title>
            <meta name="description" content="Browse and purchase fresh potatoes, frozen products, and byproducts." />
            <meta name="keywords" content="potatoes, frozen products, byproducts" />
          </Head>

          {/* Main Image */}
          <Image src="/assets/6.png" alt="Marketplace" className={styles.marketimage} width={1200} height={800} />
          <h1 className={styles.headingpot}>Browse Our Products: Choose What You’d Like to Buy or Sell.</h1>

          {/* Category Images */}
          <div className={styles.categoryimages}>
            <div onClick={() => toggleCategory('Fresh Potatoes')}>
              <Image src="/assets/302.jpeg" alt="Fresh Potatoes" className={styles.categoryimage} width={300} height={200} />
              <p className={styles.categorytitle}>Fresh Potatoes</p>
            </div>
            <div onClick={() => toggleCategory('Byproducts')}>
              <Image src="/assets/vandc2.jpg" alt="Byproducts" className={styles.categoryimage} width={300} height={200} />
              <p className={styles.categorytitle}>Byproducts</p>
            </div>
            <div onClick={() => toggleCategory('Frozen Products')}>
              <Image src="/assets/vandc3.jpg" alt="Frozen Products" className={styles.categoryimage} width={300} height={200} />
              <p className={styles.categorytitle}>Frozen Products</p>
            </div>
          </div>

          {/* Display Selected Category Items */}
          {expandedCategory && (
            <div className={styles.potatoimagescontainer}>
              {getDisplayItems().map((item) => (
                <div className={styles.potatoitem} key={item.name}>
                  <div className={styles.potatoinforow}>
                    <Image src={item.image} alt={item.name} className={styles.potatoimage} width={200} height={200} />
                    <div className={styles.potatodetails}>
                      <h3 className={styles.potatoname}>{item.name}</h3>
                      <p className={styles.potatodescription}>{item.description}</p>
                    </div>
                    <div className={styles.potatobuttons}>
                      <button onClick={() => handleNavigate('/components/BuyandSell/Buy/', { potatoName: item.name })} className={styles.buybutton}>Buy</button>
                      <button onClick={() => handleNavigate('/components/BuyandSell/Sell', { potatoName: item.name })} className={styles.sellbutton}>Sell</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Footer />
        </div>
    </div>
  );
};

export default BuyandSell;
