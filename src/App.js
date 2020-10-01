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
import Book from './components/Book/Book';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} style>
       <div className="main-bg">
      <p className="main-bg"> Name: {loggedInUser.name}</p>
     
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            {/* <PrivateRoute path="/book/:bedType">
              <Book/>
            </PrivateRoute> */}
            <Route path="/book">
              <Book></Book>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </div>
    </UserContext.Provider>
   
  );
}

export default App;
