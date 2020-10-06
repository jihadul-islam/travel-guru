
import React, { isValidElement, useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleSignIn, handleFbSignIn, handleSignOut, initializedLogInFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import fbIcon from '../../icon/fb.png'
import gIcon from '../../icon/google.png'
import './Login.css';
const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn:false,
        name:'',
        email:'',
        password:'',
        loginPassword:'',
        photoURL:'',
        error:'',
        success: false,
    })
    
    initializedLogInFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const history = useHistory();
     const location = useLocation();
     let { from } = location.state || { from: { pathname: "/" } };

 //google SignIn
    const googleSignIn = (e) => {
        e.preventDefault()
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res, true);
        })
    }
//Facebook signIn
    const fbSignIn = (e) => {
        e.preventDefault()
        handleFbSignIn()
        .then(res => {
            handleResponse(res, true)
        })
    }
//SignOut
    const SignOut = () => {
        handleSignOut()
            .then(res =>{
                handleResponse(res, false)
        })
    }

    const handleBlur = (e) =>{

        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length >= 6;
            isFieldValid= isPasswordValid;
        }

        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
       
        
    }
//Submit
    const handleSubmit = (e) => {

        e.preventDefault()

        if(newUser && user.email && user.password){
            createUserWithEmailAndPassword((`${user.firstName} ${user.lastName}`), user.email, user.password)
            .then(res => {
                handleResponse(res, true)
            })
        };
        if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then( res => {
                handleResponse(res, true);
            })
        }

    }

    const handleResponse = (res, redirect) =>{
        setUser(res);
        if(res.error){
            alert(res.error);  
        }
        setLoggedInUser(res);
       if(redirect){
        history.replace(from);
       }
    }


    return (
        <div className='login-from-container container'>

               
    <div className='login-from'>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"id="new-user"/>
                <label htmlFor="newUser">New Account</label> 
 
                <form onSubmit={handleSubmit}>
                    {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
                    <br/>
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
                    <br/>
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
                    <br/>
                    <input className="bg-success text-white" type="submit" value={newUser ? 'Create Account' : 'login'}/>
                </form>
     </div>
                <p style={{textAlign:'center'}}><b>or</b></p>
               <div onClick={googleSignIn} className='googleFbLoginBtn'>
                    <img src={gIcon} alt=""/>
                    <button onClick={googleSignIn}>Continue with Google</button>
                </div>
                <div onClick={fbSignIn} className='googleFbLoginBtn'>
                    <img src={fbIcon} alt=""/>
                    <button onClick={fbSignIn}>Continue with Facebook</button><br/>
                </div>
        </div>
    );
};

export default Login;