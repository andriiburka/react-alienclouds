import {auth} from "../../../firebase-config";
import {NavLink} from "react-router-dom";
import React from "react";

function UserProfile() {
    return (
        <>

            <div className="auth-box infinite-glow" >
                <h1 style={{fontSize: "3em", backgroundColor: "transparent", top: "50%"}}>Hello, {auth.currentUser.email}</h1>
                <h2 style={{backgroundColor: "transparent"}}>
                    Nothing here, yet
                </h2>

                <div className="auth-buttons-container glow-purple-button">

                    <NavLink className="btn text-center" to="/upload-project">Add New</NavLink>

                </div>
            </div>

        </>
    )
}

export default UserProfile