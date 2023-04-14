import React, {useState} from "react";
import image from '../../images/image.png'
import {Link} from "react-router-dom";
import NoProjects from "../partials-components/NoProjects";
import ProjectItem from "./ProjectItem";


function Projects({projects}) {
    return (
        <div>
            {projects.length > 0 ?
                <div className="content">
                    {projects.map((x) => <ProjectItem key={x._id} project={x}/>)}
                </div>
            :<NoProjects/>}
        </div>
    )
}

export default Projects
