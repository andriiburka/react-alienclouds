import React, {useState} from "react";
import image from '../images/image.png'
import {Link} from "react-router-dom";
import NoProjects from "./partials-components/NoProjects";
import Project from "./Project";


function ProjectsAll() {

    const [projectImage, setProjectImage] = useState('')
    const projects = [1, 1, 1, 1, 1]

    return (
        <div>
            {projects.length > 0 ? (
                <div className="content">
                    {projects.map((project) => <Project />)}
                </div>) : (<NoProjects />)}
        </div>
    )
}

export default ProjectsAll
