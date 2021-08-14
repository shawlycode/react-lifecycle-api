import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersFunction = () => {
    let myUsers = [];
    const [users, setUsers] = useState(myUsers);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res);
                setUsers(res.data)
            })
            .catch((err)=>console.log(err));
            
    },[]);
    return (
        <>
            <h1>Users Functional Component</h1>
            <hr />
            <div > 
            {users.map((users)=>
            <div> 
                <p>Name: {users.name}</p>
                <p>Username: {users.username}</p>
                <p> Email: {users.email}</p>
                <hr />
            </div>
            )}
            </div>
            
        </>
    );
};

export default UsersFunction;
