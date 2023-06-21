import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL =
  'https://pixabay.com/api/?&image_type=photo&orientation=horizontal&per_page=12';
const KEY = '&key=35832176-d501674701625dd971676e287';

class App extends Component {
  state = {
    value: '',
    imgs: [],
    page: 1,
    disabledButton: false,
    error: '',
    loader: false,
    noResults: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.value !== prevState.value ||
      this.state.page !== prevState.page
    ) {
      this.getImg(this.state.value, this.state.page);
    }
  }

  getImg = (value, page) => {
    fetch(URL + KEY + `&q=${value}&page=${page}`)
      .then(response => {
        return response.json();
      })
      .then(({ hits }) => {
        if (hits.length === 0) {
          this.setState({ disabledButton: false, noResults: true });
          this.notify();
          return;
        }
        this.setState(prevState => ({
          imgs: [...prevState.imgs, ...hits],
          disabledButton: true,
        }));
      })
      .catch(error => {
        this.setState({ error, disabledButton: false });
      })
      .finally(() => {
        this.setState({ loader: false });
      });
  };

  formValue = value => {
    this.setState({
      value,
      imgs: [],
      page: 1,
      disabledButton: false,
      loader: true,
      noResults: false,
    });
  };

  handleMoreImgs = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  notify = () => {
    toast.error('No results found! Please try again!');
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formValue} />
        <ImageGallery imgs={this.state.imgs} />
        {this.state.loader && <Loader />}
        {this.state.disabledButton && <Button onClick={this.handleMoreImgs} />}
        {this.state.noResults && <ToastContainer autoClose={3000} />}
      </>
    );
  }
}

export default App;
