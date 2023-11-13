import React from "react"
import Project from "./Project";
import {NavLink} from "react-router-dom";


function Catalog({catalog}) {


    return (
        <div>
            {catalog && catalog.length > 0 ?
                <div className="projects-area">
                    {catalog.map((project) =>
                        <Project key={project._id} {...project}/>
                    )}
                </div>
                :
                <div className="auth-box infinite-glow" style={{border: "none"}}>
                    <h1 style={{fontSize: "3em", backgroundColor: "transparent", top: "50%"}}>204</h1>
                    <h2 style={{backgroundColor: "transparent"}}>Aliens Ate Your Projects</h2>
                    <div className="auth-buttons-container">
                        <div className="glow-purple-button">
                            <NavLink className="btn text-center" to="/upload-project">Add New</NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Catalog