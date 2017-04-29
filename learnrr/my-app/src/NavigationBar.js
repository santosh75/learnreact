import React from 'react';

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
        <li><a href="#">Sign Up</a></li>       
        </ul>
</div>
</div>
</nav>
);
}}