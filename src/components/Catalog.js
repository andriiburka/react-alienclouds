import React from "react"
import Project from "./Project";
import NoContent204 from "./partials-components/NoProjects";
import NoProjects from "./partials-components/NoProjects";


function Catalog({catalog}) {


    return (
        <div>
            {catalog && catalog.length > 0 ?
                <div className="projects-area">
                    {catalog.map((project) =>
                        <Project key={project._id} {...project}/>
                    )}
                </div>
                : <NoProjects/>}
        </div>
    )
}

export default Catalog