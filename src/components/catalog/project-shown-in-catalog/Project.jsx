import {NavLink} from "react-router-dom";

function Project({_id, title, imageUrl, description}) {   // from catalog {...x}

    return (
        <div className="glow project">

            <h1 className="project-title">{title}</h1>

            <img src={imageUrl} alt=""/>

            <h3 className="project-text">
                Description:
            </h3>


            <div className="project-description">
                <p>{description}</p>
            </div>


            <div className="catalog-button-container">
                <div className="glow-purple-button">
                    <NavLink className="btn" to="">Edit</NavLink>
                </div>
                <div className="glow-purple-button">
                    <NavLink className="btn" to="">Delete</NavLink>
                </div>
                <div className="glow-purple-button">
                    <NavLink className="btn" to={`/catalog/${_id}`}>Details</NavLink>
                </div>
            </div>





        </div>
    )
}

export default Project