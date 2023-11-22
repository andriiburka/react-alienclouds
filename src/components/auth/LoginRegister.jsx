import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuthContext} from '../../contexts/AuthContext'
import {useNotificationContext, types} from '../../contexts/NotificationContext'
import useForm from '../../hooks/useForm'
import * as authService from '../../services/authService'
import {Navbar} from "react-bootstrap";
import Navigation from "../partials-components/Navigation";

function LoginRegisterForm({
                               loginSubmitHandler,
                           }) {

    // Hooks
    const [currentForm, setCurrentForm] = useState('Register')
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    })

    const {login} = useAuthContext()
    const {addNotification} = useNotificationContext()
    const navigate = useNavigate()

    // Fake users
    const userList = ['george@abv.bg', 'john@abv.bg']


    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }


    const onEmailChange = (e) => {
        let email = e.target.value
        const isUserInList = userList.includes(email)
        isUserInList ? toggleForm('Login') : toggleForm('Register')
    }


    // const registerSubmitHandler = (e) => {
    //     e.preventDefault()
    //     let formData = new FormData(e.currentTarget)
    //     let {email, password} = Object.fromEntries(formData)
    //
    //     authService.register(email, password)
    //         .then(authData => {
    //             console.log(authData)
    //             login(authData)
    //             navigate('/catalog')
    //         })
    // }

    // const loginSubmitHandler = (e) => {
    //     e.preventDefault()
    //     let formData = new FormData(e.currentTarget)
    //     let {email, password} = Object.fromEntries(formData)
    //
    //     authService.login(email, password)
    //         .then(authData => {
    //             login(authData)
    //             addNotification('You logged in successfully', types.success)
    //             navigate('/catalog')
    //
    //         })
    //         .catch(err => {
    //             alert(err)
    //         })
    // }


    return (
        <div className="login-container auth-box">
            {currentForm === 'Register' ? <>{

                    /*\\\\\\\\       /\\\\\\\\\\\\\\\    /\\\\\\\\\\\\   /\\\\\\\\\\\     /\\\\\\\\\\\    /\\\\\\\\\\\\\\\  /\\\\\\\\\\\\\\\   /\\\\\\\\\
                    /\\\///////\\\   \/\\\///////////   /\\\//////////   \/////\\\///    /\\\/////////\\\ \///////\\\/////  \/\\\///////////   /\\\///////\\\
                    \/\\\     \/\\\   \/\\\             \/\\\                 \/\\\      \//\\\      \///        \/\\\       \/\\\             \/\\\     \/\\\
                     \/\\\\\\\\\\\/    \/\\\\\\\\\\\     \/\\\    /\\\\\\\     \/\\\       \////\\\               \/\\\       \/\\\\\\\\\\\     \/\\\\\\\\\\\/
                      \/\\\//////\\\    \/\\\///////      \/\\\   \/////\\\     \/\\\          \////\\\            \/\\\       \/\\\///////      \/\\\//////\\\
                       \/\\\    \//\\\   \/\\\             \/\\\       \/\\\     \/\\\             \////\\\         \/\\\       \/\\\             \/\\\    \//\\\
                        \/\\\     \//\\\  \/\\\             \/\\\       \/\\\     \/\\\      /\\\      \//\\\        \/\\\       \/\\\             \/\\\     \//\\\
                         \/\\\      \//\\\ \/\\\\\\\\\\\\\\\ \//\\\\\\\\\\\\/   /\\\\\\\\\\\ \///\\\\\\\\\\\/         \/\\\       \/\\\\\\\\\\\\\\\ \/\\\      \//\\\
                          \///        \///  \///////////////   \////////////    \///////////   \///////////            \///        \///////////////  \///        \/*/}

                    <form method="POST"
                        // onSubmit={registerSubmitHandler}
                          onSubmit={onSubmit}
                    >

                        <h2 className="auth-title">
                            {currentForm === 'Login' ?
                                <a className="login-3d change-text-to-register"
                                   onClick={() => toggleForm('Register')}>Login</a>
                                :
                                <a className="login-3d change-text-to-login"
                                   onClick={() => toggleForm('Login')}>Register</a>}
                        </h2>

                        <input
                            id="email"
                            name="email"
                            defaultValue="@abv.bg"
                            required="required"
                            type="text"
                            autoComplete="email"
                            // onChange={onEmailChange}
                        />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            required="required"

                        />

                        <input
                            type="password"
                            name="confirm-pass"
                            id="repeat-pass"
                            placeholder="repeat password"
                            required="required"
                        />


                        <button type="submit" className="btn btn-primary btn-block btn-large">Continue</button>

                    </form>


                </>
                :
                <>{

                    /*\\                  /\\\\\           /\\\\\\\\\\\\  /\\\\\\\\\\\  /\\\\\     /\\\
                    \/\\\                 /\\\///\\\      /\\\//////////  \/////\\\///  \/\\\\\\   \/\\\
                     \/\\\               /\\\/  \///\\\   /\\\                 \/\\\     \/\\\/\\\  \/\\\
                      \/\\\              /\\\      \//\\\ \/\\\    /\\\\\\\     \/\\\     \/\\\//\\\ \/\\\
                       \/\\\             \/\\\       \/\\\ \/\\\   \/////\\\     \/\\\     \/\\\\//\\\\/\\\
                        \/\\\             \//\\\      /\\\  \/\\\       \/\\\     \/\\\     \/\\\ \//\\\/\\\
                         \/\\\              \///\\\  /\\\    \/\\\       \/\\\     \/\\\     \/\\\  \//\\\\\\
                          \/\\\\\\\\\\\\\\\    \///\\\\\/     \//\\\\\\\\\\\\/   /\\\\\\\\\\\ \/\\\   \//\\\\\
                           \///////////////       \/////        \////////////    \///////////  \///     \///*/}

                    <form method="POST"
                        // onSubmit={loginSubmitHandler}
                          onSubmit={onSubmit}
                    >
                        <h2 className="login-title">
                            {currentForm === 'Login'
                                ? <a className="login-3d change-text-to-register"
                                     onClick={() => toggleForm('Register')}>Login</a>
                                : <a className="login-3d change-text-to-login"
                                     onClick={() => toggleForm('Login')}>Register</a>
                            }</h2>

                        <input
                            id="email"
                            type="text"
                            name="email"
                            // placeholder="e-mail"
                            defaultValue="@abv.bg"
                            required="required"
                            autoComplete="email"
                            // onBlur={onEmailChange}
                            onChange={onChange}
                            value={values.email}


                        />


                        <input
                            type="password"
                            id="login-password-input"
                            name="password"
                            placeholder="password"
                            required="required"
                            onChange={onChange}
                            value={values.password}

                        />
                        <button className="btn btn-primary btn-block btn-large">Continue</button>

                    </form>
                </>
            }
        </div>
    )
}

export default LoginRegisterForm