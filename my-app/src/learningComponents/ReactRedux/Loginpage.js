import React from 'react';

 export default class Signup extends React.Component {

    render()
    {
        return(
<div className="row">
             

                <div className="col-md-4 col-md-offset-4">
<h1>Login</h1>
<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
    <button type="submit" className="btn btn-default">Login</button>
</form>
  </div>
</div>










        );
   }


} 
  
