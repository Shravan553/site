"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link'; // Change NavLink to Link

import Head from 'next/head';
import Image from 'next/image';  // Make sure to import Image from next/image

import styles from "../Navbar/NavbarTYP.module.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Navbar/Icons"

// Define type for the click state and dropdown states
const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [dropdownAgriBusiness, setDropdownAgriBusiness] = useState<boolean>(false);
  const [dropdownPotatoInsights, setDropdownPotatoInsights] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false); // Initialize without `window`

  useEffect(() => {
    setIsMobile(window.innerWidth <= 960);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setClick((prev) => !prev); // Toggle state efficiently
  };

  const handleClickAgriBusiness = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMobile) {
      setDropdownAgriBusiness(!dropdownAgriBusiness);
      setDropdownPotatoInsights(false);
    }
  };

  const handleClickPotatoInsights = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMobile) {
      setDropdownPotatoInsights(!dropdownPotatoInsights);
      setDropdownAgriBusiness(false);
    }
  };

  const handleMouseEnterAgriBusiness = () => {
    if (!isMobile) {
      setDropdownAgriBusiness(true);
    }
  };

  const handleMouseLeaveAgriBusiness = () => {
    if (!isMobile) {
      setDropdownAgriBusiness(false);
    }
  };

  const handleMouseEnterPotatoInsights = () => {
    if (!isMobile) {
      setDropdownPotatoInsights(true);
    }
  };

  const handleMouseLeavePotatoInsights = () => {
    if (!isMobile) {
      setDropdownPotatoInsights(false);
    }
  };

  return (
    <>
      <Head>
        <title>AGPotato - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="AGPotato is your one-stop solution for all things potatoes. Explore our services including agri-business, potato insights, and more!"
        />
        <meta
          name="keywords"
          content="potato, agri-business, potato insights, cold storage, export excellence, potato by-products"
        />
        <meta property="og:title" content="AGPotato - Home" />
        <meta
          property="og:description"
          content="Discover the world of potatoes with AGPotato. From farm to table, we provide expert insights and solutions."
        />
        <meta property="og:image" content="path_to_image.jpg" /> {/* Replace with an actual image URL */}
        <meta property="og:url" content="https://www.agpotato.com" />
      </Head>

      <nav className={styles.navbar1}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.navLogo1}>
            <Image 
              src="/assets/aa.png" 
              alt="Logo" 
              className={styles.logo1} 
              width={330} 
              height={100} 
            />
          </Link>
          <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLinks} onClick={handleClick} >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/components/About/" className={styles.navLinks} onClick={handleClick}>
                About
              </Link>
            </li>
            <li
              className={styles.navItem}
              onMouseEnter={handleMouseEnterAgriBusiness}
              onMouseLeave={handleMouseLeaveAgriBusiness}
              onClick={handleClickAgriBusiness}
            >
              <span className={styles.navLinks}>
                AgriBusiness {isMobile && "▼"}
              </span>
              {dropdownAgriBusiness && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link
                      href="/components/AgriBussiness/Supplychain/"
                      className={styles.dropdownItem}
                      onClick={() => setClick(false)} // Close menu after navigation
                    >
                      Supply Chain
                    </Link>
                  </li>
                  <li>
      <Link
        href="/components/AgriBussiness/Potatobyproduct/"
        className={styles.dropdownItem}
        onClick={() => setClick(false)}
      >
        Potato By Product
      </Link>
    </li>
    <li>
      <Link
        href="/components/AgriBussiness/Exportexcellence/"
        className={styles.dropdownItem}
        onClick={() => setClick(false)}
      >
        Export Excellence
      </Link>
    </li>
    <li>
      <Link
        href="/components/AgriBussiness/Coldstorage/"
        className={styles.dropdownItem}
        onClick={() => setClick(false)}
      >
        Cold Storage
      </Link>
    </li>
    <li>
      <Link
        href="/components/AgriBussiness/Frozenproducts/"
        className={styles.dropdownItem}
        onClick={() => setClick(false)}
      >
        Frozen Products
      </Link>
    </li>
    <li>
      <Link
        href="/components/AgriBussiness/Meetthefarmer/"
        className={styles.dropdownItem}
        onClick={() => setClick(false)}
      >
        Meet the Farmer
      </Link>
    </li>
                  {/* Other dropdown items */}
                </ul>
              )}
            </li>
            <li className={styles.navItem}>
              <Link href="/components/BuyandSell/" className={styles.navLinks} onClick={handleClick}>
                Sell & Buy
              </Link>
            </li>
            <li
              className={styles.navItem}
              onMouseEnter={handleMouseEnterPotatoInsights}
              onMouseLeave={handleMouseLeavePotatoInsights}
              onClick={handleClickPotatoInsights}
            >
              <span className={styles.navLinks}>
                Potato Insights {isMobile && "▼"}
              </span>
              {dropdownPotatoInsights && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link href="/components/Insight/TypesOfPot/" className={styles.dropdownItem}>
                      Types of Potatoes
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/Insight/Nutrition" className={styles.dropdownItem}>
                      Nutritional Facts
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/Insight/History" className={styles.dropdownItem}>
                      Potato History
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/Insight/Recipes" className={styles.dropdownItem}>
                      Potato Recipes
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/Insight/Faq" className={styles.dropdownItem}>
                      FAQs
                    </Link>
                  </li>
                  {/* Other dropdown items */}
                </ul>
              )}
            </li>
            <li className={styles.navItem}>
              <Link href="/components/Gallery" className={styles.navLinks} onClick={handleClick}>
                Gallery
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/components/Contact/" className={styles.navLinks} onClick={handleClick}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            {click ? <HamburgetMenuOpen /> : <HamburgetMenuClose />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
