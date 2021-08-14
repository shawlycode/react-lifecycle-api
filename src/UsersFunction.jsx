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
            })
            .catch((err) => {
                console.log(err));
    });
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default UsersFunction;
