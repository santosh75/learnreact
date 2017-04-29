import React from 'react';
 import {Link } from 'react-router';
 import Header from './Header';
 import Footer from './Footer';
 import Signup from './ReactRedux/Signup';
 import Navigationbar from './NavigationBar';
 export default class Layout extends React.Component {
 constructor(){
 super();
 this.state = {name:  "Santosh"};
 }
 
changeTitle(title){
this.setState({title}); 
}

    

    render()
    {
        const title = "Welcome Krishna Kharia !"
        setTimeout(()=> {this.setState({name: "Krishna Kharia"});},10000)
        setTimeout(()=> {this.setState({title: "Welcome Divya Raj"});},10000)
       
        return(

            <div>
<Navigationbar/>
     <button type="button" class="btn btn-default">Default</button>

<button type="button" class="btn btn-primary">Primary</button>

<button type="button" class="btn btn-success">Success</button>
            <Link to="settings"> Settings</Link>
                   <Link to="settings"> Settings</Link> 
            <Link to="archieves"> Archieves</Link> 
      
            <Link to="signup">SignUp </Link>
            <Link to="machinecard">Machinecard</Link>
          
<h1>
                It's {this.state.name}!
            </h1>
            <Header changeTitle={this.changeTitle.bind(this) } title={this.state.title}/>
      
            <Footer />
             {this.props.children}
                   
                   </div>
        );
   }


} 
  
