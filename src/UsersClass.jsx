import React, { Component } from 'react';

class UsersClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
                console.log("users:", users);
                this.setState({ users: users })
            })
            .catch((err) => console.log(err))

    }
    render() {
        return (
            <div>
                <h1>users Class Component</h1>
                <hr />
                <div>
                   {this.state.users.map(user =>
                   <div>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <hr />
                    </div>)}
                </div>
            </div>
        );

    }
}


export default UsersClass;

