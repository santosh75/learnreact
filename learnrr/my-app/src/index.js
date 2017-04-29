import React from 'react';
import {render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import Signup from './Signup';
import Login from './Login';
import Machinecard from './Machinecard';


render(<Route path="app" component={App}></Route>,document.getElementById('root'));

