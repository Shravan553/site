import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Replace Helmet with Head
// import Scroll from "./Scroll";
// import Footer from "../Footer/Footer";
import styles from "./TypesOfPotatoes.module.css"; 
import Footer from "../../../Footer/Footer";
import Navbar from "../../../Navbar/NavbarTYP";// Use CSS modules for styling

// Import potato images from the public directory
const potatoImages = [
  { 
    imageUrl: "/assets/p1.jpg", 
    title: "Prime 3797", 
    link: "/components/Insight/TypesOfPot/Type/Prime/",
    description: "Great for baking and mashing due to their fluffy texture."
  },
  { 
    imageUrl: "/assets/p2.jpg", 
    title: "Hybrid 302", 
    link: "/components/Insight/TypesOfPot/Type/Hybrid/",
    description: "Small, waxy potatoes perfect for roasting and salads."
  },
  { 
    imageUrl: "/assets/p3.jpg", 
    title: "Chipsona Delight", 
    link: "/components/Insight/TypesOfPot/Type/Chip/",
    description: "Specially grown for making crispy chips!"
  },
  { 
    imageUrl: "/assets/p4.jpg", 
    title: "Classic 2001", 
    link: "/components/Insight/TypesOfPot/Type/Classic/",
    description: "Best for soups and salads due to their firm texture."
  },
  { 
    imageUrl: "/assets/p5.jpg", 
    title: "Mohan Special", 
    link: "/components/Insight/TypesOfPot/Type/Mohan/",
    description: "These are sometimes used for extracting starch."
  },
  { 
    imageUrl: "/assets/p6.jpg", 
    title: "Kyathi Gold", 
    link: "/components/Insight/TypesOfPot/Type/Kyati/",
    description: "Ideal for creamy mashed potatoes and roasted dishes."
  },
  { 
    imageUrl: "/assets/p7.jpg", 
    title: "Jyothi Star", 
    link: "/components/Insight/TypesOfPot/Type/Jyoti/",
    description: "Commonly used for making crispy fries."
  },
  { 
    imageUrl: "/assets/p8.jpg", 
    title: "Hasan Best", 
    link: "/components/Insight/TypesOfPot/Type/Hasan/",
    description: "Ideal for making delicious mashed potatoes."
  }
];

const TypesOfPotatoes: React.FC = () => {
  return (
    <div className={styles.potatoSliderContainer}>
      <Navbar/>
      {/* Head metadata */}
      <Head>
        <title>Types of Potatoes - Discover Potato Varieties</title>
        <meta name="description" content="Explore various types of potatoes including Russet, Hybrid, Chipsona, and more. Learn about their uses and characteristics." />
        <meta name="keywords" content="potatoes, types of potatoes, russet potatoes, hybrid potatoes, chipsona, cooking, recipes, potato varieties" />
        <meta property="og:title" content="Types of Potatoes - Discover Potato Varieties" />
        <meta property="og:description" content="Explore various types of potatoes including Russet, Hybrid, Chipsona, and more. Learn about their uses and characteristics." />
        <meta property="og:image" content="/websiteimage3.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/types-of-potatoes" />
      </Head>

      {/* Hero Section */}
      <div className={styles.imageContent1}>
        <Image
          src="/assets/bud.jpg"
          alt="Types of Potatoes"
          layout="fill"
          objectFit="cover"
          className={styles.potatoImage1}
        />
        <div className={styles.tyHeroOverlay}>
          <h1 className={styles.headerTitle}>Types of Potatoes</h1>
        </div>
      </div>

      <section className={styles.potatoTypesSection5}>
        <div className={styles.potatoTypesContainer5}>
          <h2 className={styles.potatoTypesHeading5}></h2>
          <p className={styles.potatoTypesParagraph5}>
            
          </p>
        </div>
      </section>

      {/* Potato Cards */}
      <div className={styles.potatoCardsContainer}>
        {potatoImages.map((potato, index) => (
          <div key={index} className={styles.potatoCard}>
            <Image
              src={potato.imageUrl}
              alt={potato.title}
              width={300}
              height={200}
              className={styles.potatoCardImage}
            />
            <div className={styles.potatoCardInfo}>
              <h3>{potato.title}</h3>
              <p>{potato.description}</p>
              <Link href={potato.link} className={styles.knowMoreBtn}>
  Learn More
</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Content */}
      <div className={styles.additionalContent}>
        <div className={styles.centeredSection}>
          <h2>How Many Types of Potatoes Are There?</h2>
          <p>
            There are more than 200 varieties of potatoes sold throughout the United States. Each of these varieties fits into one of seven potato type categories: russet, red, white, yellow, blue/purple, fingerling, and petite.
          </p>
        </div>

        <section className={styles.flippingCardsSection}>
        <h2>Explore Our Potato Varieties</h2>
        <div className={styles.flippingCardsContainer}>
          {potatoImages.slice(0, 8).map((potato, index) => (
            <div key={index} className={styles.flippingCard}>
              <div className={styles.cardInner}>
                {/* Front Side */}
                <div className={styles.cardFront}>
                <h3>{potato.title}</h3>
                </div>
                {/* Back Side */}
                <div className={styles.cardBack} style={{ backgroundImage: `url(${potato.imageUrl})` }}>
                  <div className={styles.cardContent}>
                    <h3>{potato.title}</h3>
                    <p>{potato.description}</p>
                    <Link href={potato.link} className={styles.knowMoreBtn}>Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* New Section: Interesting Facts About Potatoes */}
        <section className={styles.potatoFactsSection}>
        <h2>Interesting Facts About Potatoes</h2>
        <div className={styles.factsContainer}>
          <div className={styles.factCard}>
            <h3>Did You Know?</h3>
            <p>Potatoes were the first vegetable grown in space aboard the Space Shuttle Columbia in 1995!</p>
          </div>
          <div className={styles.factCard}>
            <h3>Global Staple</h3>
            <p>Potatoes are the fourth largest food crop in the world, following rice, wheat, and corn.</p>
          </div>
          <div className={styles.factCard}>
            <h3>Potato Festival</h3>
            <p>Peru holds an annual Potato Day to celebrate the thousands of varieties grown there.</p>
          </div>
          <div className={styles.factCard}>
            <h3>Nutritious and Delicious</h3>
            <p>Potatoes are packed with nutrients like vitamin C, potassium, and fiber.</p>
          </div>
        </div>
      </section>
      


        {/* Potato Varieties Section */}
        {/* <section className={styles.potatoVarietiesSection1}>
          {potatoImages.map((potato, index) => (
            <div key={index} className={styles.potatoVarietyCard1}>
              <div className={styles.potatoVarietyContent1}>
                <div className={styles.potatoVarietyFront1}>
                  <h3>{potato.title}</h3>
                </div>
                <div
                  className={styles.potatoVarietyBack1}
                  style={{
                    backgroundImage: `url(${potato.imageUrl})`,
                  }}
                >
                  <p className={styles.potatoDescription1}>{potato.description}</p>
                  <Link href={potato.link} className={styles.knowMoreBtn}>
  Learn More
</Link>
                </div>
              </div>
            </div>
          ))}
        </section> */}
      </div>

      {/* <Scroll /> */}
      <Footer />
    </div>
  );
};

export default TypesOfPotatoes;
