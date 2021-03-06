import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import Book from './components/Book/Book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-solid-svg-icons'



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return ( <div className="bg-img">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p style={{float:'right',margin:'20px'}}><FontAwesomeIcon icon={faUser} /> {loggedInUser.email}</p>
 
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/book">
            <Book/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/book">
            <Book></Book>
          </Route> */}
         
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
