import React, {useState} from 'react'
import {logDOM} from "@testing-library/react";

function LoginRegisterForm() {
    const [currentForm, setCurrentForm] = useState('Register')

    const [userList, setUserList] = useState(['admin@abv.bg'])
    const [showemailValidation, setShowemailValidation] = useState(false)
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // BASIC=================================================
        let formData = new FormData(e.currentTarget)
        let {email, password} = Object.fromEntries(formData)
        alert(`${email} ${password}`)
        //=======================================================
    }

    const onEmailBlur = (e) => {
        let email = e.target.value
        const isUserInList = userList.includes(email) // BOOLEAN
        isUserInList ? toggleForm('Login') : toggleForm('Register')
    }

    const onEmailChange = (e) => {
        let emailLen = e.target.value.length
        emailLen > 0 &&
        emailLen > 3 ? setShowemailValidation(true) : setShowemailValidation(false)

        let email = e.target.value
        const isUserInList = userList.includes(email) // BOOLEAN
        isUserInList ? toggleForm('Login') : toggleForm('Register')
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
                            {/*{setShowemailValidation &&*/}
                            {/*email.length > 3 ?*/}
                            {/*    <span style={{color: "whitesmoke"}}><small>VALID</small></span>*/}
                            {/*    :*/}
                            {/*    <span style={{color: "darkviolet"}}><small>NOT VALID</small></span>*/}


                            {/*}*/}


                            {/*<span style={{color: "red"}}><small>NOT VALID</small></span>*/}
                            <input
                                id="email"
                                name="email"
                                placeholder="e-mail"
                                // defaultValue="@abv.bg"
                                required="required"
                                type="text"
                                // onBlur={onEmailBlur}
                                onChange={onEmailChange}
                            />

                            <input
                                name="password"
                                placeholder="password"
                                required="required"
                                type="password"

                            />

                            <input
                                name="repeat-password"
                                placeholder="repeat-password"
                                required="required"
                                type="password"
                            />


                            <button type="submit" className="btn btn-primary btn-block btn-large">Continue</button>

                        </form>


                    </>
                    :
                    <>
                        
                        {/*  LOGIN  */}

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


                            {/*{   // checks if email length is less than 4 letters*/}
                            {/*    isemailValid ? <span style={{color: "green"}}><small>VALID</small></span> :*/}
                            {/*        <span style={{color: "red"}}><small>NOT VALID</small></span>*/}
                            {/*}*/}
                            <input
                                id="email"
                                type="text"
                                name="email"
                                placeholder="e-mail"
                                // defaultValue="@abv.bg"
                                required="required"
                                // onBlur={onEmailBlur}
                                onChange={onEmailChange}
                            />


                            <input
                                type="password"
                                id="login-password-input"
                                name="password"
                                placeholder="password"
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