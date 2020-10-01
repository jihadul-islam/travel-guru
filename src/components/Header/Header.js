import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import './Header.css'
;
const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><img src={logo} alt="" className="logo"/></Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/home" className="navbar">Home</Link>
            <Link to="/hotel" className="navbar">Hotel</Link>
            <Link to="/book" className="navbar">Book</Link>
            <Link to="/login" className="navbar">Login</Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        
      </>
    );
};

export default Header;