import React from 'react'
import Logo from '../assets/Logo.png'
import  firebase from 'firebase'
import {Link} from  'react-router-dom'
var video = document.querySelector("#videoElement");
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUsermedia
||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;

if(navigator.getUserMedia) {
  navigator.getUserMedia({video:true},handleVideo,videoError);
}

function handleVideo(stream) {
  video.src = window.URL.createObjectURL(stream);
}

function videoError(e) {

}

 
  

const Webcam = () =>{
return(
  <div id ="webcam_cover">

  
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" id = "navbar_brand_identity">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " id = "guest_div">
     
        
         <a class="nav-link " id = "guest_title" >Take a picture</a>
   
        
     

      </div>
    </div>
  </div>
</nav>

<p id = "webcam_paragraph">Smile for the camera</p>

 <div id = "container">


 <video autoplay = "true" id = "videoElement" ></video>



 
</div>

<Link to = "/printpage">
<button type="button" className="btn btn-primary btn-lg"  id="continue-button" >Continue</button>

      </Link>
</div>


)
}


export default Webcam