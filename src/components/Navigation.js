import {NavLink} from "react-router-dom"
import {useEffect, useState} from "react"

function Navigation() {
    const [isLogged, setIsLogged] = useState(true)

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    /////////////////////////////    navbar changes it's bg color when scrolling    ///////////////////////
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        {setScrolled(scrollPosition > 0)}
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
                        <NavLink to="/404">404</NavLink>
                    </div>
                    <div className="glow-purple-button">
                        <NavLink to="/upload-project">Upload</NavLink>
                    </div>
                    <div className="glow-purple-button">
                        <NavLink to="/catalog">Projects</NavLink>
                    </div>
                    <div className="glow-purple-button">
                        {isLogged ? <a href="/auth" >Login</a> :
                            <NavLink to="/profile">Profile</NavLink>}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation