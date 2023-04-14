import {Link} from "react-router-dom";
import React from "react";

function ProjectItem({
    project
                     }) {
    return (
        <div className="glow project">

            <h1 className="project-text">{project.title}</h1>

            <img src={project.image} alt="Image 1"/>

            <h2 className="project-text">Description:</h2>
            <div className="project-text">{project.description}</div>

            <div className="button-container">
                <Link to="/project-details" className="button-container">READ MORE</Link>
            </div>
        </div>
    )
}

export default ProjectItem