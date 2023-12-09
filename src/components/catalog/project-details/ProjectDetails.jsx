import React, {useEffect, useState} from 'react'
import {Link, NavLink, useParams} from "react-router-dom";

import * as projectService from '../../../services/projectAPI'
import './ProjectDetails.css'


function ProjectDetails() {
    const {projectId} = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
        projectService.getOne(projectId)
            .then(result => {
                setProject(result)
            })
    }, [projectId, projectService])


    return (
        <div>

            <div className="project-details">

                <div className="details-flex-box-image">
                    <div className="glow project-add-image-preview">
                        <img src={project.imageUrl} alt=""/>
                    </div>
                </div>

                <div className="details-flex-box-text">

                    <h1>{project.title}</h1>
                    <p>Description: {project.description}</p>


                    <div className="catalog-button-container glow-purple-button">
                            <NavLink className="btn" to="">*Edit</NavLink>
                            <NavLink className="btn" to="">*Delete</NavLink>
                            <NavLink className="btn" to="">*Buy</NavLink>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProjectDetails