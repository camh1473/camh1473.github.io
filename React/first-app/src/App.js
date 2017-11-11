import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import  './assets/style.css';

// componenets
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Services from './components/pages/services';
import Contact from './components/footComponent/contactUs';
import Footer from './components/footComponent/footer';




class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />

      <Route exact path="/" component={Homepage} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Footer" component={Footer} />
      </div>
      </Router>
    );
  }
}

export default App;
