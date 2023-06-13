import React from 'react'
import HomePage from './Components/HomePage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddUserDetails from './Components/AddUserDetails'
import UpdateUserPage from './Components/UpdateUserPage'
// import Nav from './Nav'


const CrudRouting = () => {
  return (
    <>
      <Router>
        {/* <Nav/> */}
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add' element={<AddUserDetails/>}/>
            <Route path='/update/:id' element={<UpdateUserPage/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default CrudRouting
