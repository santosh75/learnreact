import React from 'react';
 export default class Signup extends React.Component {

    render()
    {
        return(
<div className="row">
             

                <div className="col-md-4 col-md-offset-4">
<h1>Signup</h1>
<form>
  <div className="form-group">
    <label for="exampleInputEmail1">First Name </label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First Name"/>
  </div>
 <div className="form-group">
    <label for="exampleInputEmail1">Last Name </label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Last Name"/>
  </div>
 
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirm password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm password"/>
  </div>
  
    <button type="submit" className="btn btn-default">Signup</button>
</form>
  </div>
</div>










        );
   }


} 
  
