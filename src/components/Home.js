import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Home.module.css';
import Sidebar from './Sidebar';
import Main from "./Main";
import Login from './Login'
import Auth from './Auth';

const Home = () => {

    return (
        <div className={styles.homeContainer}>
            <Sidebar />
            <Main />
            <Login />
        </div>
    )
}
export default Home