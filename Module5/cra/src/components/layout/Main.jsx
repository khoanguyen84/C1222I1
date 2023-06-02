import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Main() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4">
                    <LeftSide/>
                </div>
                <div className="col-sm-8">
                    <RightSide/>
                </div>
            </div>
        </div>
    )
}

export default Main;