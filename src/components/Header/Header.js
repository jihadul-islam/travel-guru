import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import './Header.css';

// const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const Header = () => {
    return (
     
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
              <Link className="btn-book" to="/book">Book</Link>
          </li>

          <li>
              <Link to="/login">Login</Link>
          </li>
      </ul>
  </nav>
  </div>
    );
};

export default Header;