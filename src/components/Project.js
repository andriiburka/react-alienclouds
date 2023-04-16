import {Link} from "react-router-dom";

function Project({catalog}) {
    return (
        <div className="projects-area">
            {catalog.map((project) =>
                <div key={project._id} className="glow project">
                    <h1 className="project-text">{project.title}</h1>
                    <img src={project.imageUrl} alt="Image 1"/>
                    <h2 className="project-text">Description:</h2>
                    <div className="project-text">{project.description}</div>

                    <div className="button-container">
                        <div className="auth-buttons-container">
                            <Link to={`/catalog/project-details`}>DETAILS</Link>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Project