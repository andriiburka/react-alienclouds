import {NavLink} from "react-router-dom"
import React, {useState} from "react"

import noImage from '../../images/no-image-2.png'
import './AddProject.css'


function CreateProject({onCreateProjectSubmit}) {
    const [projectData, setProjectData] = useState(
        {
            "title": "Raspberry Pi 4",
            "imageUrl": noImage,
            "description": "Raspberry Pi developed in the United Kingdom by the Raspberry Pi Foundation",
            "_id": "814d2b29-7af7-449a-8e1c-80e0912d249d"
        }
    )

    const onChangeHandler = (e) => {
        setProjectData(oldState => ({
            ...oldState,
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

    return (
        <div className="add-and-details-flexbox">
            <div className="flex-box2">
                <div className="glow project-add-image-preview">
                    <img src={projectData.imageUrl} alt=""/>
                    <div className="catalog-button-container">
                        <div className="glow-purple-button">
                            <NavLink onClick={uploadClicked} className="btn" to="">Add</NavLink>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex-box1">
                <form onSubmit={onSubmit} className="upload-project-form no-copy">
                    <input
                        id="title"
                        onChange={onChangeHandler}
                        defaultValue={projectData.title}
                        type="text"
                        name="title"
                        placeholder="Title"/>
                    <br/>
                    <br/>

                    <input
                        onChange={onChangeHandler}
                        defaultValue={projectData.imageUrl}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Image URL"/>
                    <br/>
                    <br/>

                    <div className="create-project-textarea-container">
                            <textarea
                                id="description"
                                className="text-area"
                                onChange={onChangeHandler}
                                defaultValue={projectData.description}
                                name="description"
                                placeholder="Description"
                            />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProject
