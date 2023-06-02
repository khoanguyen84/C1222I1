import React from "react";
import Paragraph from './components/Paragraph';
import Avatar from "./components/Avatar/Avatar";
function App() {
    // logic, chưa mã js
    // return jsx
    return (
        <div className="container">
            <h1 className="heading_1">Learning Webpack</h1>
            <Paragraph />
            <Avatar src='https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg' />
            <h2 className="display-3">React JS</h2>
            <p className="fst-italic">Dolor eiusmod Lorem ad sint deserunt quis do voluptate laboris.</p>
            <ul className="list-group">
                <li className="list-group-item text-danger">Item 1
                    <i className="fa fa-home ms-2"></i>
                </li>
                <li className="list-group-item text-warning">Item 2
                    <i className="fa fa-mobile  ms-2"></i>
                </li>
                <li className="list-group-item text-success">Item 3
                    <i className="fa fa-cart-shopping ms-2"></i>
                </li>
            </ul>
        </div>
    )
}

export default App;