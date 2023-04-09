import React, {useState} from "react";

import './css/style.css';
import './css/cube.css';
import './css/footer.css';
import './css/login-register-form.css'
import './css/error.css'
import './css/Navigation.css'
import './css/ProjectsAll.css'
import './css/glow.css'
import './css/search.css'
import './js/search'
// import './css/border.css'

import Navigation from "./components/Navigation";
import UploadProject from "./components/UploadProject";
import ProjectsAll from "./components/ProjectsAll";
import Login from "./components/LoginRegister";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";


function App() {
    const [showUpload, setShowUpload] = useState(false)
    const [showProjects, setShowProjects] = useState(true)
    const [showLoginRegisterForm, setShowLoginRegisterForm] = useState(false)

    const handleUploadProject = () => {
        setShowUpload(true)
        setShowProjects(false)
        setShowLoginRegisterForm(false)
    }

    const handleAuth = () => {
        setShowUpload(false)
        setShowProjects(false)
        setShowLoginRegisterForm(true)
    }

    const handleProjects = () => {
        setShowUpload(false)
        setShowProjects(true)
        setShowLoginRegisterForm(false)
    }


    return (
        <div className="App">
            <Navigation onUploadClick={handleUploadProject} onAuthClick={handleAuth} onProjectClick={handleProjects}/>
            {showUpload && <UploadProject/>}
            {showProjects && <ProjectsAll/>}
            {showLoginRegisterForm && <Login/>}
            <Footer/>
        </div>
    );
}

export default App;
