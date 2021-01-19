import React from 'react'
import Logo from '../assets/Logo.png'
import {Link,useHistory} from 'react-router-dom'
import firebase from 'firebase'
import Webcam from './Webcam'
import Splash from './Splash'

    
/*   function login (){
    
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const email = txtEmail.value;
    const password= txtPassword.value;


       
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password);
  
    
promise.catch(e =>alert(e.message));

    
   
  }
 */

  

  
    
  
    
 

   
   
   

    
   
 

  /*     firebase.auth().onAuthStateChanged(firebaseUser => {
        
        if(firebaseUser){
         
         
        }
        else {
      console.log("Login failed")
          
        }
    })  
  */
    
function change() {


 var contactheader= document.getElementById("contact-header");
 contactheader.innerHTML = "Login"
}
   

const Contacts = (props) => {
  const 
  {email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}
   = props;
    return(
        <div className = "contacts-cover">

       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" id = "navbar_brand_identity">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " id = "guest_div">
     
        
         <a class="nav-link " id = "guest_title" > </a>
   


      
     

      </div>
    </div>
  </div>
</nav>
    
<div class="container">
    <div class="row">
        <div class="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">

                    <div class="card rounded shadow shadow-sm">
                        <div class="card-header">
                        <h3 class="mb-0" id = "contact-header">Enter your details</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" >
                                <div class="form-group">
                                    <label for="uname1">Email</label>
                                    <input type="email" class="form-control form-control-lg rounded-0" name="uname1" id="txtEmail"  value={email} onChange={(e) =>setEmail(e.target.value)}  />
                                    <p className="errorMsg">{emailError}</p>
                                   
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" name="pwd1"   id = "txtPassword" required value={password} onChange = {e => setPassword(e.target.value)}/>
                                    <p className = "errorMsg">{passwordError}</p>
                                </div>
                              
                                <div class="input-group btn-group">
                                

{hasAccount ? (
  <>
   
   <button type="button"  class="btn btn-primary btn-lg " id="btnLogin" onClick = {handleLogin}>Login</button>
   <br/>
   <br/>
   <p>Dont have an account <span style = {{color:"blue"}}onClick = {()=>setHasAccount(!hasAccount)}>Sign up</span></p>
   </>
) : (
  
<>

<button type="button"  class="btn btn-primary btn-lg " id="btnLogin" onClick = {handleSignup} >Sign up</button>
<br/>
<br/>
<p> Have an account ?<span  style = {{color:"blue"}} onClick = {()=>setHasAccount(!hasAccount)}>Sign in</span></p>
    </>                           
                              
)}                 

                              </div>
                            </form>
                        </div>
                      
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
               
                   
                    
                    
                  
                 
                  
                                    
    )
}





export default Contacts