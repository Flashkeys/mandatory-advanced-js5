import React, { useEffect, useState } from 'react';
import { updateToken } from './store.js'
import { Link, Redirect } from "react-router-dom";
const Auth = () => {
    const [isAuthenticated, updateisAuthenticated] = useState(false)
    useEffect(() => {
        const hash = window.location.hash.access_token;
        console.log(hash);
        updateisAuthenticated(true)
        updateToken(hash)
    }, [])

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <>
            <div className="auth">
                <h1>Login</h1>
            </div>
        </>
    )
}
export default Auth;