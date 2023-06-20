import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  notify = () => {
    toast.warn('Enter text to search, please!');
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      this.notify();
      return;
    }

    this.props.onSubmit(this.state.value);

    event.target.value.value = '';
    this.reset();
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={css.Searchbar} onSubmit={this.handleSubmit}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            name="value"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
        <ToastContainer position="top-right" closeOnClick />
      </header>
    );
  }
}

export default Searchbar;
