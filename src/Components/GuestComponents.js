import Reacat from 'react'
import Guest from './Guest'
import {BrowserRouter as Router,Route,Redirect, Switch} from 'react-router-dom'
function GuestComponents() {
  return (
 
    <div className="Guest">
     <div class = "container-fluid">
       <div class = "row">
       
     
         <div class = "col-lg-12 md-6">
           <Guest/>
         


       </div>
     </div>
    </div>
    </div> 

   
  );
}

export default GuestComponents;
