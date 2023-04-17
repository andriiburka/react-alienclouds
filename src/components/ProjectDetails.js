import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import * as projectService from '../services/projectService'


function ProjectDetails() {

    const {projectId} = useParams()
    console.log(projectId)

    const [project, setProject] = useState({})


    useEffect(() => {
        projectService.getOne(projectId)
            .then(result => {
                setProject(result)
            })
    }, [projectId, projectService])


    return (
        <div className="projects-area">

            <div className="content"
                 style={{
                     border: "whitesmoke 1px solid",
                     width: "70%",
                     textAlign: "center",
                 }}>

                <h1>Title: </h1>
                <h1>Image: </h1>
                <h1>Description: </h1>
            </div>
        </div>
    )
}

export default ProjectDetails