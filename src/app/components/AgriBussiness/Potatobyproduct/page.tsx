"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image from next/image
import styles from './Potatobyproduct.module.css';
import Nav from '../../../Navbar/NavbarTYP';
import Footer from '../../../Footer/Footer';

// Defining the TypeScript interface for the product data
interface Product {
  img: string;
  title: string;
  description: string;
  link: string;
}

// List of products
const products: Product[] = [
  {
    img: '/assets/inflour.png',
    title: 'Potato Flour',
    description: 'A gluten-free baking essential made from high-quality, organic potatoes.',
    link: '/components/AgriBussiness/Potatobyproduct/Potatoflour',
  },
  {
    img: '/assets/inmilk.png',
    title: 'Potato Milk',
    description: 'A creamy, nutrient-rich dairy alternative perfect for smoothies and coffee.',
    link: '/components/AgriBussiness/Potatobyproduct/Potatomilk',
  },
  {
    img: '/assets/infries.png',
    title: 'Potato Fries',
    description: 'Crispy and golden, made from hand-cut, sustainably farmed potatoes.',
    link: '/components/AgriBussiness/Potatobyproduct/Potatofrie',
  },
  {
    img: '/assets/ingran.png',
    title: 'Potato Granules',
    description: 'Quick and easy mashed potatoes, packed with flavor and nutrients.',
    link: '/components/AgriBussiness/Potatobyproduct/Potatogran',
  },
];

const Potatobyproduct: React.FC = () => {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <Head>
          <title>Potato By Products | AGPotato</title>
          <meta
            name="description"
            content="Explore a variety of innovative potato by-products crafted with sustainability and creativity by AGPotato."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="/assets/1.webp"
            alt="Potato By Products"
            className={styles.heroImage}
            width={1920}
            height={1080}
          />
          <h1 className={styles.heroTitle}><b>Potato </b>By Products</h1>
          <button
            className={styles.contactButton}
            onClick={() => (window.location.href = '/components/Contact/')}
          >
            Get in Touch with Us
          </button>
        </section>

        {/* Information Section */}
        <div className={styles.pageContainer}>
          <section className={styles.infoSection}>
            <h2 className={styles.title}>
              WHY CHOOSE OUR <span className={styles.boldText}>POTATO BY PRODUCTS</span>
            </h2>
            <p className={styles.description}>
              At our company, we are committed to providing an extensive range of top-tier products derived from potatoes, catering to a variety of needs and preferences. Our offerings include high-quality potato flour, delicious chips, and a wide array of other innovative by-products, each crafted with precision and care. We place a strong emphasis on sustainability, ensuring that every product we produce not only meets the highest standards of quality but also contributes to a more eco-friendly and responsible food industry. With a dedication to excellence, we aim to be your trusted partner for premium potato-based alternatives in the market.
            </p>
          </section>
        </div>

        {/* Product Section */}
        <div className={styles.backcard}>
        <section className={styles.byprogrid} id="byproproducts">
          {products.map((product, index) => (
            <div key={index} className={styles.byprocard}>
              <div className={styles.byprocontent}>
                <Image
                  src={product.img}
                  alt={product.title}
                  className={styles.byproimage}
                  width={500} // Set width
                  height={300} // Set height
                />
                <div className={styles.byproinfo}>
                  <h2 className={styles.byprotitle}>{product.title}</h2>
                  <p className={styles.byprodescription}>{product.description}</p>
                  <Link href={product.link} className={styles.byproknowmorelink}>
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Potatobyproduct;
