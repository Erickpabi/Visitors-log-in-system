import React from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'

const Admin = () => {
    return(
      <div className = "admin-header">
          



          
      <img src={Logo} alt="" width="256" height="38" className = "welcome_logo"/>
       <h1 className = "welcome_title"> ADMIN  </h1> 
       <Link to = "/admincomponent">
       <button type="button" className="btn btn-outline btn-lg"  id="start" >Click to Start</button>
       </Link>
    
       </div>
  
     
       


    )
}

export default Admin