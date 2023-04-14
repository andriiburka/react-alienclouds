import React, {useRef, useState} from 'react'
import FormField3D from "./partials-components/FormField3D";

function LoginRegisterForm() {
    // const [error, setError] = useState(['AuthErrors: Static Default']);
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')

    // function handleRegister() {
    //     // handle registration logic here
    //     // if an error occurs, add it to the errors array
    //     setError(['Username already taken', 'Passwords do not match']);
    // }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }
    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // }
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
                            <button type="submit" className="ripple" data-ripple-color="#89669b" >
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