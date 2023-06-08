import React, { useState, useEffect } from "react";

function Contact() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "GET"
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setUsers(data)
        })

        // cleanup function
        return () => {
            console.log('unmouted');
        }
    }, [name, email])


    return (
        <div className="container">
            <h3 className="display-5">Contact List</h3>
            <input type="text" onInput={(e) => setName(e.target.value)} /> <br />
            <input type="text" onInput={(e) => setEmail(e.target.value)} /> <br />
            <div className="row">
                {
                    users.map((user) => (
                        <div className="col-sm-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fa fa-person me-2"></i>{user.name}</h5>
                                    <p className="card-text"><i className="fa fa-user me-2"></i>{user.username}</p>
                                    <p className="card-text"><i className="fa fa-at me-2"></i>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Contact;