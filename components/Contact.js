import styles from '../styles/Contact.module.css';

const Contact = () => (
  <section className={styles.contact}>
    <div>
      <h3>Contact Us</h3>
      <p>Do you have any inquiries? Need help getting started?</p>
    </div>
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <input
          className={styles.formControl}
          type='text'
          id='fullname'
          aria-label='fullname'
          placeholder='Full Name'
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles.formControl}
          type='email'
          id='email'
          aria-label='email'
          placeholder='Email Address'
          required
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          className={styles.textarea}
          placeholder='Description'
          rows='8'
        ></textarea>
      </div>
    </form>
  </section>
);

export default Contact;
