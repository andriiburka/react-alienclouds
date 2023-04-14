import React from "react"
import NoProjects from "./partials-components/NoProjects"
import Project from "./Project"


function Projects({projects}) {
    console.log(projects)
    return (
        <div>
            {projects && projects.length > 0 ?

                <div className="projects-area">
                    {projects.map((x) => <Project key={x._id} project={x}/>)}
                </div>
                : <NoProjects/>}
        </div>
    )
}

export default Projects
