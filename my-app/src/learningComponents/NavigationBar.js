import React from 'react';
 import {Link } from 'react-router';

export default class NavigationBar extends React.Component {
  render() {  
return (
<nav className="navbar navbar-default">
    <div className="contaier-fluid">
    <div className="navbar-header">
<a className="navbar-brand" href="#">Learn React</a>
        </div>
<div className="collapse navbar-collapse">
    <ul className="nav navbar-nav navbar-right">
        <li>   <Link to="login">Login </Link>
         </li>       
    
        <li>   <Link to="signup">SignUp </Link>
         </li>       
        </ul>
</div>
</div>
</nav>
);
}}