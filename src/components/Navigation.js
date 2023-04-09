import logo from '../images/logo.png'

function Navigation({
                        onAuthClick,
                        onProjectClick,
                        onUploadClick
                    }) {
    // const [error, setError] = useState(['Error: Static Default']);

    // function handleRegister() {
    //     // handle registration logic here
    //     // if an error occurs, add it to the errors array
    //     setError(['Username already taken', 'Passwords do not match']);
    // }


    return (
        <header style={{userSelect: "none"}}>
            <div className="sticky-menu" data-uk-sticky="{top:-200, animation: 'uk-animation-slide-top'}">

                <nav className="navbar">
                    <div>
                        <img src={logo} alt="AlienClouds Logo"/>
                    </div>


                    <div className="nav-buttons-box">
                        <div className="navbar-buttons">

                            <a onClick={onUploadClick}>Upload</a>
                            <a onClick={onProjectClick}>Projects</a>
                            <a onClick={onAuthClick}>Login</a>
                        </div>
                    </div>


                </nav>

                <div className="error-container">
                    {/*{error.length > 0 && <Error errors={error}/>}*/}
                </div>
            </div>

        </header>


)
}

export default Navigation