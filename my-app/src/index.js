import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './learningComponents/Layout';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import './index.css';
import Machinecard from './Machinecard';
import Archieves from './Comps/Archieves';
import Featured from './Comps/Featured';
import Settings from './Comps/Settings';
import Signup from './learningComponents/ReactRedux/Signup';
import Login from './learningComponents/ReactRedux/Loginpage';
 
ReactDOM.render(
  <Router history={browserHistory}> 
    <Route path="/" component={Layout}>
    <IndexRoute component={Featured}></IndexRoute>
    <Route path="archieves" component={Archieves}></Route>
    <Route path="settings" component={Settings}></Route>
    <Route path="signup" component={Signup}></Route>
  <Route path="login" component={Login}></Route>
  <Route path="machinecard" component={Machinecard}></Route>
  
    </Route></Router>,
  document.getElementById('root')
);


