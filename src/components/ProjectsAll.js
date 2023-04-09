import React, {useState} from "react";
import rasp from '../images/Raspberry.jpg'
import image from '../images/image.png'


function ProjectsAll() {
    const [projectImage, setProjectImage] = useState('')


    const projects = [1, 1, 1, 1, 1]
    return (
        <>
            {projects.length > 0 ? (
                <div className="content" style={{userSelect: "none"}}>
                    {projects.map((project) => (

                        <div className="glow project">

                            <h1 className="project-text">Raspberry Pi 4B+</h1>

                            <img src={image} alt="Image 1"/>

                            <h2 className="project-text">Description:</h2>

                            <div className="project-text">
                                Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
                                culpa explicabo id ipsum numquam odit provident quam rem sunt.
                            </div>

                            <div className="auth-buttons-container">
                                <button type="submit">BUY</button>
                                <button type="submit">BUY</button>
                                <button type="submit">BUY</button>
                            </div>


                        </div>

                    ))}
                </div>
            ) : (
                <div className="content" style={{userSelect: "none"}}>
                    <div className="glow project">
                        <h1 className="project-text">No projects</h1>
                        <p className="project-text">Description here</p>
                    </div>


                </div>
            )

            }
        </>
    )
}

export default ProjectsAll