import React, {Component} from "React";

import User from "./User.jsx";

const users = require("../../../../data/users.json");

class Users extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="page-title">Users</h2>
                {users.map((item) => {
                    return <User attr={item} key={`user--${item.id}`}/>
                })}
            </div>
        )
    }
}

export default Users;