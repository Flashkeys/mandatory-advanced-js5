import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import styles from './css/Home.module.css';
import Sidebar from './Sidebar';
import Main from "./Main";
import { token$ } from "./store";

const Home = ({ match }) => {
  const [entries, updateEntries] = useState([]);

    if(token$.value === null){
        return <Redirect to="/" />
      }
    return (
        <div className={styles.homeContainer}>
            <Sidebar />
            <Main match={match} entries={entries} updateEntries={updateEntries} />
        </div>
    )
}
export default Home     