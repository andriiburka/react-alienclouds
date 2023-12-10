import {NavLink, } from "react-router-dom"
import {useEffect, useState} from "react"

import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../../firebase-config"

import '../../components/header/Navigation.css'




function Navigation() {

    const [scrolled, setScrolled] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const logout = async () => {await signOut(auth)}



    /////////////////////////////    navbar changes it's bg color when scrolling    ///////////////////////
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setScrolled(scrollPosition > 0)
    };

    const navbarStyle = {
        backgroundColor: scrolled ? 'rgba(0,0,0,0.90)' : 'transparent',
        position: 'fixed',
        top: 0,
        width: '100%',
        transition: 'background-color 0.5s ease',
    };/////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <header className="no-copy">
            <nav className="navbar" style={navbarStyle}>
                <div><NavLink to="/" className="navbar-logo"/></div>

                <div className="button-container">

                    <div className="glow-purple-button">
                        <NavLink to="/upload-project">Add</NavLink>
                    </div>
                    <div className="glow-purple-button">
                        <NavLink to="/catalog">Projects</NavLink>
                    </div>
                    <div className="glow-purple-button">
                        {user?

                        <div className="button-dropdown">
                            <NavLink to="/user-profile">{user.email}</NavLink>
                            <ul className="dropdown"><br/>
                                <NavLink to="/user-profile" className="dropdown-link">My Profile</NavLink><br/>
                                <NavLink to="/logout" className="dropdown-link">My Projects</NavLink><br/>
                                <NavLink to="" onClick={logout} className="dropdown-link" >Logout</NavLink>
                            </ul>
                        </div>
                        :
                        <NavLink to="/auth">Login</NavLink>
                        }

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation