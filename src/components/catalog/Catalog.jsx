import React from "react"
import {NavLink} from "react-router-dom";


function Catalog({catalog}) {

    const css = {
        border: 'none',
    }

    return (
        <div style={{
            overflow: 'auto'
        }}>
            {catalog && catalog.length > 0 ?
                <div className="projects-area">
                    {catalog.map((project) =>
                        <div className="glow project">
                            <h1 className="project-title">{project.title}</h1>
                            <NavLink to={`/catalog/${project._id}`}>
                                <a href="">
                                    <img src={project.imageUrl} alt=""/>
                                </a>
                            </NavLink>
                            {/*<h3 className="project-text">*/}
                            {/*    Description:*/}
                            {/*</h3>*/}
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>

                            <div className="catalog-button-container glow-purple-button">
                                <NavLink className="btn" to="">Edit</NavLink>
                                <NavLink className="btn" to="">Delete</NavLink>
                                <NavLink className="btn" to={`/catalog/${project._id}`}>Details</NavLink>
                                <NavLink className="btn" to="">*BUY</NavLink>
                            </div>
                        </div>
                    )}
                </div>
                :
                <div className="auth-box infinite-glow" style={css}>
                    <h1 style={{fontSize: "3em", backgroundColor: "transparent", top: "50%"}}>204</h1>
                    <h2 style={{backgroundColor: "transparent"}}>Aliens Ate Your Projects</h2>

                    <div className="auth-buttons-container glow-purple-button">

                        <NavLink className="btn text-center" to="/upload-project">Add New</NavLink>

                    </div>
                </div>
            }
        </div>

    )
}

export default Catalog