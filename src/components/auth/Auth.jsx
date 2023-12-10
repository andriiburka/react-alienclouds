import './Auth.css'

import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth'
import {auth} from "../../firebase-config";



function AuthForm() {

    const [currentForm, setCurrentForm] = useState('Login')

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


//=============================== TOGGLE FORM ===============================================
    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }
    const onEmailChange = (e) => {
        let email = e.target.value
        // const isUserInList = userList.includes(email)
        // isUserInList ? toggleForm('Login') : toggleForm('Register')
    }
//=============================== TOGGLE FORM END ===============================================


    const register = async (e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
        } catch (error) {
            console.log(error.message)
        }

    }

    const login = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
        } catch (error) {
            console.log(error.message)
        }
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

                        <form method="POST">

                            <h2 className="auth-title">
                                {currentForm === 'Login' ?
                                    <a className="login-3d change-text-to-register"
                                       onClick={() => toggleForm('Register')}>Login</a>
                                    :
                                    <a className="login-3d change-text-to-login"
                                       onClick={() => toggleForm('Login')}>Register</a>}
                            </h2>

                            <input
                                name="register-email"
                                onChange={(event) => {
                                    setRegisterEmail(event.target.value)
                                }}
                                placeholder="email"
                                type="text"
                            />

                            <input
                                name="register-password"
                                onChange={(event) => {
                                    setRegisterPassword(event.target.value)
                                }}
                                placeholder="password"
                                type="password"
                            />


                            <button
                                onClick={register}
                                className="btn btn-primary btn-block btn-large">
                                Submit
                            </button>

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

                        <form method="POST">
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
                                name="login-email"
                                onChange={(event) => {
                                    setLoginEmail(event.target.value)
                                }}
                                onBlur={onEmailChange}

                                type="text"
                                placeholder="email"

                            />


                            <input
                                name="login-password"
                                onChange={(event) => {
                                    setLoginPassword(event.target.value)
                                }}
                                type="password"
                                placeholder="password"
                            />

                            <button
                                onClick={login}
                                className="btn btn-primary btn-block btn-large">
                                Submit
                            </button>
                        </form>


                    </>
                }
            </div>
        </>

    )
}

export default AuthForm