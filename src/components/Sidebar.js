import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Sidebar.module.css';
import logo from "../logo.png";

const Sidebar = () => {


  return (
    <div className={styles.container}>
      <div>
        <Link to="/home/">
          <img src={logo} className={styles.logo} alt=""/>
        </Link>
        <div className={styles.main}>
          <h3 className={styles.h3}>Meny</h3>
          <div className={styles.Links}>
            <Link to="/home/" className={styles.link}>Filer (root)</Link>
          </div>
        </div>
      </div>
      <div className={styles.storageHeader}>
        <p> / 2 GB</p>
        <progress id="file" max="100" value="70"> 70% </progress>
      </div>
    </div>
  )
}
export default Sidebar