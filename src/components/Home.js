import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Home.module.css';
import Sidebar from './Sidebar';
import Main from "./Main";
import Login from './Login'
import Auth from './Auth';
import { token$ } from "./store";

const Home = () => {

    return (
        <div className={styles.homeContainer}>
            <Sidebar />
            <Main />
            {!token$.value ? <Login /> : null}
        </div>
    )
}
export default Home