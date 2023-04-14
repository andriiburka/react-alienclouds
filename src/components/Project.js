import image from "../images/image.png";
import {Link} from "react-router-dom";
import React from "react";

function Project() {
    return (
        <div className="glow project">
            <h1 className="project-text">Raspberry Pi 4B+</h1>
            <img src={image} alt="Image 1"/>
            <h2 className="project-text">Description:</h2>
            <div className="project-text">
                Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
                culpa explicabo id ipsum numquam odit provident quam rem sunt.
            </div>
            <div className="button-container">
                <Link to="/project-details" className="button-container">READ MORE</Link>
            </div>
        </div>
    )
}

export default Project