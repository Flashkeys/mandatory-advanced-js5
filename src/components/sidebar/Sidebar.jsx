import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import logo from "../../logo.png";

const Sidebar = () => {


  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <img src={logo} className={styles.logo} alt=""/>
      </Link>
      <div className={styles.main}>
        <h3 className={styles.h3}>Main</h3>
        <div className={styles.Links}>
          <Link to={`/Temp`} className={styles.link}>Temp</Link>
          <Link to={`/Temp`} className={styles.link}>Example</Link>
          <Link to={`/Temp`} className={styles.link}>Testing</Link>
<<<<<<< HEAD
          <Link to={`/Temp`} className={styles.link}>ö-råd</Link>
          <Link to={`/Temp`} className={styles.link}>Login</Link>
=======
          <Link to={`/Temp`} className={styles.link}>Happy</Link>
>>>>>>> acccfc42f2ec80cf29d825eea98371106ffb925a
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