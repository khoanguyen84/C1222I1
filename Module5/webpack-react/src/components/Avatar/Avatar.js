import React from "react";
import './avatar.css';

function Avatar(props) {
    const { src } = props
    return (
        <img className="avatar" src={src} alt="" />
    )
}
export default Avatar


// Tìm hiểu create-react-app
// có 2 cách
// cách 1: npm = node package managment
// + npm i -g create-react-app
// + create-react-app <project-name>

// cách 2: npx = node package execute
// + npx create-react-app <project-name>