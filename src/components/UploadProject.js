import React, {useState} from "react";
import '../css/components/UploadProject.css'
import {Link, NavLink} from "react-router-dom"
import image from '../images/image.png'

function CreateProject({onCreateProjectSubmit}) {
    const [values, setValues] = useState({
        "title": "Project",
        "imageUrl": "https://www.okdo.com/wp-content/uploads/2019/06/Board_02.png",
        "description": "Some instructions"
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
                                <button type="submit">Upload</button>
                            </div>

                        </form>
                    </div>

                    <div className="flex-box2">
                        <div className="glow project">

                            <h1 className="project-title">TODO: Dynamic title</h1>

                            <img src={image} alt=""/>

                            <h3 className="project-text">
                                Description:
                            </h3>


                            <div className="project-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam possimus quas soluta tenetur. Dolore neque non numquam pariatur placeat quas quis! Adipisci deserunt est modi non omnis quisquam sequi tempora.</p>
                            </div>


                            {/*<div className="catalog-button-container">*/}
                            {/*    <div className="glow-purple-button">*/}
                            {/*        <NavLink className="btn" to="">Edit</NavLink>*/}
                            {/*    </div>*/}
                            {/*    <div className="glow-purple-button">*/}
                            {/*        <NavLink className="btn" to="">Delete</NavLink>*/}
                            {/*    </div>*/}
                            {/*    <div className="glow-purple-button">*/}
                            {/*        <NavLink className="btn" to={``}>Details</NavLink>*/}
                            {/*    </div>*/}
                            {/*</div>*/}





                        </div>





                    </div>


            </div>
        </>
    )
}

export default CreateProject
