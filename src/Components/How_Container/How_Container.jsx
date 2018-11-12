import React from 'react';
import './How_Container.css';
import {Link} from 'react-router-dom';
import How from '../How/How';
import Steptwo from '../Steptwo/Steptwo';
import Stepthree from '../Stepthree/Stepthree';
import Stepfour from '../Stepfour/Stepfour';
import How_Title from '../How_Title/How_Title';

const How_container = props => (
    <header className="How_Container">
        <div className="content"></div>
        <div className="content">
        <div className="holder">
            <br></br>
            <br></br>
            <How_Title />
            <How />
            <Steptwo />
            <Stepthree />
            <Stepfour />
            </div>
        </div>

    </header>
);
export default How_container;