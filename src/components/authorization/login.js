import React from 'react';
import { Dropbox } from 'dropbox';
const CLIENT_ID = '2k9z1293u11it1b';

const Login = () => {
    const dbx = new Dropbox({
        clientId: CLIENT_ID,
        fetch: fetch,
    })
    return (
        <>
            <div className="login">
                <a href={dbx.getAuthenticationUrl('http://localhost:3000/auth')}><button>Login</button></a>
            </div>
        </>
    )
}

export default Login;
