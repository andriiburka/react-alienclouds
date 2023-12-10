import {Route, RouterProvider, Routes, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react"

// import * as projectService from "./services/projectAPI"

// import ProjectDetails from "./components/catalog/project-details/ProjectDetails"
// import Catalog from "./components/catalog/Catalog"
// import Add from "./components/add/AddProject"

import UserProfile from "./components/auth/user-profile/UserProfile";
import Navigation from "./components/header/Navigation"
import AuthForm from "./components/auth/Auth"
import Footer from "./components/footer/Footer"
import Err404 from "./components/error/Err404"

// CSS
import './components/catalog/Catalog.css'
import './css/effects/glowing-button.css'
import './css/effects/infinite-glow.css'
import './css/effects/background.css'
import './css/buttons.css'
import './css/effects/glow.css'
import './css/style.css'
import './index.css'


function App() {


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
                {/*<Route path="/" element={<Catalog catalog={catalog}/>}/>*/}
                {/*<Route path="/upload-project" element={<Add onAddProjectSubmit={onAddProjectSubmit}/>}/>*/}
                {/*<Route path="/catalog" element={<Catalog catalog={catalog}/>}/>*/}
                {/*<Route path="/catalog/:projectId" element={<ProjectDetails/>}/>*/}
                <Route path="/auth" element={<AuthForm/>}/>
                <Route path="/user-profile" element={<UserProfile/>}/>
            </Routes>

            <Footer/>
        </div>


    )
}

export default App
