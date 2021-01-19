import React,{useEffect,useState} from 'react'
import Dashboard from './Dashboard'
import firebase from 'firebase'

const ContactForm = () => {
       
    var [contactformobject,setcontactformobject] = useState({})
    var [currentId,setcurrentId] = useState('')
    useEffect(() => {
        firebase.database().ref("contactform").on('value',snapshot => {
           if( snapshot.val() != null)
           setcontactformobject({
               ...snapshot.val()

           })
           else 
           setcontactformobject({})
            
        })
    },[])

    const addorEdit = obj =>{
        if(currentId=="")
firebase.database().ref("contactform").push(
    obj,
    err=>{
        if(err)
        console.log(err)
        else 
        setcurrentId('')
    }
) 
else
firebase.database().ref(`contactform/${currentId}`).set(
    obj,
    err => {
        if(err)
        console.log(err)
        else 
        setcurrentId('')
    }
)
    }

    const onDelete = key => {
        if(window.confirm("Are you sure to delete this record?")){
            firebase.database().ref(`contactform/${key}`).remove(
             
                err => {
                    if(err)
                    console.log(err)
                    else 
                    setcurrentId('')
                }
            )
        }
    }
    

 return(

    <div className = "container-fluid">
        <div className="row">
            
                <Dashboard {...({addorEdit,currentId,contactformobject})}/>

            </div>
            <div className = "col-lg-6">
                <table className = "table table-borderless table-stripped">

                
             <thead className = "thead-light">
                 <tr>
                     <th>Full Name</th>
                     <th>Mobile</th>
                     <th>Email</th>
                     <th>Address</th>
                     <th>Actions</th>
                 </tr>
             </thead>
             <tbody>
{
    Object.keys(contactformobject).map(id => {
        return <tr key ={id}>
            <td>
                {contactformobject[id].fullname}
            </td>
            <td>
                {contactformobject[id].mobile}
            </td>
            <td>
                {contactformobject[id].email}

            </td>
            <td>
                {contactformobject[id].address}
            </td>
            <td>
              <a className = "btn text-primary" onClick={() => {setcurrentId(id)}}>
                  <i className = "fas fa-pencil-alt">

                  </i>
              </a>
            </td>
            <td>
              <a className = "btn text-danger" onClick = {()=>{onDelete(id)}}>
                  <i className = "fas fa-trash-alt">

                  </i>
              </a>
            </td>
        </tr>
    })
}
             </tbody>
             </table>

            </div>
        
    </div>
 )
}

export default ContactForm