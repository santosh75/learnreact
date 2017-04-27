import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './learningComponents/Layout';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import './index.css';
import Machinecard from './Machinecard';
import Archieves from './Comps/Archieves';
import Featured from './Comps/Featured';
import Settings from './Comps/Settings';
 
ReactDOM.render(
  <Router history={hashHistory}> <Route path="/" component={Layout}>
    <IndexRoute component={Machinecard}></IndexRoute>   
  <Route path="archieves" component={Archieves}></Route>
    <Route path="featured" component={Featured}></Route>
    <Route path="settings" component={Settings}></Route>
    </Route></Router>,
  document.getElementById('root')
);

ReactDOM.render(
  <Machinecard />,
  document.getElementById('root1')
);