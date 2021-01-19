import React, { Component } from 'react'
import Logo from '../assets/Logo.png'
import  firebase from 'firebase'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';




export default class Host extends React.Component{
  constructor(props) {
 
    super(props);
  this.items = [
    'Sharaf Deen Okyere',
    'Thomas Darko',
    'Sarah',
    'Emmanuel Asaber',
    'Eric Kpabi',
    'Vincent Sarsah',
    'Daniel Baidu',
    'George Mintah',
    'Austin Botchway',
    'Krisitne Leabres Matthee',
    'Alfred Quaicoo'
  ];
  this.state = {
    suggestions:[],
    text:'',
  };
}

  onTextChanged = (e) => {
    const value = e.target.value;
  let suggestions = [];
    if(value.length > 0){
      const regex = new RegExp(`^${value}`,'i');
     suggestions = this.items.sort().filter(v => regex.test(v));
    }
  this.setState(() => ({suggestions, text:value}));
} 

suggestionSelected(value) {
  this.setState(()=> ({
    text:value,
    suggestions:[],
  }))
}
  
  renderSuggestions() {
    const {suggestions} = this.state;
    if(suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => <li onClick = {() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    );
  }

  



render() {
  const {text} = this.state;
  function writeData () {
    firebase.database().ref("User").update({
  Hostname:document.getElementById("hname").value
    })
    
  } 
{ 
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
     
        
         <a class="nav-link " id = "guest_title" >Who Are You Visiting?</a>
   


      
     

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
                        <h3 class="text-center mb-4">Who are you visiting?</h3>
                       
                        
                            <br/>
                           
                            <div class="input autocompletetext">
                              <div className = "autocompletetext">

                              

                                <input value = {text} onChange = {this.onTextChanged} class="form-control " placeholder="Hostname" id="hname" type="text"/>
                                <ul>
                                  {this.renderSuggestions()}
                                </ul>
                                </div>
                            </div>
                            <br/>
    
   
 
                            <br/>
                            <Link to = "/webcam">

                            
                            <input class="btn btn-md btn-primary btn-block" value="Continue" type="submit" onClick={writeData}/>
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
}
}
