import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Redirect, Switch} from 'react-router-dom'
import firebase from 'firebase'
import ContactForm from './ContactForm'
import Contacts from './Contacts'
import Visitors from './Visitors'
import Reports from './Reports'
const AdminComponent = () =>{
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState(false);
  
    const clearInputs = () => {
      setEmail("");
      setPassword("");
    }
  
    const clearErrors = () => {
      setEmailError("");
      setPasswordError("");
    }
    const handleLogin = () => {
      clearErrors()
      firebase.auth().signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch(err.code) {
          case "auth/invalid-email":
            case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
                case "auth/wrong-password":
                  setPasswordError(err.message);
                  break;
        }
      })
    }
  
    const handleSignup = () => {
      clearErrors()
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch((err) =>{
        switch(err.code){
          case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
        }
      });
    }
  
    const handleLogout = () => {
      firebase.auth().signOut();
  
    };
  
    const authListener = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          clearInputs();
          setUser(user);
        }else {
          setUser("");
        }
      });
    }
  
    useEffect(() => {
      authListener()
    },[]);
  
    return(
        <Router>

        <div className="Admin-Component">
        <div class = "container-fluid">
          <div class = "row">
          
        
            <div class = "col-lg-12 md-6">
              
               
                <Switch>

        
  {user ? (
  
    <ContactForm
     handleLogout = {handleLogout}/>

  ) : (
   
  <Contacts
   email = {email}
  setEmail = {setEmail}
  password = {password}
  setPassword = {setPassword}
  handleLogin={handleLogin}
  handleSignup={handleSignup}
  hasAccount={hasAccount}
  setHasAccount={setHasAccount}
  emailError={emailError}
  passwordError={passwordError}

  
  
  />
       
 

  )}

<Route path = "/reports">
  <Reports/>
</Route>

<Route path = "/visitors">
  <Visitors/>
</Route>

     </Switch>

                </div>
                </div>
                </div>
                </div>
     </Router>       
    )
}


export default AdminComponent