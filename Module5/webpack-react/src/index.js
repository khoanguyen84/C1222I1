import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// có 2 cách để tạo ra 1 component
// cách 1: class component
// cách 2: function component

// naming conversion
// tên component naming conversion là PascalCase
// hooks

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Learning Webpack</h1>
//                 <h2>React JS</h2>
//                 <p>Dolor eiusmod Lorem ad sint deserunt quis do voluptate laboris.</p>
//                 <ul>
//                     <li>Item 1</li>
//                     <li>Item 2</li>
//                     <li>Item 3</li>
//                     <li>Item 4</li>
//                 </ul>
//             </div>
//         )
//     }
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)