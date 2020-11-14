import ImageContainer from './ImageContainer';

import styles from '../styles/Product.module.css';

const images = [
  {
    source: '/assets/images/indoor-plants.jpg',
    alt: 'indoor plants',
  },
  {
    source: '/assets/images/furniture.jpg',
    alt: 'furniture',
  },
  {
    source: '/assets/images/living-room-2.jpg',
    alt: 'living room',
  },
  {
    source: '/assets/images/glass-doors.jpg',
    alt: 'glass doors',
  },
  {
    source: '/assets/images/table-top.jpg',
    alt: 'table top',
  },
  {
    source: '/assets/images/bed-room.jpg',
    alt: 'bed room',
  },
  {
    source: '/assets/images/potted-plant.jpg',
    alt: 'potted plant',
  },
  {
    source: '/assets/images/shelf.jpg',
    alt: 'shelf',
  },
];

const grid = images.map((image, index) => (
  <ImageContainer key={index} source={image.source} alt={image.alt} />
));

const Products = () => (
  <section className={styles.products}>
    <div className={styles.productsContainer}>
      <h3 className={styles.productsTitle}>Products</h3>
      <div className={styles.grid}>{grid}</div>
    </div>
  </section>
);

export default Products;
