import * as projectService from "./services/projectService"
import {Route, Routes, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react"

import Err404 from "./components/partials-components/Err404"
import ProjectDetails from "./components/ProjectDetails"
import Navigation from "./components/Navigation"
import Login from "./components/LoginRegister"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Create from "./components/UploadProject"

import './css/components/LoginRegister.css'
import './css/effects/infinite-glow.css'
import './css/components/Navigation.css'
import './css/components/Projects.css'
import './css/components/Footer.css'
import './css/effects/buttons.css'
import './css/effects/cube.css'
import './css/errors/error.css'
import './css/effects/glow.css'
import './css/style.css'

function App() {
    const [projects, setProjects] = useState([])
    const redirectTo = useNavigate()

    // get from server using projectService and requester
    useEffect(() => {
        projectService.getAll().then(response => {
            setProjects(response)
        })
    }, [])

    const onCreateProjectSubmit = async (data) => {
        const newProject = await projectService.create(data)
        setProjects(state => [...state, newProject])
        redirectTo('/all-projects')
    }

    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="*" element={<Err404/>}/>
                <Route path="/" element={<Projects/>}/>
                <Route path="/upload-project" element={<Create onCreateProjectSubmit={onCreateProjectSubmit}/>}/>
                <Route path="/all-projects" element={<Projects projects={projects}/>}/>
                <Route path="/auth" element={<Login/>}/>
                {/*<Route path="/:projectId" element={<ProjectDetails/>}/>*/}
            </Routes>
            <Footer/>
        </div>)
}

export default App
