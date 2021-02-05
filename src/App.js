import logo from './logo.svg';
import React, { useState, useEffect} from 'react'; 
import './App.css';
import axios from './helper/axios'

// Load toast
import ToastMessage from './helper/toastContainer';
import {toast} from 'react-toastify';

function App() {
    const [usersToDisplay, setUsers] = useState([]);
    const [currentlyEditing, setCurrentlyEditing] = useState({
        id: null,
        first_name: '',
        job: ''
    });
    const [currentlyAdding, setCurrentlyAdding] = useState({
        first_name: '',
        job: ''
    });
     
    useEffect(() => {
        displayUsers();
    }, [])

    const displayUsers = () => {
        axios
            .get('users')
            .then(response => {
                console.log('displayUsers', response.data)
                setUsers(response.data)
                toast.success('Success fetching users')
            })
            .catch(() => toast.error('Failed to fetch users'))
    }

    const getUsers = () => {
        displayUsers();
    }

    const addUser = () => {
        axios
            .post('users', currentlyAdding)
            .then(response => {
                console.log('addUser', response);
                toast.success('Success adding user')
            })
            .catch(() => toast.error('Failed to add user'))

        setCurrentlyEditing({
            first_name: '',
            job: ''
        })
    }

    const updateUser = () => {
        axios
            .put(`users/${currentlyEditing.id}`, {
                first_name: currentlyEditing.first_name,
                job: currentlyEditing.job
            })
            .then(response => {
                console.log('updateUser', response);
                toast.success('Success updating user')
            })
            .catch(() => toast.error('Failed to update user'))

        setCurrentlyEditing({
            id: null,
            first_name: '',
            job: ''
        })
    }

    const deleteUser = (id) => {
        axios
            .delete(`users/${id}`)
            .then(response => {
                console.log('deleteUser', response);
                toast.success('Success deleting user')
            })
            .catch(() => toast.error('Failed to delete user'))
    }

    const editUser = (id) => {
        setCurrentlyEditing({...currentlyEditing, id: id})
    }

    const onEdit = (e) => {
        setCurrentlyEditing({...currentlyEditing, [e.target.name]: e.target.value})
    }

    const onAdd = (e) => {
        setCurrentlyAdding({...currentlyAdding, [e.target.name]: e.target.value})
    }

    return (
        <React.Fragment>
            <button onClick={getUsers}>Get All Users</button>
            <br />
            <br />
            <ToastMessage />
            <table>
                <tbody>
                    { usersToDisplay?.data?.map(user => {
                        return <tr key={user.id}>
                            <td width='80'>
                                <br />
                                { currentlyEditing.id === user.id ? (
                                    <>
                                        <input type="text" name='first_name' placeholder='first_name' value={user.first_name} onChange={(e) => onEdit(e)} />&nbsp;
                                        <input type="text" name='job' placeholder='job' value={user.job} onChange={(e) => onEdit(e)} />
                                    </>
                                    ) : (
                                        <>
                                            <img src={user.avatar} alt="" width='50' />
                                            <br />
                                            {user.first_name}
                                        </>
                                    )
                                }
                                <br />
                            </td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>🗑</button>
                            </td>
                            <td>
                                { currentlyEditing.id === user.id ? (
                                    <button onClick={() => updateUser(user.id)}>💾</button>
                                    ) : (
                                    <button onClick={() => editUser(user.id)}>✏️</button>
                                    )
                                }
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <br />
            <br />
            <hr/>
            <input type="text" name='first_name' placeholder='first_name' onChange={(e) => onAdd(e)} />
            <br />
            <input type="text" name='job' placeholder='job' onChange={(e) => onAdd(e)} />
            <br /><br />
            <button onClick={addUser}>💾 Add user</button>

        </React.Fragment>
    );
}

export default App;
