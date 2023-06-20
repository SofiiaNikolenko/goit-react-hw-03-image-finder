import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

const URL =
  'https://pixabay.com/api/?&page=1&image_type=photo&orientation=horizontal&per_page=12';
const KEY = '&key=35832176-d501674701625dd971676e287';

class ImageGallery extends Component {
  state = {
    value: '',
    // page: 1,
    imgs: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      this.getImg(this.props.value);
    }
  }

  getImg = value => {
    fetch(URL + KEY + `&q=${value}`)
      .then(response => {
        return response.json();
      })
      .then(({ hits }) => {
        if (hits.length === 0) {
          return;
        }
        this.setState(
          prevState => ({
            imgs: [...prevState.imgs, ...hits],
          }),
          () => {
            console.log(this.state.imgs);
          }
        );
      });
  };

  render() {
    console.log('this.props.imgs', this.props.imgs);
    return (
      <ul className={css.ImageGallery}>
        {this.state.imgs.map(item => (
          <ImageGalleryItem
            key={item.id}
            image={item.webformatURL}
            // alt={item.tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
