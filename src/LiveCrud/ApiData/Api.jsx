import axios from 'axios';

const API_URL = 'https://restfullapinodejs1.onrender.com/api/allstudent'
const API_URL2 = 'https://restfullapinodejs1.onrender.com/api/student'
const API_URL3 = 'https://restfullapinodejs1.onrender.com/api/edit'
const API_URL4 = 'https://restfullapinodejs1.onrender.com/api/update'
const API_URL5 = 'https://restfullapinodejs1.onrender.com/api/delete'
 
// get data
export const getAllUsers = async () => {
   try {
       return await axios.get(API_URL)
   }
   catch (error) {
       console.log('Error while calling getUsers API', error.message)
   }
}

// add user
export const addUser = async (data) => {
    try {
        return await axios.post(API_URL2, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}
//edit update user
export const getEditData = async (data) => {
    try {
        return await axios.get(`${API_URL3}/${data}`)
    }
    catch (error) {
        console.log('Error while calling getUser API', error.message)
    }
}
//update data
export const UpdateUserData = async (data, id) => {
    try {
        return await axios.post(`${API_URL4}/${id}`, data)
    }
    catch (error) {
        console.log('Error while calling editUser API', error.message)
    }
}
//delete pai
export const deleteUser = async id => {
    try {
        return await axios.delete(`${API_URL5}/${id}`)
    }
    catch (error) {
        console.log('Error while calling deleteUser API', error.message)
    }
}