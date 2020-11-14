import Link from 'next/link';

import Footer from '../container/Footer';
import Header from '../container/Header';
import styles from '../styles/Login.module.css';

const Login = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label for='email'>Email</label>
          <input
            className={styles.formControl}
            type='email'
            id='email'
            placeholder='Email address'
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label for='password'>Password</label>
          <input
            className={styles.formControl}
            type='password'
            id='password'
            placeholder='Password'
            required
          />
        </div>
        <div className={styles.formFooter}>
          <input className={styles.submitBtn} type='submit' value='Log In' />
          <div className={styles.register}>
            <Link href='/signup'>
              <a className={styles.registerLink}>Create account?</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

export default Login;
