import React from 'react';
import {Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
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
<h1>
                It's {this.state.name}!
            </h1>

            <Header changeTitle={this.changeTitle.bind(this) } title={this.state.title}/>
            
            <Footer />
            <Link to="archieves"> </Link>
            <Link to="archieves"> </Link> 
                                {this.props.children}

                   </div>
        );
    }


}