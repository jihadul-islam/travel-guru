import React, { useContext, useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import fbIcon from '../../icon/fb.png';
import gIcon from '../../icon/google.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = ({room}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    const [newUser,setNewUser] = useState(false);
    const [user,setUser] = useState({
      isSignedIn:false,
      name:'',
      email:'',
      password:'',
      photo:''
    
    });
      const provider = new firebase.auth.GoogleAuthProvider();
      const  facebookProvider = new firebase.auth.FacebookAuthProvider();
      const handleSignin = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
          const  {displayName , photoURL , email} =res.user;
          const signedInUser = {
            isSignedIn:true,
            name:displayName,
            email:email,
            photo:photoURL
          }
          setUser(signedInUser);
        })
        .catch(err => {
    
        })
      }
    
      //fb
    
      const handleFbSignIn = ()  =>{
    
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      }
    //signOut
      const handleSignOut = () => {
        firebase.auth().signOut()
              .then(res => {
            const signOutUser = {
              isSignedIn:false,
              name:'',
              email:'',
              error:'',
              success:false,
              photo:''
            }
            setUser(signOutUser)
          })
          .catch(err =>{
    
          })
      }
      const handleBlur =(e) => {
        let isFromValid ;
    
        if(e.target.name === 'email'){
          isFromValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
          }
    
         if (e.target.name === 'password') {
           const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFromValid= isPasswordValid && passwordHasNumber
         }
    
         if (isFromValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);       
         }
      };
    
      const handleSubmit = (e) =>{
        if( newUser && user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
         .then(res => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success= true;
          setUser(newUserInfo);
          updateUserName(user.name);
          
         })
          .catch(error =>  {
            // Handle Errors here.
           const newUserInfo = {...user};
           newUserInfo.error = error.message;
           newUserInfo.success = false;
            setUser(newUserInfo);
          });
        }
    
        if (!newUser && user.email && user.password){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success= true;
            setUser(newUserInfo);
          })
          .catch(function(error) {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
             setUser(newUserInfo);
          });
        }
        e.preventDefault();
      };
    //update user name
    const updateUserName = name => {
    
      var user = firebase.auth().currentUser;
    
    user.updateProfile({
      displayName: name
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
    }
            
    return (
        <div className="login">
          
          <input type="checkbox" onChange={() => setNewUser (!newUser)} name="newUser" id=""/>
          <label htmlFor="newUser">Click Create an Account </label><br/>
        
        
        <form onSubmit= {handleSubmit}>
         {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Fast name" required/>}<br/>
         {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Last name" required/> }<br/>
          <input type="text" onBlur={handleBlur} name="email" placeholder= " Your email address" required/><br/>
          <input type="password" onBlur={handleBlur}  name="password" placeholder = "password" required/> <br/>
       
        {newUser && <input type="password" onBlur={handleBlur}  name="password" placeholder = "confirm password" required/>}<br/>
       
          
          

          {/* <input className="login-btn" type="submit" value={newUser  ? 'Create Account' :'Login'}/> */}

          <button className="login-btn">{newUser  ? 'Create Account' :'Login'}</button>
        </form>
       
        <p style={{color:'red'}}>{user.error}</p>
      {user.success && <p style={{color:'green'}}>Suceessfully {newUser ? 'created' : 'log in'} your account</p>}
        {/*  */}
        {/* {
          user.isSignedIn ? <button className="login-gf" onClick={handleSignOut}>Sign Out</button> :
           < button className="login-gf" onClick={handleSignin}>Continue with Google</button>
        } */}
        <img className="icon" src={gIcon} alt=""/> <  button className="login-gf" onClick={handleSignin}>Continue with Google</button>
        <br/>
        <img className="icon" src={fbIcon} alt=""/>  <button className="login-gf" onClick={handleFbSignIn}> Continue with Facebook</button>
   >
        </div>
    );
};

export default Login;