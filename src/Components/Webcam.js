import React from 'react'
import Logo from '../assets/Logo.png'
import  firebase from 'firebase'
import {Link} from  'react-router-dom'

var video,canvas,context,image,ImgName,ImgUrl;
var files = [];
var reader = new FileReader();

function Snap() {
 video = document.getElementById("video");
 canvas = document.getElementById("canvas");

  context = canvas.getContext('2d')
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUsermedia
||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;

if(navigator.getUserMedia) {
  navigator.getUserMedia({video:true},streamWebCam,throwError);
}

function streamWebCam(stream) {
  video.srcObject = stream;
  video.play();
}

function throwError(e) {
alert(e.name)
}


canvas.width = video.clientWidth;
canvas.height = video.clientHeight;

var x = document.getElementById("snap_btn");
x.value = "Snap picture"
context.drawImage(video,0,0,640,480);
   image = new Image()
  image.id = 'pic'
  image.src = canvas.toDataURL('image/png')
   console.log(image.src)

}




 function Continue (){
  
  
  
   
   
   }
   
  
  
 function upload(){
  firebase.storage().ref('Images/' + new Date() + '-' + 'base64').putString(image.src,'data_url')
  .then(function (snapshot) {
    console.log("Image uploaded");
    alert("Image uploaded successfully.Click  CONTINUE to move to the next page");
  })
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



 <div id = "container">


 <video id ="video" width = "620" height = "480">
   
 </video>
<canvas id = "canvas"  width ="640" height="480 " >


</canvas>
    
<input class="btn btn-lg btn-outline-dark " value="Click to activate camera" type="button"  id = "snap_btn" onClick={Snap} />


 

<button type="button" className="btn btn-success btn-lg"  id="upload-button" onClick={upload} >Upload Image</button>


      
</div>


<div class="d-grid gap-2 col-6 mx-auto">
<Link to = "/printpage">
<button type="button" className="btn btn-primary btn-lg btn-block"  id="continue-button"  onClick={Continue}  >Continue</button>
</Link>
</div>

</div>

)
}


export default Webcam