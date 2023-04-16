import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import * as projectService from '../services/projectService'


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
        <div className="project">
            <h1>Title: </h1>
            <h1>Image: </h1>
        </div>
    )
}

export default ProjectDetails