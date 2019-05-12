import React from 'react';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from "./css/Login.module.css"
import dropboxLogo from "../dropbox-logo.png";
import logo from "../logo.png";
const CLIENT_ID = '2k9z1293u11it1b';

const Login = () => {
    const dbx = new Dropbox({
        clientId: CLIENT_ID,
        fetch: fetch,
    })
    return (
        <>
        {token$.value ? null : 
            <div className={styles.loginBody}>
            <header className={styles.loginHeader}>
            <img src={logo} className={styles.logo} alt=""/>
            <i class="fas fa-bars"></i>
                </header>
                <a className={styles.loginA}href={dbx.getAuthenticationUrl('http://localhost:3000/auth')}>
                <img src={dropboxLogo} className={styles.dropboxLogo} alt=""/>
                <button className={styles.loginButton}>Connect w/ Dropbox</button>
                </a>
            </div>
            }
        </>
    )
}

export default Login;
