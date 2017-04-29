import React  from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import { Link } from 'react-router';
class App extends React.Component {
  render() {
    return (

      <div className="container">
      
      <NavigationBar/>
      {this.props.children}
      
      </div>
      
    );
  }
}

export default App;
