import Link from 'next/link';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Logo />
      <Nav />
      <div>
        <Link href='/login'>
          <a className={styles.logIn}>Log in</a>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
