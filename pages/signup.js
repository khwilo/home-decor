import Link from 'next/link';

import Footer from '../container/Footer';
import Header from '../container/Header';
import styles from '../styles/Signup.module.css';

const SignUp = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label for='firstName'>First name</label>
          <input
            className={styles.formControl}
            type='text'
            id='firstName'
            placeholder='First Name'
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label for='lastName'>Last name</label>
          <input
            className={styles.formControl}
            type='text'
            id='lastName'
            placeholder='Last Name'
            required
          />
        </div>
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
          <input className={styles.submitBtn} type='submit' value='Sign Up' />
          <div className={styles.register}>
            <Link href='/login'>
              <a className={styles.registerLink}>Login?</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

export default SignUp;
