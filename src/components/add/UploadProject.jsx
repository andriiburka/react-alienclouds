import React, {useState} from "react";
import './UploadProject.css'
import {Link, NavLink} from "react-router-dom"


function CreateProject({onCreateProjectSubmit}) {
    const [projectData, setProjectData] = useState({
        "title": "Raspberry Pi 4",
        "imageUrl": "https://www.okdo.com/wp-content/uploads/2019/06/Board_02.png",
        "description": "Raspberry Pi (/paɪ/) is a series of small single-board computers (SBCs) developed in the United Kingdom by the Raspberry Pi Foundation in association with Broadcom.[14] The Raspberry Pi project originally leaned towards the promotion of teaching basic computer science in schools.[15][16][17] The original model became more popular than anticipated,[18] selling outside its target market for uses such as robotics. It is widely used in many areas, such as for weather monitoring,[19] because of its low cost, modularity, and open design. It is typically used by computer and electronic hobbyists, due to its adoption of the HDMI and USB standards.\n\nAfter the release of the second board type, the Raspberry Pi Foundation set up a new entity, named Raspberry Pi Trading, and installed Eben Upton as CEO, with the responsibility of developing technology.[20] The Foundation was rededicated as an educational charity for promoting the teaching of basic computer science in schools and developing countries. Most Pis are made in a Sony factory in Pencoed, Wales,[21] while others are made in China and Japan.[22][23]\n\nIn 2015 the Raspberry Pi surpassed the ZX Spectrum in unit sales, becoming the best selling British computer.[24]",
        "_id": "814d2b29-7af7-449a-8e1c-80e0912d249d"
    })

    const onChangeHandler = (e) => {
        setProjectData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onCreateProjectSubmit(projectData)
    }

    const uploadClicked = (e) => {
        e.preventDefault()
        onCreateProjectSubmit(projectData)
    }

    return (<>
            {/*<div className="projects-area ">*/}
            <div className="upload-area">
                <div className="flex-box2">
                    <div className="glow project">
                        {/*<h1 className="project-title">TODO: Dynamic title</h1>*/}
                        <img src="https://www.okdo.com/wp-content/uploads/2019/06/Board_02.png" alt=""/>

                        <div className="catalog-button-container">
                            <div className="glow-purple-button">
                                <NavLink onClick={uploadClicked} className="btn" to="">Add</NavLink>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="flex-box1">
                    <form onSubmit={onSubmit} className="upload-project-form no-copy">
                        <input value={projectData.title} onChange={onChangeHandler}
                               type="text"
                               id="title"
                               name="title"
                               placeholder="Title"/><br/><br/>

                        <input value={projectData.imageUrl} onChange={onChangeHandler}
                               type="text"
                               id="imageUrl"
                               name="imageUrl"
                               placeholder="Image URL"/><br/><br/>

                        <div className="create-project-textarea-container">
                            <textarea
                                id="description"
                                name="description"
                                className="text-area"
                                placeholder="Description"
                                value={projectData.description}
                                onChange={onChangeHandler}
                            />
                        </div>
                    </form>
                </div>



            </div>
        </>
    )
}

export default CreateProject
