import React from 'react';
import {Link} from 'react-router-dom';
import './About_us.css';
import AboutUsBanner from '../../Components/AboutUsBanner/AboutUsBanner';
import AboutUsArticle from '../../Components/AboutUsArticle/AboutUsArticle';


const About_us = props => (
    <div>
        <AboutUsBanner />
        <AboutUsArticle />
    </div>
);

export default About_us;