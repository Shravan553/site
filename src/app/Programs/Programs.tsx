"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Programs.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// Define program data types
interface ProgramData {
  src: string;
  title: string;
  link: string;
  alt: string; // New field for alt text
}

const programs: ProgramData[] = [
  {
    src: "/assets/supply.jpg",
    title: "Supply Chain",
    link: "/components/AgriBussiness/Supplychain/",
    alt: "Image showcasing an efficient agricultural supply chain."
  },
  {
    src: "/assets/bypro.jpg",
    title: "Potato By Product",
    link: "/components/AgriBussiness/Potatobyproduct/",
    alt: "Image of potato by-products being processed."
  },
  {
    src: "/assets/expo.jpg",
    title: "Export Excellence",
    link: "/components/AgriBussiness/Exportexcellence/",
    alt: "Image of high-quality potatoes prepared for export."
  },
  {
    src: "/assets/cold.png",
    title: "Cold Storage",
    link: "/components/AgriBussiness/Coldstorage/",
    alt: "Image depicting advanced cold storage facilities for potatoes."
  },
  {
    src: "/assets/flo.jpg",
    title: "Frozen Products",
    link: "/components/AgriBussiness/Frozenproducts/",
    alt: "Image of frozen potato products ready for distribution."
  },
  {
    src: "/assets/far.jpg",
    title: "Meet the Farmer",
    link: "/components/AgriBussiness/Meetthefarmer/",
    alt: "Image of a farmer in a potato field."
  },
];

const Programs: React.FC = () => {
  // Correctly type and initialize programRefs
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    // Create a local copy of programRefs.current to avoid the warning
    const refsCopy = programRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animated);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    // Observe each ref from the copied array
    refsCopy.forEach((program) => {
      if (program) observer.observe(program);
    });
    return () => {
      // Cleanup observers using the copied array
      refsCopy.forEach((program) => {
        if (program) observer.unobserve(program);
      });
    };
  }, []); // Empty dependency array to only run on mount/unmount
  return (
    <div className={styles.programs}>
      <Head>
        <title>Our Programs - AGPotato</title>
        <meta
          name="description"
          content="Explore AGPotato's various programs including Supply Chain, Potato By Product, Export Excellence, Cold Storage, Frozen Products, and Meet the Farmer."
        />
        <meta
          name="keywords"
          content="AGPotato, supply chain, potato by product, export excellence, cold storage, frozen products, meet the farmer, agricultural programs"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      {programs.map((program, index) => (
        <div
          key={index}
          className={styles.program}
          ref={(el) => {
            programRefs.current[index] = el as HTMLDivElement | null; // Explicit type assertion
          }}
        >
          <Link href={program.link} passHref>
            
            <Image
  src={program.src}
  alt={program.alt} // Use the custom alt text
  width={400} // Adjust as needed
  height={300} // Adjust as needed
  className={styles.programImage}
/>
          </Link>
          <div className={styles.caption}>
            <h2 className={styles.programTitle}>{program.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Programs;