import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className={css.ImageGallery}>
          {this.props.imgs.map(item => (
            <ImageGalleryItem
              key={item.id}
              webformatURL={item.webformatURL}
              alt={item.tags}
              largeImageURL={item.largeImageURL}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      webformatURL: PropTypes.string,
      alt: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};
