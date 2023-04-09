import {useState} from "react";

function UploadProject () {
    const [bio, setBio] = useState('')

    const handleBio = (event) => {
        const currentBio = event.target.value
        setBio(currentBio)
    }

    return (
        <div className="content" style={{userSelect: "none"}}>
            <div className="project">
                <h2 style={{color: "whitesmoke"}}>PROJECT TITLE</h2>
                <textarea name="" id="" cols="30" rows="10" value={bio} onChange={handleBio}>
                    <code>Code Here</code>
                </textarea>
            </div>
        </div>
    )
}

export default UploadProject