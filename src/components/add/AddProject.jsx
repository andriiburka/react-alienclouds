import {NavLink} from "react-router-dom"
import React, {useEffect, useState} from "react"

import noImage from '../../images/no-image.png'
import './AddProject.css'



function AddProject({onAddProjectSubmit}) {

    const [projectData, setProjectData] = useState(
        {
            "title": "Raspberry Pi 4",
            "imageUrl": 'https://www.okdo.com/wp-content/uploads/2019/06/Board_01.png',
            "description": "Raspberry Pi developed in the United Kingdom by the Raspberry Pi Foundation",
            "_id": "814d2b29-7af7-449a-8e1c-80e0912d249d"
        }
    )
    const [imageSrc, setImageSrc] = useState(noImage)

    useEffect(() => {
        const checkImageValidity = () => {
            const img = new Image()
            img.onload = () => setImageSrc(projectData.imageUrl)
            img.onerror = () => setImageSrc(noImage)
            img.src = projectData.imageUrl
        };

        if (projectData.imageUrl.length > 0) {
            checkImageValidity()
        }
    }, [projectData.imageUrl])

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setProjectData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAddProjectSubmit(projectData)
    }
    const uploadClicked = (e) => {
        e.preventDefault()
        onAddProjectSubmit(projectData)
    }


    return (
        <div className="add-and-details-flexbox">

            <div className="add-flex-box-image">
                <div className="glow project-add-image-preview">
                    <img src={projectData.imageUrl}/>
                </div>
            </div>


            <div className="add-flex-box-text"  style={{
                overflow: 'hidden'
            }}>
                    <form onSubmit={onSubmit} className="add-project-form no-copy">

                        <input
                            id="title"
                            onChange={handleInputChange}
                            defaultValue={projectData.title}
                            type="text"
                            name="title"
                            placeholder="Title"/>

                        <input
                            onChange={handleInputChange}
                            defaultValue={projectData.imageUrl}
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Image URL"/>


                        <div className="create-project-textarea-container">
                            <textarea
                                id="description"
                                className="text-area"
                                onChange={handleInputChange}
                                defaultValue={projectData.description}
                                name="description"
                                placeholder="Description"
                            />
                        </div>

                        <div className="catalog-button-container glow-purple-button">
                                <NavLink className="btn" to="">*IMG</NavLink>
                                <NavLink className="btn" to="">*PDF</NavLink>
                                <NavLink onClick={uploadClicked} className="btn" to="">Apply</NavLink>
                        </div>

                    </form>





            </div>
        </div>
    )
}

export default AddProject
