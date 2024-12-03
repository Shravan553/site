'use client';  // Mark the component to run on the client-side only

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Nav from '../../../Navbar/NavbarTYP';
import Footer from '../../../Footer/Footer';
import { motion } from 'framer-motion';
import styles from './Buy.module.css';

type Errors = {
  personName?: string;
  email?: string;
  phone?: string;
  address?: string;
  quantity?: string;
};

const Buy: React.FC = () => {
  const [isClient, setIsClient] = useState(false);  // Ensures client-side execution
  const [potatoName, setPotatoName] = useState<string | undefined>(undefined);

  // Ensure it's mounted only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (isClient) {
      const potatoQuery = searchParams.get('potatoName');
      if (potatoQuery) {
        setPotatoName(potatoQuery);
      }
    }
  }, [searchParams, isClient]);

  // Form state variables
  const [personName, setPersonName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [errors, setErrors] = useState<Errors>({});  // Type the errors state correctly

  const validate = () => {
    const newErrors: Errors = {};  // Type this as Errors
    if (!personName.trim()) newErrors.personName = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!address.trim()) newErrors.address = 'Address is required';
    if (!quantity.trim()) newErrors.quantity = 'Quantity is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(`You have requested to Buy: ${potatoName}`);
    }
  };

  if (!isClient) return null;  // Do not render until client-side mounted

  return (
    <div>
      <Nav />
      <div className={styles.buyContainer}>
        <Head>
          <title>Buy Potatoes Online | AGPotato</title>
        </Head>

        {potatoName ? (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.buyTitle}>Buy: {potatoName}</h2>
            <p className={styles.buyDescription}>
              Please fill out the form to Buy your potatoes.
            </p>
            <motion.form
              className={styles.buyForm}
              onSubmit={handleSubmit}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="personName">Full Name:</label>
                <input
                  type="text"
                  id="personName"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  required
                />
                {errors.personName && <span className={styles.error}>{errors.personName}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">Pickup Address:</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                {errors.address && <span className={styles.error}>{errors.address}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="quantity">Quantity (kg):</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
                {errors.quantity && <span className={styles.error}>{errors.quantity}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className={styles.buyButton}>Submit</button>
            </motion.form>
          </motion.div>
        ) : (
          <motion.p
            className={styles.errorMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Potato type not selected!
          </motion.p>
        )}
      </div>
      <Footer />
    </div>
  );
};

// Use Suspense boundary at the root level for components using useSearchParams() or other client-only hooks
export default function BuyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Buy />
    </Suspense>
  );
}
