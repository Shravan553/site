'use client'; // This directive ensures client-side rendering for this component

import Link from "next/link";
import Image from 'next/image';
import styles from './NutritionalFacts.module.css';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../../app/Navbar/NavbarTYP';

// Define the structure of the testimonial and benefits data
interface Testimonial {
  feedback: string;
  position: string;
}

interface Benefit {
  title: string;
  image: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    feedback: "Potatoes are a nutrient-dense food that provides essential vitamins and minerals, making them a great addition to a balanced diet.",
    position: "A Nutritional Treasure",
  },
  {
    feedback: "A medium potato contains more potassium than a banana, making it a powerhouse for maintaining proper bodily functions.",
    position: "Nutrient-Rich Delight",
  },
  {
    feedback: "With their diverse preparation methods, potatoes can be enjoyed in countless dishes, making healthy eating delicious and fun!",
    position: "Maintain Diet with Potatoes",
  },
];

const benefitsData: Benefit[] = [
  { title: 'Benefits to Skin', image: '/assets/skin23.jpg', link: '/components/Insight/Nutrition/Nutribenefit/Skin' },
  { title: 'Benefits to the Immune System', image: '/assets/im34.webp', link: '/components/Insight/Nutrition/Nutribenefit/Imune' },
  { title: 'Digestive Health', image: '/assets/di23.webp', link: '/components/Insight/Nutrition/Nutribenefit/Digestive' },
];
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const NutritionalFacts = () => {
  return (
    <div className={styles.nutriContainer}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image 
            src="/assets/jh.png" 
            alt="Hero" 
            className={styles.heroImage} 
            width={500} 
            height={300} 
          />
          <svg className={styles.wave} viewBox="0 0 1440 320">
            <path fill="#fff" d="M0,96L30,112C60,128,120,160,180,165.3C240,171,300,149,360,149.3C420,149,480,171,540,186.7C600,203,660,213,720,202.7C780,192,840,160,900,149.3C960,139,1020,149,1080,160C1140,171,1200,181,1260,160C1320,139,1380,85,1410,64L1440,43L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          </svg>
        </div>
        <div className={styles.heroOverlay}>
          {/* <h1 className={styles.heroTitle}>Nutritional Facts</h1> */}
        </div>
      </section>

      {/* Nutritional Facts Section */}
      <section className={styles.nutripageSection}>
        <div className={styles.nutripageContainer}>
          <h2 className={styles.nutripageTitle}>Potato Health Benefits</h2>
          <p className={styles.nutripageContent}>
            Potatoes are not just delicious but also packed with essential nutrients that support overall health. Here are some of the health benefits:
          </p>
          <div className={styles.nutripageListCard}>
            <ul className={styles.nutripageList}>
              <li>Rich in Vitamin C, which boosts immunity.</li>
              <li>Contains Vitamin B6, promoting brain health.</li>
              <li>High potassium content helps regulate blood pressure.</li>
              <li>Good source of fiber that aids in digestion.</li>
              <li>Provides a balanced source of energy.</li>
              <li>Contributes to a healthy gut and heart.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2>&ldquo;Why Potatoes Are a Nutritional Powerhouse&rdquo;</h2>
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialFeedback}>&quot;{testimonial.feedback}&quot;</p>
              <h4 className={styles.testimonialPosition}>{testimonial.position}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2>Benefits of Potatoes</h2>
        <div className={styles.benefitsContainer}>
          {benefitsData.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3 className={styles.colorBenefits}>{benefit.title}</h3>
              <Image 
                src={benefit.image} 
                alt={benefit.title} 
                className={styles.benefitImage} 
                width={300} 
                height={200} 
              />
              <Link href={benefit.link} className={styles.benefitButton}>Click Me</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Nutritional Details Section */}
      <section className={styles.potatoNutritionDetailsSection}>
        <h2 className={styles.nutritionTitle}>Health Benefits of Potatoes: Nutritional Impact on Human Well-being</h2>
        <div className={styles.nutritionContent}>
          <Image 
            src="/assets/nutri1.png" 
            alt="Potato Nutrition" 
            className={styles.nutritionImage} 
            width={500} 
            height={300} 
          />
          <div className={styles.nutritionText}>
            <ul className={styles.nutritionBenefitsList}>
              <li><strong>Rich in Vitamins & Minerals:</strong> Potatoes are packed with vitamins C and B6, supporting immune function and metabolism.</li>
              <li><strong>High in Dietary Fiber:</strong> Promotes digestive health and helps in weight management.</li>
              <li><strong>Steady Energy Source:</strong> Complex carbohydrates provide a consistent energy source, ideal for active lifestyles.</li>
              <li><strong>Antioxidants:</strong> Potatoes help combat oxidative stress, supporting overall health and disease prevention.</li>
              <li><strong>Gluten-Free:</strong> Naturally gluten-free, suitable for people with gluten sensitivities or celiac disease.</li>
              <li><strong>Culinary Versatility:</strong> Can be boiled, baked, mashed, or fried, making potatoes a versatile ingredient in many dishes.</li>
            </ul>
          </div>
        </div>
      </section>
      <button onClick={scrollToTop} className={styles.scrollToTop}>
        Scroll to Top
      </button>
      <Footer />
    </div>
  );
};

export default NutritionalFacts;
