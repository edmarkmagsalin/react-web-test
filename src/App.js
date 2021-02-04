import logo from './logo.svg';
import React, { useState, useEffect} from 'react'; 
import './App.css';
import axios from './helper/axios'

// Load toast
import ToastMessage from './helper/toastContainer';
import {toast} from 'react-toastify';

function App() {
     const [usersToDisplay, setUsers] = useState([]);
     
     useEffect(() => {
       displayUsers();
     }, [])

     const displayUsers = () => {
       axios
            .get('users')
            .then(response => {
               // Continue your code...
            })
            .catch(() => toast.error('Failed to fetch users'))
     }

     const getUsers = () => {}
     const addUser = () => {}
     const updateUser = () => {}
     const deleteUser = () => {}

    return (
        <React.Fragment>
          <button onClick={getUsers}>Get All Users</button>
          <ToastMessage />
        </React.Fragment>
    );
}

export default App;
