import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import TodoPage from './components/todoPage/todoPage';
import Navbar from './components/navbar/navbar';
import AboutPage from './components/pages/about';
import ContactsPage from './components/pages/contact';
import HomePage from './components/pages/home';
import SingleTodo from './components/pages/singleTodo';
// app styles
import './app.css';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {/* sutikes pirma atitikusi route jis nebeiesko toliau */}
          <Switch>
            <Route path="/todos/:id" component={SingleTodo}></Route>
            <Route path="/todos" component={TodoPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contact" component={ContactsPage}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
          {/* <Route path="/" exact component={HomePage}></Route> */}
        </div>
        {/* <TodoPage /> */}
        {/* <AboutPage /> */}
        {/* <ContactsPage /> */}
      </div>
    );
  }
}

export default App;
