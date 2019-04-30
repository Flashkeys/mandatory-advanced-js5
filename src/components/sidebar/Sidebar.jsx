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
          <Link to={`/Temp`} className={styles.link}>Happy</Link>
        </div>
      </div>
    </div>
  )
}
export default Sidebar