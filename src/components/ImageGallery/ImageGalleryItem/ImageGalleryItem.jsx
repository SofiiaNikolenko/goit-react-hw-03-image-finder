import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li key={id} className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={webformatURL} alt="" />
    </li>
  );
};
