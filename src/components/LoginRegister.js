import React, {useRef, useState} from 'react'
import FormField3D from "./FormField3D";

function LoginRegisterForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [currentForm, setCurrentForm] = useState('Login')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }





    const handleUsernameChange = (event) => {
        // Update the username state with the user's input
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Hello, " + username + "!");
    }



    return (
        <div className="auth-box" style={{userSelect: "none"}}>

            <h2>{currentForm === 'Login' ? 'Login' : 'Register'}</h2>

            {currentForm === 'Login' ? (
                <loginFragment>
                    <form onSubmit={handleSubmit} method="GET" id="login-form" className="form">
                        <div className='control block-cube block-input'>
                            <input  type="text" id="username" name="username" value={username} onChange={handleUsernameChange} placeholder="username"/>
                            <FormField3D/>
                        </div>
                        <div className="control block-cube block-input">
                            <input name='password' type="password" placeholder="password"/>
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
                </loginFragment>

            ) : ( // REGISTER
                <registerFragment>
                    <form onSubmit={handleSubmit} method="post" className='form' id="login-form">
                        <div className='control block-cube block-input'>
                            <input name='username' type="text" placeholder="username"/>
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
                            <button>Login</button>
                            <button type="submit">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Register</button>
                        </div>
                    </form>
                </registerFragment>
            )}
        </div>
    );
}

export default LoginRegisterForm;


// ChatGPT
// import React, { useState } from 'react';
//
// function LoginRegisterForm() {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//
//     const handleToggle = () => {
//         setIsLogin(!isLogin);
//     }
//
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     }
//
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     }
//
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     }
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isLogin) {
//             // handle login form submit
//             console.log(`Email: ${email}, Password: ${password}`);
//         } else {
//             // handle register form submit
//             console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
//         }
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>{isLogin ? 'Login' : 'Register'}</h2>
//             {isLogin ? (
//                 <div>
//                     <label>
//                         Email:
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={handleEmailChange}
//                         />
//                     </label>
//                     <label>
//                         Password:
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                         />
//                     </label>
//                 </div>
//             ) : (
//                 <div>
//                     <label>
//                         Name:
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={handleNameChange}
//                         />
//                     </label>
//                     <label>
//                         Email:
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={handleEmailChange}
//                         />
//                     </label>
//                     <label>
//                         Password:
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                         />
//                     </label>
//                 </div>
//             )}
//             <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//             <button type="button" onClick={handleToggle}>
//                 {isLogin ? 'Need to register?' : 'Already have an account?'}
//             </button>
//         </form>
//     );
// }
//
// export default LoginRegisterForm;