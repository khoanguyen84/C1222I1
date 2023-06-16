import React from "react";
import { Link } from "react-router-dom";

function Narbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/post-list'}>Post List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/play-list'}>Playlist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/student/list'}>Student List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Narbar