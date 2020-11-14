import Link from 'next/link';

import styles from '../styles/Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href='#'>
          <a className={styles.navLink}>Shop</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href='#'>
          <a className={styles.navLink}>About</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href='#'>
          <a className={styles.navLink}>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
