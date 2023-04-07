import noImage from '../images/noImage.png'
import {useState} from "react";
import image from '../images/image.png'


function ProjectsAll() {
    const [projectImage, setProjectImage] = useState('')


    const projects = [1,1,1,1,1,1]

    return (
        <>
            {projects.length > 0 ? (
                <div className="content" style={{userSelect: "none"}}>
                    {projects.map((project) => (

                        <div className="glow project">
                            <h1 className="project-text">PROJECT</h1>
                            <img src={noImage} alt="Image 1"/>
                            <p className="project-text">Description here</p>
                        </div>

                    ))}
                </div>
            ) : (
                <div className="content" style={{userSelect: "none"}}>
                        <div className="glow project">
                            <h1 className="project-text">No projects</h1>
                            {/*<p className="project-text">Description here</p>*/}
                        </div>


                </div>
            )

            }
        </>
    )
}

export default ProjectsAll