import React from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import How from '../../Components/How/How';
import Carousel from '../../Components/Carousel/Carousel';
import About_Us from '../../Components/About_Us/About_Us';
import How_Container from '../../Components/How_Container/How_Container';

const Homepage = props => (
    <div>
    <Carousel />
    <About_Us />
    <How_Container />
    </div>
);

export default Homepage;