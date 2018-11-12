import React, { Component } from 'react';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Controlled_carousel from './Components/Carousel/Carousel'
import './App.css'
import About_Us from './Components/About_Us/About_Us';
import How from './Components/How/How';
import How_container from './Components/How_Container/How_Container';
import Steptwo from './Components/Steptwo/Steptwo';
import Homepage from './Pages/Homepage/Homepage';
import About_us from './Pages/About_us/About_us';
import Stepthree from './Components/Stepthree/Stepthree';
import How_Title from './Components/How_Title/How_Title'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
// import Homepage from './Pages/Homepage/Homepage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route path="/" exact render={() =>
        <Homepage />
        
      } />
  
      <Route path="/about" exact render={
        ()=> 
        <About_us />
      }></Route>

      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
