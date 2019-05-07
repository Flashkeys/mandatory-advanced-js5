import React, { useEffect, useState } from 'react';
import { updateToken } from './store.js'
import { Link, Redirect } from "react-router-dom";
import parseQueryString from "./utils";

const Auth = () => {
    const [isAuthenticated, updateisAuthenticated] = useState(false)
    useEffect(() => {
        updateisAuthenticated(true)
    }, [])

    if (isAuthenticated) {
        const hash = parseQueryString(window.location.hash).access_token;
        console.log(hash);
        updateToken(hash);
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