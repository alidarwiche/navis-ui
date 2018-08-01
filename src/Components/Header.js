import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Home</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">To-Do list</NavItem>
            <NavItem eventKey={2} href="#">Products</NavItem>
            <NavItem eventKey={3} href="#">Weather Feed</NavItem>
            <NavItem eventKey={4} href="#">Footer</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
