import {Link} from "react-router-dom";

function Project({_id, title, imageUrl, description}) {   // from catalog {...x}

    return (
        <div className="glow project">
                <h1 className="project-text">{title}</h1>
                <img src={imageUrl} alt=""/>
                <h2 className="project-text">Description:</h2>
                <div className="project-text">{description}</div>

                <div className="button-container">
                    <div className="auth-buttons-container">
                        <Link to={`/catalog/${_id}`}>DETAILS</Link>
                    </div>
                </div>
        </div>
    )
}

export default Project