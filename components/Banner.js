import styles from '../styles/Banner.module.css';

const Banner = () => (
  <div className={styles.banner}>
    <div className={styles.bannerContainer}>
      <img
        className={styles.bannerImg}
        src='/assets/images/sofa.jpg'
        alt='sofa set'
      />
      <section className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>Make your home look good!</h1>
        <button className={styles.bannerBtn}>Shop Now</button>
      </section>
    </div>
  </div>
);

export default Banner;
