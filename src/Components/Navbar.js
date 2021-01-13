import React,{useState,useEffect} from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [active,setActive] =useState('Login')

  useEffect(()=>{
    let currentURL = window.location.href
    console.log(currentURL);
    if(currentURL.endsWith('/login'))
    setActive('login')
    else if (currentURL.endsWith('/signup'))
    setActive('Signup')
    else if(currentURL.endsWith('/qrchecker'))
    setActive('Use QR checker')
  }, [active])
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src={Logo} alt="" width="256" height="38"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        { active !== 'Login ' && 
        <Link to="/login">
         <a class="nav-link "  onClick={()=>setActive('login')}>Login</a>
      </Link>
}
{ active !=='Signup' && 
       <Link to = "/signup">
        <a class="nav-link" onClick={()=>setActive('Signup')}>Signup</a>
       </Link>
}

{/* { active !== 'Use QR checker' && 
        <Link to= "/qrchecker">
        <a class="nav-link" onClick={()=>setActive('Use QR checker')}>Use QR checker</a>
        </Link>
} */}
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar