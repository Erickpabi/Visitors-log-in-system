import React,{useState,useEffect} from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'
import frame from '../assets/frame.png'

const Splash = () => {


    return(
        <div className = "welcome_header">
          



          
    <img src={Logo} alt="" width="256" height="38" className = "welcome_logo"/>
     <h1 className = "welcome_title"> Welcome to Amalitech </h1> 
     <Link to = "/guest">
     <button type="button" className="btn btn-primary btn-lg" onClick="writeData()" id="start" >Click to Start</button>
     </Link>
     <img src={frame} alt="" width="150" height="200" id= "frame"/>
     </div>

   
     



    
    )
}

export default Splash