import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';


const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
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
              <Link variant="outline-info" className="btn-book" to="/book">Book</Link>
          </li>

          <li className="singin-btn" >
           {
               loggedInUser.isSignIn ? 
               <Link onClick={() => setLoggedInUser({})} >Sign Out </Link>:
               <Link to='/login'>Sign In</Link>
             }
            
          </li>
          
      </ul>
  </nav>
  </div>
    );
};

export default Header;