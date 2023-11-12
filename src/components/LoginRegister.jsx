import React, {useState} from 'react'

function LoginRegisterForm() {
    const [currentForm, setCurrentForm] = useState('Login')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [changeText, setChangeText] = useState('')

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
        <>
            <div className="login-container auth-box">
            {/*<div className="auth-box">*/}


                {currentForm === 'Login' ? (
                    <div>
                        <form onSubmit={handleSubmit} method="post" className='form'>
                            <h2 className="login-title">
                                {currentForm === 'Login' ?
                                    <a className="login-3d change-text-to-register" onClick={() => toggleForm('Register')}>Login</a> :
                                    <a className="login-3d change-text-to-login" onClick={() => toggleForm('Login')}>Register</a>
                                }
                            </h2>
                            <input value={username}
                                   name="username"
                                   placeholder="Username"
                                   required="required" type="text"/>

                            <input onChange={handlePasswordChange}
                                   name="password"
                                   placeholder="Password"
                                   required="required" type="password"/>

                            <button type="submit" className="btn btn-primary btn-block btn-large">Continue</button>
                        </form>
                    </div>)
                    :
                    (<div>

                            <form onSubmit={handleSubmit} method="post" className='form'>
                                <h2 className="login-title">
                                    {currentForm === 'Login' ?

                                        <a className="login-3d change-text-to-register"
                                           onClick={() => toggleForm('Register')}>Login</a> :
                                        <a className="login-3d change-text-to-login" onClick={() => toggleForm('Login')}>Register</a>
                                    }
                                </h2>
                                <input value={username}
                                       name="username"
                                       placeholder="Username"
                                       required="required" type="text"/>

                                <input onChange={handlePasswordChange}
                                       name="password"
                                       placeholder="Password"
                                       required="required" type="password"/>

                                <input onChange={handlePasswordChange}
                                       name="repeat-password"
                                       placeholder="Password"
                                       required="required" type="password"/>


                                <button type="submit" className="btn btn-primary btn-block btn-large">Continue</button>

                            </form>

                        </div>
                    )}
            </div>
        </>

    )
}

export default LoginRegisterForm