import * as projectService from "./services/projectAPI"
import {Route, Routes, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react"

import {AuthProvider} from './contexts/AuthContext'
import {NotificationProvider} from './contexts/NotificationContext'
import Notification from './components/partials-components/Notification/Notification';
import ErrorBoundary from './components/partials-components/ErrorBoundary';


import Err404 from "./components/partials-components/Err404"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import Create from "./components/add/UploadProject"
import Catalog from "./components/catalog/Catalog"
import ProjectDetails from "./components/catalog/project-shown-in-catalog/project-details/ProjectDetails"
import Login from "./components/auth/LoginRegister"


import './components/auth/LoginRegister.css'
import './css/effects/infinite-glow.css'
import './components/Navigation.css'
import './components/catalog/Catalog.css'
import './components/Footer.css'
import './css/effects/buttons.css'
import './css/effects/cube.css'
import './css/errors/error.css'
import './css/effects/glow.css'
import './css/style.css'
import './css/effects/glowing-button.css'
import './css/effects/background.css'
import './index.css';


function App() {
    const [catalog, setCatalog] = useState([])
    const [users, setUsers] = useState({})



    const redirectTo = useNavigate()


    // get from server using projectService and requester
    useEffect(() => {
        projectService.getAll()
            .then(projects => {
                setCatalog(projects)
            })
    }, [])



    const onCreateProjectSubmit = async (data) => {
        const newProject = await projectService.create(data)
        setCatalog(oldProjects => [...oldProjects, newProject])

        redirectTo('/catalog')
    }


    return (
        <ErrorBoundary>
            <AuthProvider>
                <NotificationProvider>
                    <div className="App">
                        <div
                            style={{display: 'none'}}
                        >
                            <div id='stars'></div>
                            <div id='stars2'></div>
                            <div id='stars3'></div>
                        </div>

                        <Navigation/>

                        <Notification />

                        <Routes>
                            <Route path="*" element={<Err404/>}/>
                            <Route path="/" element={<Catalog catalog={catalog}/>}/>
                            <Route path="/upload-project"
                                   element={<Create onCreateProjectSubmit={onCreateProjectSubmit}/>}/>


                            <Route path="/catalog" element={<Catalog catalog={catalog}/>}/>

                            <Route path="/catalog/:projectId" element={<ProjectDetails/>}/>
                            <Route path="/auth" element={<Login/>}/>
                        </Routes>

                        <Footer/>
                    </div>
                </NotificationProvider>
            </AuthProvider>
        </ErrorBoundary>
    )
}


export default App
