import React, {useState} from "react";
import '../css/components/UploadProject.css'
import {Link, NavLink} from "react-router-dom"
import image from '../images/image.png'

function CreateProject({onCreateProjectSubmit}) {
    const [values, setValues] = useState({
        "title": "Project",
        "imageUrl": "https://www.okdo.com/wp-content/uploads/2019/06/Board_01.png",
        "description": "Some instructables"
    })

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onCreateProjectSubmit(values)
    }

    return (<>
            <div className="upload-area auth-box">
                    <div className="flex-box1">
                        <form onSubmit={onSubmit} className="upload-project-form no-copy ">
                            <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title"
                                   placeholder="Title"/><br/><br/>
                            <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl"
                                   name="imageUrl" placeholder="Image URL"/><br/><br/>
                            <textarea value={values.description} onChange={onChangeHandler} id="description"
                                      name="description" placeholder="Description"/>

                            <div className="auth-buttons-container" >
                                <button style={{bottom: 0, height: "100%"}} type="submit">Upload</button>
                            </div>

                        </form>
                    </div>

                    <div className="flex-box2">
                        <div className="glow project">
                            <h1 className="project-text">Dynamic section: SOON</h1>
                            <img src={image} alt="Image 1"/>
                            <h2 className="project-text">Description:</h2>
                            <div className="project-text">Description here</div>
                            <div className="button-container">
                                <Link to="/project-details" className="glow-purple-button">READ MORE</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default CreateProject
