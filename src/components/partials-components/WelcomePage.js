import React from "react"
import NoProjects from "./NoProjects"
import {Link, NavLink, useParams} from "react-router-dom";
import Project from "../Project";

function Err404({catalog}) {
    return (
        <>
            <div className="xxx">
                {/*<div><h1>WHERE AM I ?</h1></div>*/}
                <div className="content">
                    {catalog && catalog.length > 0 ? <Project catalog={catalog}/>
                        : <NoProjects/>}
                </div>
            </div>
        </>
    )
}


export default Err404