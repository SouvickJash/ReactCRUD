import React from 'react'
import{useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { addUser } from '../ApiData/Api'
import { toast } from 'react-toastify'
import backarrow from '../../Image/left-arrow.svg'
import { Link } from 'react-router-dom'
import { ScaleLoader } from "react-spinners";
const initialValues={
  name:'',
  email:'',
  phone:'',
  address:'',
//   city:'',
  class:''
}
const AddUserDetails = () => {
  const [loading, setLoading] = useState(true);//loading
  const [user, setUser] = useState(initialValues)
  const [error, setError] = useState({})
  const navigate=useNavigate()
//   const navigate = useNavigate();

  // form validation
  const validation = () => {
    let error = {}

    if (!user.name) {
        error.name = "Name is Required"
    }

    if (!user.email) {
        error.email = "Email is Required"
    } else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
        error.email = "Enter a valid Email"
    }

    if (!user.phone) {
        error.phone = "Phone is Required"
    }
    if (!user.address) {
      error.address = "address is Required"
  }
    // if (!user.city) {
    //     error.city = "City is Required"
    // }
    if (!user.class) {
        error.class = "City is Required"
    }

    return error
}

// onchange validation
let name, value
const postUserData = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })

    if (name === "name") {
        if (value.length === 0) {
            setError({ ...error, name: "@Name is Required" })
            setUser({ ...user, name: "" })
        } else {
            setError({ ...error, name: "" })
            setUser({ ...user, name: value })
        }
    }

    if (name === "email") {
        if (value.length === 0) {
            setError({ ...error, email: "@Email is Required" })
            setUser({ ...user, email: "" })
        } else {
            setError({ ...error, email: "" })
            setUser({ ...user, email: value })
        }
    }
   if (name === "phone") {
        if (value.length === 0) {
            setError({ ...error, phone: "@Phone is Required" })
            setUser({ ...user, phone: "" })
        } else {
            setError({ ...error, phone: "" })
            setUser({ ...user, phone: value })
        }
    }
   if (name === "address") {
        if (value.length === 0) {
            setError({ ...error, address: "@address is Required" })
            setUser({ ...user, address: "" })
        } else {
            setError({ ...error, address: "" })
            setUser({ ...user, address: value })
        }
    }

    // if (name === "city") {
    //     if (value.length === 0) {
    //         setError({ ...error, city: "@City is Required" })
    //         setUser({ ...user, city: "" })
    //     } else {
    //         setError({ ...error, city: "" })
    //         setUser({ ...user, city: value })
    //     }
    // }
    if (name === "class") {
        if (value.length === 0) {
            setError({ ...error, class: "@class is Required" })
            setUser({ ...user, class: "" })
        } else {
            setError({ ...error, class: "" })
            setUser({ ...user, class: value })
        }
    }

}

const SubmitInfo=async(e)=>{
  e.preventDefault()
  let ErrorList = validation()
  setError(ErrorList)


 if (Object.keys(ErrorList).length === 0) {
    await addUser(user)
    navigate('/')
    toast.success('Data added successfully');
}
}
//loading
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
      
      <form onSubmit={SubmitInfo} className="container mt-5">
                <h3 className="adduser1"><u>Add User</u></h3>
                <div>
                    {/* <label> Name </label> */}
                    <input type="text" className="form-control" name="name" placeholder="Name" value={user.name} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                </div>
                <div>
                    {/* <label> Email </label> */}
                    <input type="email" className="form-control" name="email" placeholder="Email" value={user.email} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                </div>
                <div>
                    {/* <label> Phone </label> */}
                    <input type="number" className="form-control" name="phone" placeholder="Phone" value={user.phone} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                </div>
                <div>
                    {/* <label> address </label> */}
                    <input type="text" className="form-control" name="address" placeholder="Address" value={user.address} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.address} </span>
                </div>
                {/* <div>
                    <label> City </label>
                    <input type="text" className="form-control" name="city" value={user.city} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span>
                </div> */}
                <div>
                    {/* <label> class </label> */}
                    <input type="text" className="form-control" name="class" placeholder="Class" value={user.class} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.class} </span>
                </div>
             
            

                <div>
                    <button type="submit" className="btn btn-primary px-4 py-2"> Add User </button>
                    <Link className="nav-link" to='/'>
                    <caption> <img src={backarrow} alt="" width="40" height="40"  onClick={()=>navigate(-1)} style={{marginTop:-55,marginLeft:113}}/></caption>
                   </Link>
                
                </div>
                
      </form>
    </>
  )
}

export default AddUserDetails
