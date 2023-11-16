import React, {useState} from 'react'

function LoginRegisterForm() {
    const [currentForm, setCurrentForm] = useState('Register')

    const [userList, setUserList] = useState(['admin'])
    const [isUsernameValid, setIsUsernameValid] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // BASIC=================================================
        let formData = new FormData(e.currentTarget)
        let {username, password} = Object.fromEntries(formData)
        alert(`${username} ${password}`)
        //=======================================================
    }

    const onUsernameBlur = (e) => {
        let username = e.target.value
        const isUserInList = userList.includes(username) // BOOLEAN
        isUserInList ? toggleForm('Login') : toggleForm('Register')
    }

    const onUsernameChange = (e) => {
        let username = e.target.value
        username.length > 3 ? setIsUsernameValid(true):setIsUsernameValid(false)
    }

    return (
        <>
            <div className="login-container auth-box">
                {currentForm === 'Register' ?
                    <>

                        {/* REGISTER */}

                        <form method="POST" onSubmit={submitHandler}>

                            <h2 className="auth-title">
                                {currentForm === 'Login' ?
                                    <a className="login-3d change-text-to-register"
                                       onClick={() => toggleForm('Register')}>Login</a>
                                    :
                                    <a className="login-3d change-text-to-login"
                                       onClick={() => toggleForm('Login')}>Register</a>}
                            </h2>

                            {   // checks if username length is less than 4 letters
                                isUsernameValid ? <span style={{color: "green"}}><small>VALID</small></span> :
                                    <span style={{color: "red"}}><small>NOT VALID</small></span>
                            }
                            <input
                                id="reg-username"
                                name="username"
                                placeholder="Username"
                                required="required"
                                type="text"
                                onBlur={onUsernameBlur}
                                onChange={onUsernameChange}
                            />

                            <input
                                name="password"
                                placeholder="Password"
                                required="required"
                                type="password"

                            />

                            <input
                                name="repeat-password"
                                placeholder="Password"
                                required="required" type="password"/>


                            <button type="submit" className="btn btn-primary btn-block btn-large">Continue</button>

                        </form>


                    </>
                    :
                    <>

                        <form method="POST"
                            // onSubmit={submitHandler}
                        >

                            <h2 className="login-title">
                                {currentForm === 'Login' ?
                                    <a className="login-3d change-text-to-register"
                                       onClick={() => toggleForm('Register')}>
                                        Login
                                    </a>
                                    :
                                    <a className="login-3d change-text-to-login" onClick={() => toggleForm('Login')}>
                                        Register
                                    </a>
                                }</h2>



                            {   // checks if username length is less than 4 letters
                                isUsernameValid ? <span style={{color: "green"}}><small>VALID</small></span> :
                                    <span style={{color: "red"}}><small>NOT VALID</small></span>
                            }
                            <input
                                id="log-username"
                                type="text"
                                id="login-username-input"
                                name="username"
                                placeholder="Username"
                                required="required"
                                onBlur={onUsernameBlur}
                                onChange={onUsernameChange}
                            />


                            <input
                                type="password"
                                id="login-password-input"
                                name="password"
                                placeholder="Password"
                                required="required"
                            />
                            <button className="btn btn-primary btn-block btn-large">Continue</button>

                        </form>


                    </>
                }
            </div>
        </>

    )
}

export default LoginRegisterForm