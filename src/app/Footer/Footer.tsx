"use client";

import { useRef, useState, ChangeEvent, FormEvent } from "react";
import styles from "./Footer.module.css";
import emailjs from "emailjs-com";
import Link from "next/link";
import Head from "next/head";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";



const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validate each field
  const validateForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setError((prev) => ({
          ...prev,
          name: /^[A-Za-z\s]+$/.test(value) ? "" : "Only alphabetic characters are allowed.",
        }));
        break;
      case "email":
        setError((prev) => ({
          ...prev,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address.",
        }));
        break;
      case "phone":
        setError((prev) => ({
          ...prev,
          phone: /^\d{10}$/.test(value) ? "" : "Please enter a valid 10-digit phone number.",
        }));
        break;
      case "message":
        setError((prev) => ({
          ...prev,
          message: value.trim() === "" ? "Message cannot be empty." : "",
        }));
        break;
      default:
        break;
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure there are no errors before sending the email
    if (!error.name && !error.email && !error.phone && !error.message) {
      emailjs
        .sendForm(
          "service_cfixr9o", // Replace with your EmailJS service ID
          "template_r6qs79j", // Replace with your EmailJS template ID
          formRef.current!,
          "L8En_cO-RON3rVcq7" // Replace with your EmailJS user ID
        )
        .then(
          () => {
            setResult("Message sent successfully!");
          },
          () => {
            setResult("Message sending failed. Please try again.");
          }
        );

      e.currentTarget.reset();
    } else {
      setResult("Please fix the errors in the form.");
    }
  };

  return (
    <>
      <Head>
        <title>AGPotato | Potatoes and Sustainable Farming</title>
        <meta
          name="description"
          content="Contact AGPotato for the best potato products. We specialize in sustainable farming and delivering fresh potatoes. Reach out to us today!"
        />
        <meta
          name="keywords"
          content="potatoes, sustainable farming, fresh potatoes, AGPotato, contact us, potato products, potato farming"
        />
        <meta
          property="og:title"
          content="Contact Us - AGPotato | Potatoes and Sustainable Farming"
        />
        <meta
          property="og:description"
          content="Contact AGPotato for the best potato products. We specialize in sustainable farming and delivering fresh potatoes. Reach out to us today!"
        />
        <meta property="og:image" content="/assets/your-image-url.jpg" />
        <meta property="og:url" content="https://www.agpotato.com/contact" />
      </Head>
      <footer className={styles.footer1}>
        {/* Contact Form */}
        <div className={styles.footerContactForm}>
          <h2>Contact Us</h2>
          <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm}>
            <input
              type="text"
              name="name"
              placeholder={error.name || "Your Name"}
              required
              onChange={validateForm}
              style={{ borderColor: error.name ? "red" : "" }}
            />
            {error.name && <p className={styles.formError}>{error.name}</p>}

            <input
              type="email"
              name="email"
              placeholder={error.email || "Your Email"}
              required
              onChange={validateForm}
              style={{ borderColor: error.email ? "red" : "" }}
            />
            {error.email && <p className={styles.formError}>{error.email}</p>}

            <input
              type="tel"
              name="phone"
              placeholder={error.phone || "Phone Number"}
              required
              onChange={validateForm}
              style={{ borderColor: error.phone ? "red" : "" }}
            />
            {error.phone && <p className={styles.formError}>{error.phone}</p>}

            <textarea
              name="message"
              placeholder={error.message || "Your Message"}
              required
              onChange={validateForm}
              style={{ borderColor: error.message ? "red" : "" }}
            ></textarea>
            {error.message && <p className={styles.formError}>{error.message}</p>}

            <button type="submit">Send Message</button>
            <p className={styles.formResult}>{result}</p>
          </form>
        </div>

        {/* Footer Details */}
        <div className={styles.footerDetails}>
          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <p>
              We are a market leader in the potato industry, offering sustainable and innovative products.
              Our goal is to bridge the gap between producers and consumers.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="/components/BuyandSell/">Buy & Sell</Link>
              </li>
              <li>
                <Link href="/components/AgriBussiness/Frozenproducts/">Our Frozen Products</Link>
              </li>
              <li>
                <Link href="/components/Gallery/">Our Gallery</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/components/About/">About Us</Link>
              </li>
              <li>
                <Link href="/components/Insight/Faq/">FAQ</Link>
              </li>
              <li>
                <Link href="/components/Contact/">Contact Us</Link>
              </li>
              <li>
                <Link href="/components/Gallery/">Gallery</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Contact Info</h3>
            <p>Email: info@agpotato.com</p>
            <p>Phone: +1 800 123 4567</p>
            <p>
              Address: World Trade Centre, Unit No 2217, 22nd Floor, Malleshwaram (W), Next Orion Mall, Bangalore, Karnataka
              560055, IN
            </p>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 AGPotato. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
