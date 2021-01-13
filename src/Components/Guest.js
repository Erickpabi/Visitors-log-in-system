import React from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'
import  firebase from 'firebase'



var firebaseConfig = {
  apiKey: "AIzaSyCQTo9jkmhKmzpqgD9bZC2pa0nrn-OaRlc",
  authDomain: "visitorslog-71bc0.firebaseapp.com",
  databaseURL: "https://visitorslog-71bc0-default-rtdb.firebaseio.com",
  projectId: "visitorslog-71bc0",
  storageBucket: "visitorslog-71bc0.appspot.com",
  messagingSenderId: "674541381840",
  appId: "1:674541381840:web:11ac28431926ca8398d6d5",
  measurementId: "G-P8Y6ZBFFG4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


                                     function writeData () {
  firebase.database().ref("User").update({
  yourself:document.getElementById("yourself").value
  })
  
}
 
const Guest = () => {
  
    return(
      
      <div className = "guest_cover">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" id = "navbar_brand_identity">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " id = "guest_div">
     
        
         <a class="nav-link " id = "guest_title" >How May I Help You?</a>
   


      
     

      </div>
    </div>
  </div>
</nav>

 <div class="container ">
        <div class="row">
            <div class=" col-md-12 min-vh-100 d-flex flex-column justify-content-center ">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">

                    <div class="card card-body">
                        <h3 class="text-center mb-4">I am</h3>
                       
                        
                        <select class="form-select" aria-label="Default select example" id = "yourself" name="yourself">
  <option selected>Open this select menu</option>
  <option value="visitor">Visitor</option>
  <option value="client">Client</option>
  <option value="contractor">Contractor</option>
  <option value="chauffeur">Chauffeur</option>
  <option value="doctor">Doctor</option>
</select>
                            <br/>
                            
                        
                            
                            <br/>
                            <Link to = "/signup">
   
    
                            <input class="btn btn-md btn-primary btn-block" value="Continue" type="submit" onClick={writeData}
                             />
                            </Link>




                    </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
    

 
    </div>


    
       
  

    
    )
}

export default Guest