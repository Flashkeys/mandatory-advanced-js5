import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from "./components/main/Main";

const Home = () => {


    return (
        <div className={styles.homeContainer}>
            <Sidebar />
            <Main />
        </div>
    )
}
export default Home