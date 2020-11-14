import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Logo.module.css';

const Logo = () => (
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
);

export default Logo;
