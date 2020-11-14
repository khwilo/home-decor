import Link from 'next/link';

import styles from '../styles/BottomNav.module.css';

const BottomNav = ({ title, links }) => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <p className={styles.navTitle}>{title}</p>
      {links.map((link, index) => (
        <Link key={index} href='#'>
          <a className={styles.navLink}>{link.value}</a>
        </Link>
      ))}
    </ul>
  </nav>
);

export default BottomNav;
