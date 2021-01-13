import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'
import  firebase from 'firebase'

function nameData () {
    firebase.database().ref("User").update({
        Fullname:document.getElementById("fname").value,
        Email:document.getElementById("email").value,
        Companyname:document.getElementById("cname").value,
   phone1:document.getElementById("phone").value
    })
    
}


const Signup = () => {
    return(


        <div className = "signup_cover">

        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" id = "navbar_brand_identity">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " id = "guest_div">
     
        
         <a class="nav-link " id = "guest_title" >Tell us about yourself</a>
   


      
     

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
                        <h3 class="text-center mb-4">Sign-up</h3>
                       
                        
                            <div class="input-group">
                                <input class="form-control" placeholder="Fullname" id="fname" type="text"/>
                                <span class = "input-gorup-addon">  </span>
                                <input class="form-control" placeholder="Email" id="email"  type="text"/>
                            </div>
                            <br/>
                            <div class="input-group">
                            <input  class = "form-control" type="tel" id="phone" name="phone1" placeholder="0123-45-67-18" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}" required/>

                                <span class = "input-gorup-addon">  </span>
                                <input class="form-control" placeholder="Companyname" id="cname"  type="text"/>
                            </div>
                            <br/>
                         
                         <div class="checkbox">
                                <label class="small">
                                    <input name="terms" type="checkbox"/> I confirm that the information given is correct
                                </label>
                            </div>
                            <br/>
                            <Link to = "/host">
                            <input class="btn btn-md btn-primary btn-block" value="Sign Me Up" type="submit" onClick={nameData}/>
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

export default Signup