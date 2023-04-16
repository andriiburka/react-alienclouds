import * as projectService from "./services/projectService"
import {Route, Routes, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react"

import Err404 from "./components/partials-components/Err404"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import Create from "./components/UploadProject"
import Catalog from "./components/Catalog"
import ProjectDetails from "./components/ProjectDetails"
import Login from "./components/LoginRegister"

import './css/components/LoginRegister.css'
import './css/effects/infinite-glow.css'
import './css/components/Navigation.css'
import './css/components/Catalog.css'
import './css/components/Footer.css'
import './css/effects/buttons.css'
import './css/effects/cube.css'
import './css/errors/error.css'
import './css/effects/glow.css'
import './css/style.css'
import './css/effects/glowing-button.css'
import WelcomePage from "./components/partials-components/WelcomePage"



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

        redirectTo('/catalog')
    }



    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="*" element={<Err404/>}/>
                <Route path="/" element={ <WelcomePage catalog={projects}/>  }/>
                <Route path="/upload-project" element={<Create onCreateProjectSubmit={onCreateProjectSubmit}/>}/>
                <Route path="/catalog" element={<Catalog catalog={projects}/>}/>
                <Route path="/catalog/:projectId" element={<ProjectDetails/>}/>
                <Route path="/auth" element={<Login/>}/>
            </Routes>
            <Footer/>
        </div>)
}



export default App
