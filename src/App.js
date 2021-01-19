import './App.css';
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import QR from './Components/QR'
import {BrowserRouter as Router,Route,Redirect, Switch} from 'react-router-dom'
import Splash from './Components/Splash';
import Guest from './Components/Guest'
import Webcam from './Components/Webcam';
import Host from './Components/Host'
import PrintPage from './Components/PrintPage'
import AdminComponent from './Components/AdminComponent'
import Contacts from './Components/Contacts'
import Admin from './Components/Admin'

import ContactForm from './Components/ContactForm'
function App() {
  return (
    <Router>
    <div className="App">
     <div class = "container-fluid">
       <div class = "row">
       
     
         <div class = "col-lg-12 md-6">
        
      

 
<Switch>
<Route exact path = "/">
  <Splash/>
  </Route> 
  <Route path = "/guest">
  <Guest/>
</Route>
  <Route  path = "/navbar">
  <Navbar/>
</Route>

<Route  path = "/login">
  <Login/>
</Route>
<Route path = "/signup">
  <Signup/>
</Route>
<Route path = "/qrchecker">
  <QR/>
</Route>
<Route path = "/host">
  <Host/>
</Route>
<Route path = "/webcam">
  <Webcam/>
</Route>

<Route path = "/printpage">
  <PrintPage/>
</Route>




<Route path = "/admin">
  <Admin/>
</Route>



<Route path = "/admincomponent">
  <AdminComponent/>
</Route>



<Route >
  <Redirect to = "/"/>
</Route>
</Switch> 
       </div>
     </div>
    </div>
    </div> 

    

     </Router>
  );
}

export default App;
