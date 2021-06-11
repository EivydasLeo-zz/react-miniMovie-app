import React, { Component } from 'react';
// import style
import './style.css';
// add image
import natureImg from './nature.jpg';
class AppHeader extends Component {
  state = {};

  getDate() {
    const now = new Date().toLocaleString();
    return now;
  }

  render() {
    return (
      <header>
        <img className="nature" src={natureImg} alt="Very nice view of nature with house" />
        <p className="hero-date">{this.getDate()}</p>
      </header>
    );
  }
}

export default AppHeader;
