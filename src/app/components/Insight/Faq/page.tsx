'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './FAQ.module.css';
// import Scroll from '../Pages/scroll';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Navbar/NavbarTYP';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const faqSections = document.querySelectorAll(`.${styles.faqSection}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    faqSections.forEach((section) => observer.observe(section));

    return () => {
      faqSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const renderFAQItem = (index: number, question: string, answer: string) => (
    <div className={styles.faqItem} key={index}>
      <div
        className={styles.faqQuestion}
        onClick={() => toggleQuestion(index)}
      >
        <h3>{question}</h3>
      </div>
      {activeQuestion === index && (
        <div className={styles.faqAnswer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.faqContainer}>
        <Navbar/>
      <Head>
        <title>FAQ About Potatoes | Potato Insights</title>
        <meta
          name="description"
          content="Find answers to common questions about potatoes, their origin, benefits, nutrition, and more."
        />
        <meta name="keywords" content="FAQ, Potatoes, Potato nutrition, Potato food, Potato peel, Potato myths" />
        <meta property="og:title" content="FAQ About Potatoes | Potato Insights" />
        <meta
          property="og:description"
          content="Find answers to common questions about potatoes, their origin, benefits, nutrition, and more."
        />
        <meta
          property="og:image"
          content="/assets/FAQimage1.jpg"
        />
        <meta property="og:url" content="http://www.yourwebsite.com/faq" />
        <meta name="twitter:title" content="FAQ About Potatoes | Potato Insights" />
        <meta
          name="twitter:description"
          content="Find answers to common questions about potatoes, their origin, benefits, nutrition, and more."
        />
        <meta
          name="twitter:image"
          content="/assets/FAQimage1.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div>
          <h1 className={styles.headTextAlter}>FAQ About Potatoes</h1>
          <p className={styles.underTextAlter}>
            Find answers to the most common questions about potatoes.
          </p>
          
         
        </div>
      </section>

      {/* FAQ Content */}
      <section className={styles.faqContent}>
        <h2>Frequently Asked Questions</h2>

        {/* FAQ: About Potatoes */}
        <div className={styles.faqSection}>
          <h2>FAQ About Potatoes</h2>
          {renderFAQItem(
            1,
            'What are potatoes?',
            'Potatoes are starchy tubers that are a staple food in many cultures around the world. They belong to the nightshade family (Solanaceae) and are scientifically classified as Solanum tuberosum.'
          )}
          {renderFAQItem(
            2,
            'Where do potatoes originate from?',
            'Potatoes originated in the Andean region of South America, particularly in modern-day Peru and northwest Bolivia.'
          )}
            {renderFAQItem(
            3, 
            'How is crop management conducted?',
             'Irrigation systems, like drip or pivot irrigation, are employed to maintain consistent soil moisture. Fertilization is based on soil tests to ensure optimal growth,and Integrated Pest Management (IPM) strategies are used for pest and disease control.'
             )}
              {renderFAQItem(
            4,
             'Where are potatoes grown?', 
            'Potatoes are grown in various climates worldwide, with major producers including China, India, Russia, and the United States.'
            )}
               {renderFAQItem(
                5,
                'How are potatoes cultivated?', 
                'Potatoes are typically grown from seed potatoes, which are small tubers or pieces of larger tubers.They are planted in well-drained soil and require adequate moisture, sunlight, and nutrients.'
               )}

<h2>FAQ About Potato Peel</h2>
{renderFAQItem(
    6, 
    'Are potato skins safe to eat?',
     'Yes, potato skins are safe and nutritious. They contain fiber, potassium, and vitamin C, making them a valuable part of the potato.However, avoid eating skins with green spots, as this may indicate the presence of solanine,a harmful compound.'
     )}
          {renderFAQItem(
            7,
             'Why do some people peel potatoes before cooking?',
              'Some recipes call for peeled potatoes for a smoother texture (like in mashed potatoes), while others leave the skin on for added flavor and nutrients, such as in roasted or baked potato dishes.'
              )}
          {renderFAQItem(
            8,
             'Can potato peels be eaten?',
              'Absolutely! Potato peels are safe to eat and can be enjoyed when cooked properly. They can be added to dishes like soups,stews, and casseroles for added nutrition.'
              )}
          {renderFAQItem(
            9,
             'How should potato peels be prepared?', 
             'If you choose to eat potato peels, ensure they are washed thoroughly to remove any dirt or pesticides.They can be baked, roasted, or added to various dishes.'
             )}

<h2>FAQ About Potato Food</h2>
          {renderFAQItem(
            10,
             'What are the best potato varieties for fries?',
              'Russet potatoes are the best choice for fries due to their high starch content, which gives them a crispy exterior and fluffy interior when fried.'
              )}
          {renderFAQItem
          (11,
           'Can potatoes thicken soups?', 
           'Yes, potatoes can be used to naturally thicken soups and stews. As they cook and break down, they release starch that adds body and thickness to the dish.'
           )}
          {renderFAQItem(
            12,
             'What are different ways to cook potatoes?',
              'Potatoes are highly versatile and can be prepared in many ways, including baking, boiling, roasting, frying, mashing, steaming, and grilling. They are used in dishes like mashed potatoes, French fries, potato salads, and stews.'
              )}
          {renderFAQItem
          (13,
           'What is the healthiest way to cook potatoes?',
            'The healthiest ways to cook potatoes include baking,steaming, or boiling them without added fats or excessive salt.Leaving the skin on adds extra fiber and nutrients.'
            )}
          {renderFAQItem(
            14,
             'How to flavor potatoes healthily?',
              'To enhance flavor without unhealthy fats, try using herbs and spices like rosemary, garlic, thyme, and pepper. You can also drizzle with olive oil or roast them with onions and peppers for added taste.'
              )}
        <h2>FAQ About Potato Nutrition</h2>
          {renderFAQItem(
            15,
             'Are potatoes a good source of vitamins?', 
             'Yes, potatoes are a good source of vitamins. They are particularly rich in vitamin C, which supports immune function and skin health, and vitamin B6, which is important for brain development and proper nervous system function. In addition, potatoes provide smaller amounts of other B vitamins, like folate, which plays a role in cell growth and metabolism. To maximize the vitamin content, it’s best to eat potatoes with the skin on, as the peel contains many of the nutrients.'

          )}
          {renderFAQItem(
            16,
             'How many calories are in a medium potato?', 
             'A medium-sized potato (approximately 150 grams)contains about 110-130 calories. This can vary slightly depending on the type of potato and how it is prepared. These calories come mainly from carbohydrates, with a small amount of protein and almost no fat.'

          )}
          {renderFAQItem(
            17,
             'Do potatoes contain protein?', 
             'Potatoes provide a small amount of protein, roughly 2-3 grams per medium potato. While not a high-protein food,they can contribute to overall protein intake when combined with other sources.'

          )}
          {renderFAQItem(
            18,
             'Are potatoes a good source of fiber?',
              'Yes, especially when eaten with the skin on.A medium potato with skin contains about 2-4 grams of dietary fiber, which is beneficial for digestion and gut health.'

          )}
           <h2>FAQ About Potato Nutrition</h2>
          {renderFAQItem(
            15, 
            'Are potatoes a good source of vitamins?', 'Yes, potatoes are a good source of vitamins. They are particularly rich in vitamin C, which supports immune function and skin health, and vitamin B6, which is important for brain development and proper nervous system function. In addition, potatoes provide smaller amounts of other B vitamins, like folate, which plays a role in cell growth and metabolism. To maximize the vitamin content, it’s best to eat potatoes with the skin on, as the peel contains many of the nutrients.'

          )}
          {renderFAQItem(
            16,
             'How many calories are in a medium potato?', 'A medium-sized potato (approximately 150 grams)contains about 110-130 calories. This can vary slightly depending on the type of potato and how it is prepared. These calories come mainly from carbohydrates, with a small amount of protein and almost no fat.'

          )}
          {renderFAQItem(
            17,
             'Do potatoes contain protein?', 'Potatoes provide a small amount of protein, roughly 2-3 grams per medium potato. While not a high-protein food,they can contribute to overall protein intake when combined with other sources.'

          )}
          {renderFAQItem(
            18, 
            'Are potatoes a good source of fiber?', 'Yes, especially when eaten with the skin on.A medium potato with skin contains about 2-4 grams of dietary fiber, which is beneficial for digestion and gut health.'

          )}
          {/* Add more FAQ items as needed */}
        </div>

   
      </section>

      {/* <Scroll /> */}
      <Footer />
    </div>
    
  );
};

export default FAQ;