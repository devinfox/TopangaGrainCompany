import React, { Component } from 'react';
import './Carousel.css';
import {Carousel} from 'react-bootstrap';


class Controlled_carousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
    
        <Carousel arrows={false} >
        <img className="mobile" src="https://i.imgur.com/yaWrn2A.jpg"></img>
        <img className="desktop" src="https://i.imgur.com/9X8o9Qi.jpg"></img>

        </Carousel>
       
      );
    }
  }
  
  export default Controlled_carousel;
  
