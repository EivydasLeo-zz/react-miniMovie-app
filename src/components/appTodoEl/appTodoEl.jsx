import React, { Component } from 'react';
import './style.css';

class AppTodoEl extends Component {
  state = {};

  render() {
    const { title, isDone } = this.props.singleTodo;

    return (
      <li className="app-todo-el">
        <i className={this.setCheckClasses(isDone)}></i>
        <span className={isDone ? 'doneTitle' : ''}>{title}</span>
        <i className="fa fa-pencil"></i>
        <i className="fa fa-trash"></i>
      </li>
    );
  }

  setCheckClasses(isDone) {
    let checkClasses = 'fa fa-check-thin';
    if (isDone) checkClasses = 'fa fa-check-circle';
    return checkClasses;
  }
}

export default AppTodoEl;
