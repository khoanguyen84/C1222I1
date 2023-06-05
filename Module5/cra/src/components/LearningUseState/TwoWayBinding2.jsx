import React, { useState } from "react";

function TwoWayBinding2() {
    
    const [state, setState] = useState({
        email: '',
        password: '',
        mobile: '',
        fullname: ''
    })
    const handleShowInfo = () => {
        // call api => data
        setState({
            email: 'khoa.nguyen@gmail.com',
            password: '123123',
            mobile: '113',
            fullname: "khoa nguyễn"
        })
    }
    const handleLogin = () => {
        // call API
        console.log(state);
    }
    
    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    console.log(state);
    const { email, password, mobile, fullname } = state;
    return (
        <>
            <div>
                <label htmlFor="">Email</label>
                <input type="email"
                    name="email"
                    onInput={handleInputValue}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password"
                    name="password"
                    onInput={handleInputValue}
                    value={password}
                />
            </div>
            <div>
                <label htmlFor="">Mobile</label>
                <input type="tel"
                    name="mobile"
                    onInput={handleInputValue}
                    value={mobile}
                />
            </div>
            <div>
                <label htmlFor="">Fullname</label>
                <input type="text"
                    name="fullname"
                    onInput={handleInputValue}
                    value={fullname}
                />
            </div>
            <div>
                <button onClick={handleShowInfo}>Show Info</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}
export default TwoWayBinding2;