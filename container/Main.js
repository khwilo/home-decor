import Banner from '../components/Banner';
import Services from '../components/Services';
import styles from '../styles/Main.module.css';

const Main = () => (
  <main className={styles.main}>
    <Banner />
    <Services />
  </main>
);

export default Main;
