import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';

class App extends Component {
  state = {
    value: '',
  };

  formValue = value => {
    this.setState({ value });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.formValue} />
        <ImageGallery value={this.state.value} />
      </>
    );
  }
}

export default App;
