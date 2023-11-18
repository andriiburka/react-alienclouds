import {NavLink} from "react-router-dom";
import React from "react";

function Err404() {
    return (
        <div className="auth-box infinite-glow" style={{border: "none"}}>
            <h1 style={{fontSize: "3em", backgroundColor: "transparent", top: "50%"}}>404</h1>
            <h2 style={{backgroundColor: "transparent"}}>Aliens doesn't exist</h2>
            <div className="auth-buttons-container">
                <div className="glow-purple-button">
                    <NavLink className="btn text-center" to="/">HOME</NavLink>
                </div>
            </div>
        </div>
    )
}


export default Err404