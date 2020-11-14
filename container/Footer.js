import Contact from '../components/Contact';

import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <Contact />
    </div>
  </footer>
);

export default Footer;
