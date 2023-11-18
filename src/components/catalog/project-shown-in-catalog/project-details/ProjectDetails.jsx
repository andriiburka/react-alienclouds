import React, {useEffect, useState} from 'react'
import {Link, NavLink, useParams} from "react-router-dom";

import * as projectService from '../../../../services/projectAPI'


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
            <div className="add-and-details-flexbox">
                <div className="flex-box2">
                    <div className="glow project-add-image-preview">
                        <img src={project.imageUrl} alt=""/>
                                <div className="catalog-button-container glow-purple-button">
                                    <Link className="btn" to={``}>Edit</Link>
                                    <Link className="btn" to={``}>Delete</Link>
                                </div>
                    </div>
                </div>

                <div className="flex-box1" style={{background: "rgba(200,200,300, .1)", textAlign: "center"}}>
                    <h1>{project.title}</h1>
                    <p style={{textAlign: "justify", padding: "0 20px 20px 20px",}}>Description: {project.description}</p>
                </div>
            </div>
    )
}

export default ProjectDetails