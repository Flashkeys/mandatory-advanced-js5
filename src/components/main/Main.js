import React from 'react';
import { Switch, Route } from "react-router-dom";
import styles from "./Main.module.css" 
import Temp from "../../Temp";

function Main() {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.homeText}>
          <h3>Home</h3>
        </div>
        <div className={styles.inputHeader}>
          <div className={styles.inputSearch}>
            <input type="text" placeholder="Text..." className={styles.inputSearchInput} />
            <div className={styles.iconSearch}>
              <i className="icon ion-md-search"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainContainer}>
      </div>
    </div>
  )
}

function Test() {
  return (
    <p>Test</p>
  )
}


export default Main;