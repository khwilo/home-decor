import Image from 'next/image';

import styles from '../styles/Card.module.css';

const Card = ({ title, description }) => (
  <section className={styles.card}>
    <Image
      className={styles.cardImg}
      src='/assets/images/arrow_right.svg'
      alt='arrow right icon'
      width='50px'
      height='50px'
    />
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </section>
);

export default Card;
