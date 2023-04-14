import React from "react";
import {Link, NavLink} from "react-router-dom";
import raspberryPi4 from '../../images/image.png'

function NoProjects() {

    const demo1 =
        {
            "title": "Project 3",
            "image": "https://www.tweaking4all.com/wp-content/uploads/2020/06/makerfocus-esp8266-4.jpg",
            "description": "Tweaking4All.com - Getting started with the ESP8266 as an Arduino replacement"
        }

    const demo2 =
        {
            "title": "HAP on Raspberry Pi",
            "image": "https://i.ytimg.com/vi/3RmuXn8eS9s/maxresdefault.jpg",
            "description": "HAP-NodeJS is an implementation of the HomeKit Accessory Server as specified in the HomeKit Accessory Protocol (HAP), which is defined by Apple as part of the HomeKit Framework.\n\nHAP-NodeJS is intended to be used as a library to easily create your own HomeKit Accessory on a Raspberry Pi, Intel Edison, or any other platform that can run Node.js :)\nIf you are searching for a pluggable HomeKit bridge with over a thousand community driven plugins to bring HomeKit support to devices which do not support HomeKit out of the box, you may want to look at the homebridge project (which also uses HAP-NodeJS internally).\n\nThe implementation tries to follow the HAP specification as close as it can, but may differ in some cases. HAP-NodeJS is not an Apple certified HAP implementation, as this is only available to members of the MFi program.",
        }


    return (

        <div>
            <div className="no-projects-area" style={{userSelect: "none"}}>
                <div className="auth-box infinite-glow">
                    <h1 style={{fontSize: "100px", backgroundColor: "transparent"}} className="project">204</h1>
                    <h2 style={{backgroundColor: "transparent"}} >No content</h2>
                    <NavLink to="/upload-project" style={{color: "whitesmoke", textDecoration: "none"}}>
                        <h3>Click here to upload</h3>
                    </NavLink>
                </div>


                {/* STATIC DEMO */}


                {/*<div className="glow project">*/}
                {/*    <h1 className="project-text">Project 3</h1>*/}

                {/*    <h2 className="project-text">Description:</h2>*/}
                {/*    <div className="project-text">Getting started with the ESP8266 as an Arduino replacement</div>*/}
                {/*    <div className="button-container">*/}
                {/*        <Link to="/project-details" className="button-container">READ MORE</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="glow project">*/}
                {/*    <h1 className="project-text">Project 3</h1>*/}
                {/*    <img src={raspberryPi4} alt="Image 1"/>*/}
                {/*    <h2 className="project-text">Description:</h2>*/}
                {/*    <div className="project-text">Getting started with the ESP8266 as an Arduino replacement</div>*/}
                {/*    <div className="button-container">*/}
                {/*        <Link to="/project-details" className="button-container">READ MORE</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="glow project">*/}
                {/*    <h1 className="project-text">Project 3</h1>*/}
                {/*    <img src={raspberryPi4} alt="Image 1"/>*/}
                {/*    <h2 className="project-text">Description:</h2>*/}
                {/*    <div className="project-text">Getting started with the ESP8266 as an Arduino replacement</div>*/}
                {/*    <div className="button-container">*/}
                {/*        <Link to="/project-details" className="button-container">READ MORE</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="glow project">*/}
                {/*    <h1 className="project-text">Project 3</h1>*/}
                {/*    <img src={raspberryPi4} alt="Image 1"/>*/}
                {/*    <h2 className="project-text">Description:</h2>*/}
                {/*    <div className="project-text">Getting started with the ESP8266 as an Arduino replacement</div>*/}
                {/*    <div className="button-container">*/}
                {/*        <Link to="/project-details" className="button-container">READ MORE</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="glow project">*/}
                {/*    <h1 className="project-text">Project 3</h1>*/}
                {/*    <img src={raspberryPi4} alt="Image 1"/>*/}
                {/*    <h2 className="project-text">Description:</h2>*/}
                {/*    <div className="project-text">Getting started with the ESP8266 as an Arduino replacement</div>*/}
                {/*    <div className="button-container">*/}
                {/*        <Link to="/project-details" className="button-container">READ MORE</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

        </div>


    )
}


export default NoProjects