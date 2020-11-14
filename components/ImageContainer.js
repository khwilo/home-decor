import styles from '../styles/ImageContainer.module.css';

const ImageContainer = ({ source, alt }) => (
  <div className={styles.imgContainer}>
    <img className={styles.img} src={source} alt={alt} />
  </div>
);

export default ImageContainer;
