import BottomNav from '../components/BottomNav';
import Contact from '../components/Contact';
import Logo from '../components/Logo';

import styles from '../styles/Footer.module.css';

const homeLinks = [
  {
    value: 'Features',
  },
  {
    value: 'Products',
  },
  {
    value: 'Services',
  },
];

const socialLinks = [
  {
    value: 'Instagram',
  },
  {
    value: 'Pinterest',
  },
  {
    value: 'Twitter',
  },
  {
    value: 'Facebook',
  },
];

const contactLinks = [
  {
    value: 'home.decor@gmail.com',
  },
  {
    value: '+254-700-000000',
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <Contact />
      <div className={styles.bottomNavContainer}>
        <Logo />

        <div className={styles.bottomNavLinks}>
          <BottomNav title='Home' links={homeLinks} />
          <BottomNav title='Connect with us' links={socialLinks} />
          <BottomNav title='Contact us' links={contactLinks} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
