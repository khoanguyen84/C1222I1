// bước 1: get data by Id
// bước 2: gán field vào element => làm thủ công
// bước 3: thay đổi dữ liệu
// bước 4: lấy dữ liệu người dùng cập nhật trên form
// bước 5: call API => cập nhật

import React, { useState } from "react";

function TwoWayBinding() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [mobile, setMobile] = useState(null)
    const handleShowInfo = () => {
        // call api => data
        setEmail('khoa.nguyen@gmail.com');
        setPassword('123123');
        setMobile('113');
    }
    const handleLogin = () => {
        let login = {
            email: email,
            password: password,
            mobile: mobile
        }
        // call API
        console.log(login);
    }
    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleInputMobile = (e) => {
        setMobile(e.target.value)
    }
    return (
        <>
            <div>
                <label htmlFor="">Email</label>
                <input type="email"
                    onInput={handleInputEmail}
                    value={email}
                 />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password"
                    onInput={handleInputPassword}
                    value={password}
                />
            </div>
            <div>
                <label htmlFor="">Mobile</label>
                <input type="tel"
                    onInput={handleInputMobile}
                    value={mobile}
                />
            </div>
            <div>
                <button onClick={handleShowInfo}>Show Info</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}
// function TwoWayBinding() {
//     const handleShowInfo = () => {
//         // call API => data
//         document.getElementById('email').value = 'khoa@gmail.com'
//         document.getElementById('password').value = '123456'
//     }

//     const handleLogin = () => {
//         let login = {
//             email: document.getElementById('email').value,
//             password: document.getElementById('password').value
//         }
//         // call API
//         console.log(login);
//     }
//     return (
//         <>
//             <div>
//                 <label htmlFor="">Email</label>
//                 <input type="email" id="email" />
//             </div>
//             <div>
//                 <label htmlFor="">Password</label>
//                 <input type="password" id="password" />
//             </div>
//             <div>
//                 <button onClick={handleShowInfo}>Show Info</button>
//                 <button onClick={handleLogin}>Login</button>
//             </div>
//         </>
//     )
// }
export default TwoWayBinding;