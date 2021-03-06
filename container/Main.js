import Banner from '../components/Banner';
import Products from '../components/Products';
import Services from '../components/Services';

import styles from '../styles/Main.module.css';

const Main = () => (
  <main className={styles.main}>
    <Banner />
    <Services />
    <Products />
  </main>
);

export default Main;
