'use client'; // Adding 'use client' to enable client-side rendering in Next.js

import { useEffect } from 'react';
import Image from 'next/image'; // For handling images in Next.js
import styles from './imune.module.css'; // Assuming styles are in a CSS Module
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP';
// Define images directly from the public folder (the "assets" folder should be in the public folder in Next.js)
const skin = '/assets/mentalhealth.png';
const imune2 = '/assets/imune2.jpg';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Imune = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.imuneContainer}>
        <Navbar/>
      {/* Hero Section */}
      <section className={styles.imuneHero}>
        <div className={styles.heroText}>
          <h1>Immune System</h1>
          <p>Potatoes help the immune system by providing vitamin C and fiber.</p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={skin}
            alt="Potato History"
            className={styles.potatoHeroImg}
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Immune System Section */}
      <section className={styles.immuneSystem}>
        <h2>Immune System</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Defends Against Invaders</h3>
            <p>The immune system protects the body from harmful invaders like bacteria and viruses.</p>
          </div>
          <div className={styles.card}>
            <h3>Adaptive Immunity</h3>
            <p>It can remember previous invaders and responds faster to repeated threats.</p>
          </div>
          <div className={styles.card}>
            <h3>White Blood Cells</h3>
            <p>These cells act as soldiers, fighting off infections and keeping the body safe.</p>
          </div>
          <div className={styles.card}>
            <h3>Maintains Balance</h3>
            <p>The immune system also helps regulate body functions and maintain internal balance.</p>
          </div>
        </div>
      </section>

      {/* Amazing Facts Section */}
      <section className={styles.immuneFacts}>
        <div className={styles.factsContainer}>
          <h2>Amazing Facts About the Immune System</h2>
          <div className={styles.factCards}>
            <div className={styles.factCard}>
              <i className="fas fa-shield-alt"></i>
              <h3>Fact 1</h3>
              <p>Your immune system has a memory! It can remember past infections and attack them more effectively.</p>
            </div>
            <div className={styles.factCard}>
              <i className="fas fa-virus"></i>
              <h3>Fact 2</h3>
              <p>The average persons body contains over 25 billion white blood cells to protect you from pathogens.</p>
            </div>
            <div className={styles.factCard}>
              <i className="fas fa-heartbeat"></i>
              <h3>Fact 3</h3>
              <p>Your skin is the first line of defense. It acts as a physical barrier against invaders.</p>
            </div>
            <div className={styles.factCard}>
              <i className="fas fa-microscope"></i>
              <h3>Fact 4</h3>
              <p>Fever is your immune systems way of raising the bodys temperature to fight off invaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Immune Response Section */}
      <section className={styles.immuneResponse}>
        <div className={styles.responseContainer}>
          <div className={styles.responseText}>
            <h2>Understanding the Immune Response</h2>
            <p>
              Your immune system is a complex network of cells, tissues, and organs that work together to defend your body against harmful invaders.
            </p>
            <p>
              This process involves various types of immune cells, including white blood cells that act as your bodys personal army, attacking and eliminating threats.
            </p>
          </div>
          <div className={styles.responseImage}>
            <Image
              src={imune2}
              alt="Immune Response"
              className={styles.immuneImage}
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Potato Importance Section */}
      <section className={styles.potatoImportance}>
        <div className={styles.importanceCard}>
          <h2>Why Potatoes Are Important for Your Immune System</h2>
          <p>
          Potatoes are not just a staple food in many diets; they are also a nutritional powerhouse that plays a significant role in supporting the immune system. Rich in essential vitamins and minerals, particularly vitamin C, potatoes help bolster the bodys defenses against infections. This versatile vegetable provides antioxidants that combat free radicals, reducing oxidative stress and inflammation, both of which can weaken immune function. Additionally, potatoes are an excellent source of dietary fiber, which promotes gut health—a crucial factor for a robust immune response. By delivering complex carbohydrates, they offer sustained energy necessary for the body to fend off illnesses effectively.
           Incorporating potatoes into a balanced diet not only adds flavor but also contributes to overall health, making them an invaluable ally in maintaining a strong immune system.
          </p>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className={styles.scrollToTop}>Scroll to Top</button>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Imune;
