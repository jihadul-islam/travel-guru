import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import BgImg from './image/Rectangle 1.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import NoMatch from './components/NoMatch/NoMatch';
import Book from './components/Book/Book';
import Calender from './components/Calender/Calender';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return ( <div className="bg-img">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p style={{float:'right',marginRight:'10px'}}><FontAwesomeIcon icon={faUser} /> {loggedInUser.email}</p>
 
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/book">
            <Book></Book>
          </Route> */}
          <PrivateRoute path="/book">
            <Book/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
   </div>
  );
}

export default App;
