import React,{useState,useEffect} from 'react'
import Logo from '../assets/Logo.png'
import firebase from 'firebase'


var ImgName,ImgUrl;
var files = [];
var reader = new FileReader();

function  image (){
var input = document.createElement("input");
input.type = "file";
input.click();
input.onchange = e => {
  files = e.target.files;
  reader = new FileReader();
  reader.onload = function () {
    document.getElementById("myimg").src = reader.result;

  }
  reader.readAsDataURL(files[0]);
}
input.click();
}

function upload (){
  ImgName = document.getElementById('namebox.value');
var uploadTask= firebase.storage().ref('Images/' + ImgName ).put(files[0])
uploadTask.on('state_chabged',function(snapshot){
  var progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
  document.getElementById('upProgress').innerHTML = 'Upload'+progress + '%';

},
function (error) {
  alert('error in saving the image');
},
function(){
  uploadTask.snapshot.ref.getDownloadURL().then(function(url){
    ImgUrl = url;
 

  firebase.database().ref('Pictures/' + ImgName).set({
    Name:ImgName,
    Link:ImgUrl
  });
  alert("Image added successfully")
}
  )
})
}


const Dashboard =  (props) => {
  const initialfieldvalues = {
    fullname:'',
    mobile:'',
    email:'',
    address:''
  }

  var [values,setValues] = useState(initialfieldvalues)
useEffect(()=>{
  if(props.currentId == '')
  setValues({
    ...initialfieldvalues
  })
  else
  setValues({
    ...props.contactformobject[props.currentId]
  })
},[props.currentId,props.contactformobject])


  const handleInputChange = e =>{
    var {name,value} = e.target
    setValues({
      ...values,
      [name]:value
    })
    
  }
  
  const handleFormSubmit = e =>{
    e.preventDefault()
    props.addorEdit(values)
  }
    return (
        <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" id = "navbar_brand_identity">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " id = "guest_div">
     
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Employees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Visitors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true"  >Logout</a>
        </li>
      </ul>
    </div>
   


      
         

      </div>
    </div>
  </div>
</nav>
<div class="container ">
        <div class="row">
            <div class=" col-lg-8  d-flex flex-column justify-content-left ">
            <div class="row">
                <div class="col-lg-8 col-md-8 mx-auto">

                    <div class="card card-body">
                        <h3 class="text-center mb-4">Employee List</h3>
                       
                        
                            <div class="input-group">
                                <input class="form-control" placeholder="Employee name" id="fullname" type="text" value = {values.fullname} onChange={handleInputChange} name="fullname"/>
                                <span class = "input-gorup-addon">  </span>
                                <input class="form-control" placeholder="Employee email" id="email"  type="text" value = {values.email} onChange={handleInputChange}  name="email"/>
                            </div>
                            <br/>
                            <div class="input-group">
                            <input  class = "form-control" type="tel" id="Phone number" name="mobile" placeholder="Employees number" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}" value = {values.mobile} onChange={handleInputChange}/>

                                <span class = "input-gorup-addon">  </span>
                                <input class="form-control" placeholder="Employees address" id="address"  type="text" value = {values.address} onChange={handleInputChange}  name="address"/>
                            </div>
                            <br/>
                            <div class="input-group">
                            <img  class="rounded-circle"  height = "75px" width = "75px" id = "myimg"/>
                                <span class = "input-gorup-addon image-span" >  </span>
                                <button type="button" class="btn btn-dark" id = "select" onClick={image}>Choose image</button>
                                <label id = "upProgress"></label>
                                <p id = "namebox"></p>
                                <button type="button" class="btn btn-dark" id = "select" onClick={upload}>Upload</button>
                            </div>
                          
                      
                            <br/>
                            <input class="btn btn-md btn-primary btn-block" value={props.currentId== '' ? "Save" : "Update"} type="submit" onClick={handleFormSubmit}/>
                      
                       </div>
                    </div>
            </div>
        </div>
    </div>
    </div>
           
        </div>
    )
}

export default Dashboard