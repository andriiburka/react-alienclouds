import React, {useState} from "react";
import '../css/components/UploadProject.module.css'

function Create() {
    const [projectName, setProjectName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [description, setDescription] = useState('');

    const handleProjectNameChange = (event) => {
        setProjectName(event.target.value);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleImageFileChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handlePdfFileChange = (event) => {
        setPdfFile(event.target.files[0]);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: submit form data to server
    };


    return (
        <div className="auth-box infinite-glow no-copy">


            <form style={{rowGap: "30px"}} onSubmit={handleSubmit}>
                <label htmlFor="projectName">Project name:</label>
                <input id="projectName" type="text" value={projectName} onChange={handleProjectNameChange}/>

                <br/><br/><br/>

                <label htmlFor="image-url">Image URL:</label>
                <input id="image-url" type="text" value={imageUrl} onChange={handleImageUrlChange}/>

                <br/><br/><br/>

                {/*<label htmlFor="image-upload-local">Upload image:</label>*/}
                {/*<input id="image-upload-local" type="file" accept="image/*" onChange={handleImageFileChange}/>*/}

                {/*<br/><br/><br/>*/}

                {/*<label>Upload PDF:</label>*/}
                {/*<input type="file" accept="application/pdf" onChange={handlePdfFileChange}/>*/}

                {/*<br/><br/><br/>*/}

                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={handleDescriptionChange}/>

                <br/><br/><br/>

                <div className="button-container">
                    <button className="glow-purple-button" type="submit">Submit</button>
                </div>

            </form>

        </div>
    )
}

export default Create
