import React from "react";
import {NavLink} from "react-router-dom";


function NoProjects() {
    return (
        <div className="auth-box infinite-glow">
            <h1 style={{fontSize: "40px", backgroundColor: "transparent", top: "50%"}}
                className="projects-area">No projects</h1>
            <h2 style={{backgroundColor: "transparent"}}></h2>

            <div className="auth-buttons-container">
                <div className="glow-purple-button">
                    <NavLink className="btn" to="/upload-project">Upload</NavLink>
                </div>
            </div>
        </div>
    )
}


export default NoProjects
