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
                    <h1 style={{fontSize: "3em", backgroundColor: "transparent", top: "50%"}}>404</h1>
                    <h2 style={{backgroundColor: "transparent"}}>Page not found</h2>
                </div>


                // <div className="login-container">
                //     <h1 style={{fontSize: "40px", backgroundColor: "transparent", top: "50%"}}
                //         className="projects-area">No projects</h1>
                //     <h2 style={{backgroundColor: "transparent"}}></h2>
                //
                //     <div className="login-container auth-buttons-container">
                //         <div className="glow-purple-button">
                //             <NavLink className="btn" to="/upload-project">Upload</NavLink>
                //         </div>
                //     </div>
                // </div>
            }
        </div>
    )
}

export default Catalog