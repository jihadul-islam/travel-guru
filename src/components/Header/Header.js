import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';
import header from '../../image/bg3.jpg'

// const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const Header = () => {
    return (
      //   <>
      //   <Navbar bg="primary" variant="dark">
      //     <Navbar.Brand href="#home"><img src={logo} alt="" className="logo"/></Navbar.Brand>
      //     <Nav className="mr-auto">
      //       <Link to="/home" className="navbar">Home</Link>
      //       <Link to="/book" className="navbar">Book</Link>
      //       <Link to="/login" className="navbar">Login</Link>
      //         {/* <button onClick={() => setLoggedInUser({})}>Sign out</button> */}
            
            
      //     </Nav>
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-info">Search</Button>
      //     </Form>
      //   </Navbar>
        
      // </>
      <div>
      <nav className="nav">
      <ul>
          <li>
              <img className="logo" src={logo} alt=""/>
          </li>
          <li>
              <Link to="/home">Home</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
          <li>
              <Link className="btn-book" to="/book">Book</Link>
          </li>
      </ul>
  </nav>
  </div>
    );
};

export default Header;