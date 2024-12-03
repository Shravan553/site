import React from 'react';
import styles from '../Title/Title.module.css';

// Define the types for the props
interface TitleProps {
  subTitle: string;
  title: string;
}

const Title: React.FC<TitleProps> = ({ subTitle, title }) => {
  return (
    <div className={styles.title}>
      <p>{subTitle}</p> {/* Changed <p1> to <p> */}
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
