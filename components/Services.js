import Card from './Card';

import styles from '../styles/Services.module.css';

const Services = () => (
  <section className={styles.services}>
    <div className={styles.servicesContainer}>
      <h2 className={styles.servicesTitle}>Services</h2>
      <div className={styles.servicesContent}>
        <div className={styles.servicesImg}>
          <img
            className={styles.img}
            src='/assets/images/living-room.jpg'
            alt='living room'
          />
        </div>
        <div className={styles.card}>
          <Card
            title='Lorem ipsum dolor sit amet'
            description='minim veniam, quis nostrud exercitation'
          />
        </div>
      </div>

      <div className={styles.servicesContent}>
        <div className={styles.card}>
          <Card
            title='Lorem ipsum dolor sit amet'
            description='minim veniam, quis nostrud exercitation'
          />
        </div>
        <div className={styles.servicesImg}>
          <img
            className={styles.img}
            src='/assets/images/kitchen-dining.jpg'
            alt='kitchen and dining room'
          />
        </div>
      </div>
    </div>
  </section>
);

export default Services;
