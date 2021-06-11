import React, { Component } from 'react';
// import style
import './style.css';
// add image
import natureImg from './nature.jpg';
class AppHeader extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy Milk' },
      { id: 2, isDone: true, title: 'Buy Tv' },
      { id: 3, isDone: false, title: 'Go to park' },
      { id: 4, isDone: false, title: 'Learn to React' },
    ],
  };

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
