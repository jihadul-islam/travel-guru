// import React, { useContext, useState } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router-dom';
// firebase.initializeApp(firebaseConfig);

// function Login() {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };
//   const [user, setUser] = useState({
//     isSignedIn: false,
//     name: '',
//     email:'',
//     photo: ''
//   })

//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn = () =>{
//     firebase.auth().signInWithPopup(provider)
//     .then(res => {
//       const {displayName, photoURL, email} = res.user;
//       const signedInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo: photoURL
//       }
//       setUser(signedInUser);
//       console.log(displayName, email, photoURL);
//       setLoggedInUser(signedInUser);
//       history.replace(from);
//     })
//     .catch(err => {
//       console.log(err);
//       console.log(err.message);
//     })
//   }

//   const handleSignOut = () => {
//     firebase.auth().signOut()
//     .then(res => {
//       const signedOutUser = {
//         isSignedIn: false, 
//         name: '',
//         phot:'',
//         email:'',
//         password:'',
//         error:'',
//         isValid:false,
//         existingUser: false
//       }
//       setUser(signedOutUser);
//       console.log(res);
//     })
//     .catch( err => {

//     })
//   }

//   const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
//   const hasNumber = input => /\d/.test(input);
  
//   const switchForm = e =>{
//     const createdUser = {...user};
//     createdUser.existingUser = e.target.checked;
//     setUser(createdUser);
//   }
//   const handleChange = e =>{
//     const newUserInfo = {
//       ...user
//     };
//     //debugger;
//     // perform validation
//     let isValid = true;
//     if(e.target.name === 'email'){
//       isValid = is_valid_email(e.target.value);
//     }
//     if(e.target.name === "password"){
//       isValid = e.target.value.length > 8 && hasNumber(e.target.value);
//     }

//     newUserInfo[e.target.name] = e.target.value;
//     newUserInfo.isValid = isValid;
//     setUser(newUserInfo);
//   }

//   const createAccount = (event) => {
//     if(user.isValid){
//       firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//       .then(res => {
//         console.log(res);
//         const createdUser = {...user};
//         createdUser.isSignedIn = true;
//         createdUser.error = '';
//         setUser(createdUser);
//       })
//       .catch(err => {
//         console.log(err.message);
//         const createdUser = {...user};
//         createdUser.isSignedIn = false;
//         createdUser.error = err.message;
//         setUser(createdUser);
//       })
//     }
//     event.preventDefault();
//     event.target.reset();
//   } 

//   const signInUser = event => {
//     if(user.isValid){
//       firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//       .then(res => {
//         console.log(res);
//         const createdUser = {...user};
//         createdUser.isSignedIn = true;
//         createdUser.error = '';
//         setUser(createdUser);
//       })
//       .catch(err => {
//         console.log(err.message);
//         const createdUser = {...user};
//         createdUser.isSignedIn = false;
//         createdUser.error = err.message;
//         setUser(createdUser);
//       })
//     }
//     event.preventDefault();
//     event.target.reset();
//   }

//   return (
//     <div >
//       {
//         user.isSignedIn ? <button onClick={handleSignOut} >Sign out</button> :
//         <button onClick={handleSignIn} >Sign in</button>
//       }
      
      
//       <h1>Our own Authentication</h1>
//       <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
//       <label htmlFor="switchForm"> Returning User</label>
//       <form style={{display:user.existingUser ? 'block': 'none'}} onSubmit={signInUser}>
//         <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
//         <br/>
//         <input type="password" onBlur={handleChange} name="password" placeholder="Your Password" required/>
//         <br/>
//         <input type="submit" value="SignIn"/>
//       </form>
//       <form style={{display:user.existingUser ? 'none': 'block'}} onSubmit={createAccount}>
//         <input type="text" onBlur={handleChange} name="name" placeholder="Your Name" required/>
//         <br/>
//         <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
//         <br/>
//         <input type="password" onBlur={handleChange} name="password" placeholder="Your Password" required/>
//         <br/>
//         <input type="submit" value="Create Account"/>
//       </form>
//       {
//         user.error && <p style={{color:'red'}}>{user.error}</p>
//       }
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useContext } from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSocks } from '@fortawesome/free-solid-svg-icons';



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (

    <div className="login">
      {/* { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        <button onClick={googleSignIn}>Sign In</button>
      } */}
       {/* <button onClick={googleSignIn}>Sign In</button>
      <br/>
      <button onClick={fbSignIn}>Sign in using Facebook</button> */}
      {/* {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}!</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      } */}

      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">Create an Account</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
        <br/>
        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
        <br/>
        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
        <br/>
        <input className="bg-success text-white" type="submit" value={newUser ? 'Create Account' : 'login'}/>
      </form>


      <button className="login-gf" onClick={googleSignIn}><FontAwesomeIcon icon={faSocks} /> Continue With Google</button>
      <br/>
      <button className="login-gf" onClick={fbSignIn}>Sign in using Facebook</button>
      
    </div>
  );
}

export default Login;