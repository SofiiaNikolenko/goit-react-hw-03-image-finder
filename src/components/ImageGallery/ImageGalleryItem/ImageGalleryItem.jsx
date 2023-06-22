import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  onShowModal = () => {
    this.setState({ modal: true });
  };

  onCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.onShowModal}>
          <img
            className={css.ImageGalleryItemImage}
            src={this.props.webformatURL}
            alt={this.props.alt}
          />
        </li>

        {this.state.modal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            alt={this.props.alt}
            onClose={this.onCloseModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
