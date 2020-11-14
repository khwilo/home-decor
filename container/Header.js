import Image from 'next/image';
import Link from 'next/link';

import Nav from '../components/Nav';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href='/'>
          <div className={styles.logoContainer}>
            <Image
              src='/assets/images/home-icon.svg'
              alt='home icon'
              width='18px'
              height='18px'
            />
            <p className={styles.logoTitle}>HD</p>
          </div>
        </Link>
      </div>
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
