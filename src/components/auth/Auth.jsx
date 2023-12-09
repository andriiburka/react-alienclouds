import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import * as authService from '../../services/authService'
import './Auth.css'


function LoginRegisterForm() {
    const [currentForm, setCurrentForm] = useState('Register')
    const userList = ['george@abv.bg', 'john@abv.bg']

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    const onEmailChange = (e) => {
        let email = e.target.value
        const isUserInList = userList.includes(email) // BOOLEAN
        isUserInList ? toggleForm('Login') : toggleForm('Register')
    }



    const navigate = useNavigate()


    const registerSubmitHandler = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let {email, password} = Object.fromEntries(formData)

        authService.register(email, password)
            .then(authData => {
                console.log(authData)
                // login(authData)
                navigate('/catalog')
            })
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let {email, password} = Object.fromEntries(formData)

        authService.login(email, password)
            .then(authData => {
                navigate('/catalog')

            })
            .catch(err => {
                alert(err)
            })
    }


    return (
        <>
            <div className="login-container auth-box">
                {currentForm === 'Register' ? <>{/*

/\\\\\\\\\       /\\\\\\\\\\\\\\\    /\\\\\\\\\\\\   /\\\\\\\\\\\     /\\\\\\\\\\\    /\\\\\\\\\\\\\\\  /\\\\\\\\\\\\\\\   /\\\\\\\\\
/\\\///////\\\   \/\\\///////////   /\\\//////////   \/////\\\///    /\\\/////////\\\ \///////\\\/////  \/\\\///////////   /\\\///////\\\
\/\\\     \/\\\   \/\\\             \/\\\                 \/\\\      \//\\\      \///        \/\\\       \/\\\             \/\\\     \/\\\
 \/\\\\\\\\\\\/    \/\\\\\\\\\\\     \/\\\    /\\\\\\\     \/\\\       \////\\\               \/\\\       \/\\\\\\\\\\\     \/\\\\\\\\\\\/
  \/\\\//////\\\    \/\\\///////      \/\\\   \/////\\\     \/\\\          \////\\\            \/\\\       \/\\\///////      \/\\\//////\\\
   \/\\\    \//\\\   \/\\\             \/\\\       \/\\\     \/\\\             \////\\\         \/\\\       \/\\\             \/\\\    \//\\\
    \/\\\     \//\\\  \/\\\             \/\\\       \/\\\     \/\\\      /\\\      \//\\\        \/\\\       \/\\\             \/\\\     \//\\\
     \/\\\      \//\\\ \/\\\\\\\\\\\\\\\ \//\\\\\\\\\\\\/   /\\\\\\\\\\\_\///\\\\\\\\\\\/         \/\\\       \/\\\\\\\\\\\\\\\ \/\\\      \//\\\
      \///        \///  \///////////////   \////////////    \///////////   \///////////            \///        \///////////////  \///        \///*/}

                        <form
                            method="POST"
                            onSubmit={registerSubmitHandler}
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
                                onChange={onEmailChange}
                            />

                            <input
                                name="password"
                                placeholder="password"
                                required="required"
                                type="password"

                            />


                            <button type="submit" className="btn btn-primary btn-block btn-large">Continue</button>

                        </form>


                    </>
                    :
                    <>{/*

  /\\\                  /\\\\\           /\\\\\\\\\\\\  /\\\\\\\\\\\  /\\\\\     /\\\
  \/\\\                 /\\\///\\\      /\\\//////////  \/////\\\///  \/\\\\\\   \/\\\
   \/\\\               /\\\/  \///\\\   /\\\                 \/\\\     \/\\\/\\\  \/\\\
    \/\\\              /\\\      \//\\\ \/\\\    /\\\\\\\     \/\\\     \/\\\//\\\ \/\\\
     \/\\\             \/\\\       \/\\\ \/\\\   \/////\\\     \/\\\     \/\\\\//\\\\/\\\
      \/\\\             \//\\\      /\\\  \/\\\       \/\\\     \/\\\     \/\\\ \//\\\/\\\
       \/\\\              \///\\\  /\\\    \/\\\       \/\\\     \/\\\     \/\\\  \//\\\\\\
        \/\\\\\\\\\\\\\\\    \///\\\\\/     \//\\\\\\\\\\\\/   /\\\\\\\\\\\ \/\\\   \//\\\\\
         \///////////////       \/////        \////////////    \///////////  \///     \/////      */}

                        <form method="POST"
                              onSubmit={loginSubmitHandler}
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

                            <input
                                id="email"
                                type="text"
                                name="email"
                                // placeholder="e-mail"
                                defaultValue="@abv.bg"
                                required="required"
                                autoComplete="email"
                                onBlur={onEmailChange}
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