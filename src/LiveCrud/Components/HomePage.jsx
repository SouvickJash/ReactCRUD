import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAllUsers } from '../ApiData/Api'
import { Link } from 'react-router-dom'
import { deleteUser } from '../ApiData/Api'
import { toast } from 'react-toastify'
import adduser from '../../Image/addicon.svg'
import update from '../../Image/edit.svg'
import d1 from '../../Image/d1.svg'
import { ScaleLoader } from "react-spinners";

const HomePage = () => {
   const [loading, setLoading] = useState(true);
   const [name,setName]=useState([])
   const getUser = async()=>{
      const response = await getAllUsers()
      setName(response?.data)
   }
useEffect(()=>{
   getUser()
},[])
console.log("hiii",name)

// delete user
const deleteUserData = async id => {
   await deleteUser(id)
   getUser()
   toast.error("Data deleted successfully");
}
// if(){
//    return(
//       <>
//           <h3 style={{color:"red"}}>Data Not Found....</h3>
//       </>
//    )
// }
// loading
setTimeout(() => {
   setLoading(false);
 }, 500);
  if (loading) {
   return (
     <>
       
        <div className="spinner">
        <h6>loading...</h6>
         <ScaleLoader color="#0c55d4" size={100} />
       </div>
     </>
   );
 }
  return (
    <>
    <div className="container" style={{marginLeft:100}}>
    <h3 style={{marginLeft:230,color:"#10adb0"}}><u>User Page</u></h3> 
    {/* <Link to='/add' className="btn btn-primary" style={{marginTop:10}}>Add User</Link> */}


       <Link className="nav-link" to='/add'>
      <caption> <img src={adduser} alt="" width="40" height="40"/></caption>
      </Link> 


    
    <table class="table" border="2px">
  <thead>
    <tr className="thcolor">
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      {/* <th scope="col">ity</th> */}
      <th scope="col">Class</th>
      <th colspan={2}   >Action</th>
    </tr>
  </thead>
  <tbody>
   {
      name?.data?.map((item)=>{
         return (
            <>
             <tr>
             <th scope="row">{item.name}</th>
             <td>{item.email}</td>
             <td>{item.phone}</td>
             <td>{item.address}</td>
             {/* <td>{item.city}</td> */}
             <td>{item.class}</td>
             {/* <td><Link to={`/update/${item._id}`} className="btn btn-success">Update</Link></td>  */}

           <td>  <Link className="nav-link" to={`/update/${item._id}`}>
           <captionl><img src={update} alt="" width="30" height="40"/></captionl>
           </Link> </td>

           <td> <Link className="nav-link" to='/'>
           <captionl> <img className="db" src={d1} alt="" width="35" height="45" onClick={() => deleteUserData(item._id)} /></captionl>
           </Link> </td>


             {/* <td><Link to='/' className="btn btn-danger" onClick={() => deleteUserData(item._id)}>Delete</Link></td>        */}
          </tr>
            </>
         )
      })
   }

  </tbody>
</table>
    </div>
     
    </>
  )
}

export default HomePage
