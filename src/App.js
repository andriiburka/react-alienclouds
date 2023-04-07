import React, {useState} from "react";

import './css/style.css';
import './css/cube.css';
import './css/footer.css';
import './css/login-register-form.css'
import './css/error.css'
import './css/nav.css'
import './css/projects.css'
import './css/glow.css'

import Navigation from "./components/Navigation";
import UploadProject from "./components/UploadProject";
import ProjectsAll from "./components/ProjectsAll";
import Login from "./components/LoginRegister";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";



function App() {
    const [currentForm, setCurrentForm] = useState('Login')
    const [showUpload, setShowUpload] = useState(false)
    const [showProjects, setShowProjects] = useState(true)
    const [showAuth, setShowAuth] = useState(false)


    const handleUploadProject = () => {
        setShowUpload(true)
        setShowProjects(false)
        setShowAuth(false)
    }

    const handleAuth = () => {
        setShowUpload(false)
        setShowProjects(false)
        setShowAuth(true)
    }

    const handleProjects = () => {
        setShowUpload(false)
        setShowProjects(true)
        setShowAuth(false)
    }


    return (
        <div className="App">
            <Navigation onUploadClick={handleUploadProject} onAuthClick={handleAuth} onProjectClick={handleProjects}/>
            {showUpload && <UploadProject/>}
            {showProjects && <ProjectsAll/>}
            {showAuth && <Login/>}
            <Footer/>
            <ProjectDetails/>

        </div>
    );
}

export default App;
