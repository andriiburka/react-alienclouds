import {Route, RouterProvider, Routes, useNavigate} from "react-router-dom"
import * as projectService from "./services/projectAPI"
import React, {useEffect, useState} from "react"

import ProjectDetails from "./components/catalog/project-details/ProjectDetails"
import Navigation from "./components/header/Navigation"
import Login from "./components/auth/Auth"
import Catalog from "./components/catalog/Catalog"
import Create from "./components/add/AddProject"
import Footer from "./components/footer/Footer"
import Err404 from "./components/error/Err404"

// CSS

import './components/header/Navigation.css'
import './components/catalog/Catalog.css'
import './css/effects/glowing-button.css'
import './css/effects/infinite-glow.css'
import './css/effects/background.css'
import './css/effects/buttons.css'
import './css/effects/glow.css'
import './css/style.css'
import './index.css'


function App() {
    const [catalog, setCatalog] = useState([])

    const redirectTo = useNavigate()


    // using projectService and requester
    useEffect(() => {
        projectService.getAll()
            .then(projects => {
                setCatalog(projects)
            })
    }, [])


    const onAddProjectSubmit = async (data) => {
        const newProject = await projectService.create(data)
        setCatalog(oldProjects => [...oldProjects, newProject])
        redirectTo('/catalog')
    }


    return (
        <div className="App">
            <div style={{
                // display: 'none',
            }}>

                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>

            <Navigation/>

            <Routes>
                <Route path="*" element={<Err404/>}/>
                <Route path="/" element={<Catalog catalog={catalog}/>}/>
                <Route path="/upload-project" element={<Create onAddProjectSubmit={onAddProjectSubmit}/>}/>
                <Route path="/catalog" element={<Catalog catalog={catalog}/>}/>
                <Route path="/catalog/:projectId" element={<ProjectDetails/>}/>
                <Route path="/auth" element={<Login/>}/>
            </Routes>

            <Footer/>
        </div>


    )
}

export default App
