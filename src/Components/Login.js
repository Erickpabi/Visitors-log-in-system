import React from 'react'
import Logo from '../assets/Logo.png'


  

const Login = () =>{
    return (
        <div className = "login_cover">

        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" id = "navbar_brand_identity">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " id = "guest_div">
     
        
         <a class="nav-link " id = "guest_title" >Login</a>
   


      
     

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
                            <h3 class="mb-0">Login</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" >
                                <div class="form-group">
                                    <label for="uname1">Username</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname" required=""/>
                                    
                                   
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" name="pwd1" required=""  id = "upwd"/>
                                    
                                </div>
                                <br/>
                                <div>
                                    <label class="custom-control custom-checkbox">
                                      <input type="checkbox" class="custom-control-input"/>
                                      <span class="custom-control-indicator"></span>
                                      <span class="custom-control-description small text-dark"> Remember me on this computer</span>
                                    </label>
                                    
                                </div>
                                
<br/>
                                <button type="submit"  class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
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
            


         
         
export default Login
       

  

