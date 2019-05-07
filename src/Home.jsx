import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from "./components/main/Main";
import Login from './components/authorization/login'
import Auth from './components/authorization/auth';
const Home = () => {


    return (
        <div className={styles.homeContainer}>
        <p>test</p>
            <Sidebar />
            <Main />
            <Login />
        </div>
    )
}
export default Home