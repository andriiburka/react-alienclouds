import React from "react";
import {Route, Routes} from "react-router-dom";

import './css/style.css';
import './css/effects/cube.css';
import './css/components/Footer.css';
import './css/components/LoginRegister.css'
import './css/errors/error.css'
import './css/components/Navigation.css'
import './css/components/Projects.css'
import './css/effects/glow.css'
import './css/effects/infinite-glow.css'
import './css/effects/buttons.css'


// import './css/nope/border.css'

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Create from "./components/Create";
import Projects from "./components/Projects";
import Login from "./components/LoginRegister";
import Err404 from "./components/partials-components/Err404";
import ProjectDetails from "./components/ProjectDetails";



function App() {



    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="*" element={<Err404/>}/>
                <Route path="/" element={<Projects/>}/>
                <Route path="/upload-project" element={<Create/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/auth" element={<Login/>}/>
                <Route path="/project-details" element={<ProjectDetails/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
