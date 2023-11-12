import React, {useState} from 'react'

function LoginRegisterForm() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const [currentForm, setCurrentForm] = useState('Login')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    const handleToggle = () => {
        setIsLogin(!isLogin)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isLogin) {
            // handle login form submit
            console.log(`Email: ${email}, Password: ${password}`)
        } else {
            // handle register form submit
            console.log(`Name: ${name}, Email: ${email}, Password: ${password}`)
        }
    }

    return (
        <div className="auth-box no-copy" >

            <h2>{currentForm === 'Login' ? 'Login' : 'Register'}</h2>

            {currentForm === 'Login' ? (
                <div>
                    <form onSubmit={handleSubmit} method="POST" action="LoginRegister" autoComplete='off' className
                          className='form' id="login-form">
                        {/* USERNAME */}
                        <div className='control block-cube block-input'>
                            <input name='username' type="text" placeholder="username"/>
                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </div>
                        {/* PASSWORD */}
                        <div className='control block-cube block-input'>
                            <input name='password' type="password" placeholder="password"/>
                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </div>
                        {/* AUTH BUTTONS */}
                        <div className="auth-buttons-container">
                            <a>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Login
                            </a>
                            <a onClick={() => toggleForm('Register')}>Register</a>
                        </div>
                    </form>
                </div>
            ) : (



                // REGISTER FORM
                <div>
                    <form onSubmit={handleSubmit} method="POST" action="" autoComplete='off' className='form'
                          id="login-form">
                        {/* FULL NAME */}
                        <div className='control block-cube block-input'>
                            <input name="fullname" type="text" placeholder="full name"/><>
                            <div className='bg-top'>
                                <div className="bg-inner"></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </>
                        </div>
                        {/* USERNAME */}
                        <div className='control block-cube block-input'>
                            <input name='username' type="text" placeholder="username"/><>
                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </>
                        </div>
                        {/* PASSWORD */}
                        <div className='control block-cube block-input'>
                            <input name='password' type="password" placeholder="password"/><>
                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </>
                        </div>
                        {/* REPEAT PASSWORD */}
                        <div className='control block-cube block-input'>
                            <input name='password' type="password" placeholder="repeat password"/><>
                            <div className='bg-top'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg-right'>
                                <div className='bg-inner'></div>
                            </div>
                            <div className='bg'>
                                <div className='bg-inner'></div>
                            </div>
                        </>
                        </div>

                        <div className="auth-buttons-container" style={{display: "flex", position: "relative"}}>
                            <a onClick={() => toggleForm('Login')}>Login</a>
                            <a type="submit">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Register
                            </a>
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