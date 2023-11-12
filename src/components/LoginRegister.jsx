import React, {useRef, useState} from 'react'
import FormField3D from "./partials-components/FormField3D"

function LoginRegisterForm() {
    const [currentForm, setCurrentForm] = useState('Login')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`user: ${username} \npassword: ${password}`);
    }

    return (
        <div className="auth-box">

            <h2>{currentForm === 'Login' ? 'Login' : 'Register'}</h2>
            {currentForm === 'Login' ? (<div>

                    <form onSubmit={handleSubmit} method="GET" className="form">
                        <div className='control block-cube block-input'>
                            <input  value={username}
                                    name="username"
                                    id="username"
                                    placeholder="username"
                                    onChange={handleUsernameChange}  autoComplete="no" type="text"/>
                            <FormField3D/>
                        </div>
                        <div className="control block-cube block-input">
                            <input name='password' type="password" placeholder="password" onChange={handlePasswordChange}/>
                            <FormField3D/>
                        </div>
                        <div className="auth-buttons-container">
                            <button type="submit">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Login
                            </button>
                            <button onClick={() => toggleForm('Register')}>Register</button>
                        </div>
                    </form>


                </div>) : (<div>


                    <form onSubmit={handleSubmit} method="post" className='form' >
                        <div className='control block-cube block-input'>
                            <input name='username' type="text" placeholder="username" autoComplete="no"/>
                            <FormField3D/>
                        </div>
                        <div className='control block-cube block-input'>
                            <input name='password' type="password" placeholder="password"/>
                            <FormField3D/>
                        </div>
                        <div className='control block-cube block-input'>
                            <input name='repeat-password' type="password" placeholder="repeat password"/>
                            <FormField3D/>
                        </div>
                        <div className="auth-buttons-container">
                            <button onClick={() => toggleForm('Login')}>Login</button>
                            <button type="submit">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Register</button>
                        </div>
                    </form>


                </div>
            )}
        </div>
    )
}

export default LoginRegisterForm