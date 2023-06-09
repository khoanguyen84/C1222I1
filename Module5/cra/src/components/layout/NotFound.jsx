import React from "react";
import { Link } from 'react-router-dom';

function NotFound(){
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-2 text-danger fw-bolder">404 Not Found</h1>
            <Link to={'/'} className="btn btn-success">
                <i className="fa fa-arrow-left me-2"></i>
                Back to home
            </Link>
        </div>
    )
}

export default NotFound;