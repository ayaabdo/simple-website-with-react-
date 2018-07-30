import React, { Component } from "react";
import {  Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component{
  constructor(props){ //create state obj where we'll store the user enters in the form
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm(){
    return this.state.email.length > 0 && this.state.password.length > 0;
  }


     handleChange = event => {
       this.setState({
         [event.target.id]: event.target.value
       });
     }

  handleSubmit = event => {
    event.preventDefault();
  }

  render(){
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
         <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus //flag for our email field, so that when our form loads, it sets focus to this field.
              type="email"
              value={this.state.email}
              onChange={this.handleChange} //updates changes when the user types into fields
              />
         </FormGroup>
         <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              onChange={this.handleChange} //updates changes when the user types into fields
              />
         </FormGroup>
         <Button
  block
  bsSize="large"
  disabled={!this.validateForm()}
  type="submit"
>
  Login
</Button>
       </form>
      </div>
    );
  }
}
