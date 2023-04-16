import React from "react"
import NoProjects from "./partials-components/NoProjects"
import {Link, NavLink, useParams} from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import Project from "./Project";


function Catalog({catalog, _id}) {

    const projectId = useParams()

    return (
        <div>
            {catalog && catalog.length > 0 ? <Project catalog={catalog}/>
                : <NoProjects/>}
        </div>
    )
}

export default Catalog
