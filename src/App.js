import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import './App.css';

class App extends Component {
  constructor(props) {
super(props);

this.state = {
  isAuthenticated: false
};
}

userHasAuthenticated = authenticated => {
this.setState({ isAuthenticated: authenticated });
}
  render() {
    const childProps = {
  isAuthenticated: this.state.isAuthenticated,
  userHasAuthenticated: this.userHasAuthenticated
};
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Facebook</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
             <LinkContainer to="/signup">
              <NavItem href="/signup">Signup</NavItem>
             </LinkContainer>
             <LinkContainer to="/login">
              <NavItem href="/login">Login</NavItem>
             </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
