import React, { Component } from 'react';
// import style
import './style.css';
// add image
import natureImg from './nature.jpg';
class AppHeader extends Component {
  state = {};
  render() {
    return (
      <header>
        <img className="nature" src={natureImg} alt="Very nice view of nature with house" />
      </header>
    );
  }
}

export default AppHeader;
