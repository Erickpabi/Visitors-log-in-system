import React from 'react'
import Logo from '../assets/Logo.png'
const Pricing = ({handleLogout}) => {
    return(
        <div>

        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <a class="nav-link "  href="#">Employees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Visitors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"  aria-current="page">Reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true" onClick={handleLogout}>Logout</a>
        </li>
      </ul>
    </div>
   


      
         

      </div>
    </div>
  </div>
</nav>
</div>
           
   
    )
}


export default Pricing