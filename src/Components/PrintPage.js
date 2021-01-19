import React, { Component } from 'react'
import Logo from '../assets/Logo.png'
import  firebase from 'firebase'
import {Link} from 'react-router-dom'



function getData(){
  firebase.database().ref('/').once('value',function(snapshot) {
    snapshot.forEach(function(Snapshot)
    {
      var childKey = Snapshot.key;
      var childData = Snapshot.val();
      document.getElementById("list1").innerHTML = "My name is : " +  childData['Fullname'] ;
      document.getElementById("list2").innerHTML = "I am a :" +  childData['yourself'];
      document.getElementById("list3").innerHTML = "I came to see : " +  childData['Hostname'] ; 
   
     
      }  )
  })
 
 
}

function eric(){
  alert("Sign in successful")
}

const PrintPage = () => {
    return(
<div className = "print-cover">

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" id = "navbar_brand_identity">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " id = "guest_div">
     
        
         <a class="nav-link " id = "guest_title" >Your Details</a>
   


      
     

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
                        <h3 class="text-center mb-4" id="detial-text">*Click Print to check your Details *</h3>
                        <hr/>
                   
                          <h4 id = "list1"></h4>
                          <hr/>
                          <h4 id = "list2"></h4>
                          <hr/>
                          <h4 id = "list3"></h4>
                          <hr/>
                         
                          <input class="btn btn-lg btn-outline btn-dark" value=" Print" type="submit" onClick={getData} />
                          <Link to = "/">
                            <input class="btn btn-lg btn-success btn-block" value="Click here to exit" type="submit" onClick={eric} />
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

    export default PrintPage;