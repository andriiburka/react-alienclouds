import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    const redirectTo = useNavigate()
    const { user, logout } = useAuthContext()

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout()
                redirectTo('/catalog')
            })
    }, [])

    return null
}

export default Logout;