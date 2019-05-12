import React from 'react';
import { Link, Redirect } from "react-router-dom";
import styles from './css/Home.module.css';
import Sidebar from './Sidebar';
import Main from "./Main";
import Login from './Login'
import Auth from './Auth';
import { token$ } from "./store";

const Home = ({ match }) => {
    if(token$.value === null){
        return <Redirect to="/" />
      }
    return (
        <div className={styles.homeContainer}>
            <Sidebar />
            <Main {...match} />
        </div>
    )
}
export default Home